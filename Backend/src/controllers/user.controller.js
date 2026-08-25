import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { emailRegex, passwordRegex } from "../utils/validation.js";
import { User } from "../models/user.model.js";
import { capitalizeName } from "../utils/capitalizeName.js";
import { emailVerificationModel } from "../models/emailVerificationOtp.model.js";
import { emailTemplateForEmailVerification } from "../utils/filePath.js";
import sendEmail from "../utils/mailer.js";
import generateAccessTokenAndRefreshToken from "../utils/generateToken.js";
import getGoogleClient from "../utils/getGoogleClient.js";
import { OAuthAccount } from "../models/oAuth.model.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    throw new ApiError(400, "All fields are required");
  }

  const cleanName = name?.trim();

  if (cleanName.length < 3 || cleanName.length > 60) {
    throw new ApiError(400, "Name must be between 3 and 60 characters");
  }
  const cleanEmail = email?.trim().toLowerCase();

  if (!emailRegex.test(cleanEmail)) {
    throw new ApiError(400, "Invalid Email formate");
  }

  const existingUser = await User.findOne({ email: cleanEmail });

  if (existingUser) {
    if (!existingUser.isEmailVerified) {
      throw new ApiError(
        409,
        "Email already registered but not verified, Please verify your email first",
      );
    }
    return res
      .status(409)
      .json(
        new ApiResponse(409, null, "Email already registered, Please login"),
      );
  }

  if (password !== password?.trim()) {
    throw new ApiError(
      400,
      "Password should not contain spaces at beginning or end",
    );
  }

  if (password.length < 8 || password.length > 20) {
    throw new ApiError(
      400,
      "Password must be between 8 and 20 characters long",
    );
  }

  if (!/[A-Z]/.test(password)) {
    throw new ApiError(
      400,
      "Password must contain at least one uppercase letter",
    );
  }

  if (!/[a-z]/.test(password)) {
    throw new ApiError(
      400,
      "Password must contain at least one lowercase letter",
    );
  }
  if (!/[0-9]/.test(password)) {
    throw new ApiError(400, "Password must contain at least one number");
  }
  if (!/[@$!%*?&]/.test(password)) {
    throw new ApiError(
      400,
      "Password must contain at least one special character",
    );
  }
  if (password !== confirmPassword) {
    throw new ApiError(400, "Passwords don't match. Please try again");
  }

  const user = await User.create({
    name: cleanName,
    email: cleanEmail,
    password,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  const createdUserFirstName = capitalizeName(createdUser.name);
  const otpForEmailVerifiaction =
    emailVerificationModel.generateOtpForEmailVerification();

  const htmlemialTemplateForVerifyEmail = emailTemplateForEmailVerification
    .replace("{{name}}", createdUserFirstName)
    .replace("{{otp}}", otpForEmailVerifiaction);

  await sendEmail(
    createdUser.email,
    "Verify Your Email Adress — ResumeCraft",
    htmlemialTemplateForVerifyEmail,
  );
  const emailVerificationOtpModel = await emailVerificationModel.findOne({
    userId: user._id,
  });

  if (!emailVerificationOtpModel) {
    await emailVerificationModel.create({
      userId: createdUser._id,
      email: createdUser.email,
      otp: otpForEmailVerifiaction,
    });
  } else {
    emailVerificationOtpModel.otp = otpForEmailVerifiaction;
    await emailVerificationOtpModel.save();
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        createdUser,
        "Registration successful. Verification OTP sent to your email.",
      ),
    );
});
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ApiError(400, "All fields are required");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(401, "Account not found. Please sign up first.");
  }
  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid user credentials");
  }
  if (!user.isEmailVerified) {
    const createdUserFirstName = capitalizeName(user.name);
    const otpForEmailVerifiaction =
      await emailVerificationModel.generateOtpForEmailVerification();
    const htmlemialTemplateForVerifyEmail = emailTemplateForEmailVerification
      .replace("{{name}}", createdUserFirstName)
      .replace("{{otp}}", otpForEmailVerifiaction);

    await sendEmail(
      user.email,
      "Verify Your Email Adress — ResumeCraft",
      htmlemialTemplateForVerifyEmail,
    );

    const emailVerificationOtpModel = await emailVerificationModel.findOne({
      userId: user._id,
    });

    if (!emailVerificationOtpModel) {
      await emailVerificationModel.create({
        userId: user._id,
        email: user.email,
        otp: otpForEmailVerifiaction,
      });
    } else {
      emailVerificationOtpModel.otp = otpForEmailVerifiaction;
      await emailVerificationOtpModel.save();
    }
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          null,
          "Email verification required. A new OTP has been sent to your email",
        ),
      );
  }
  user.lastLogin = Date.now();
  await user.save();
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(user._id);

  const accessTokenOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000,
  };

  const refreshTokenOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, accessTokenOptions)
    .cookie("refreshToken", refreshToken, refreshTokenOptions)
    .json(new ApiResponse(200, loggedInUser, "User logged In Successfully"));
});
export const resendVerifyEmailOtp = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new ApiError(400, "Email not found");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(401, "Account not found. Please sign up first.");
  }
  if (!user.isEmailVerified) {
    const createdUserFirstName = capitalizeName(user.name);
    const otpForEmailVerifiaction =
      await emailVerificationModel.generateOtpForEmailVerification();
    const htmlemialTemplateForVerifyEmail = emailTemplateForEmailVerification
      .replace("{{name}}", createdUserFirstName)
      .replace("{{otp}}", otpForEmailVerifiaction);

    await sendEmail(
      user.email,
      "Verify Your Email Adress — ResumeCraft",
      htmlemialTemplateForVerifyEmail,
    );

    const emailVerificationOtpModel = await emailVerificationModel.findOne({
      userId: user._id,
    });

    if (!emailVerificationOtpModel) {
      await emailVerificationModel.create({
        userId: user._id,
        email: user.email,
        otp: otpForEmailVerifiaction,
      });
    } else {
      emailVerificationOtpModel.otp = otpForEmailVerifiaction;
      await emailVerificationOtpModel.save();
    }
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          null,
          "A new OTP has been sent to your email. Please use it to verify your account.",
        ),
      );
  } else {
    return res
      .status(409)
      .json(
        new ApiResponse(
          409,
          null,
          "Your email is already verified. Please log in to continue.",
        ),
      );
  }
});
export const googleAuthStartHandler = asyncHandler(async (req, res) => {
  const client = getGoogleClient();

  if (!client) {
    throw new ApiError(500, "Unable to initialize Google authentication");
  }

  const url = client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: ["openid", "email", "profile"],
  });

  return res.redirect(url);
});
export const googleAuthCallbackHandler = asyncHandler(async (req, res) => {
  const code = req.query.code;

  if (!code) {
    throw new ApiError(
      400,
      "Missing or invalid authorization code in callback",
    );
  }

  const client = getGoogleClient();

  const { tokens } = await client.getToken(code);

  if (!tokens.id_token) {
    throw new ApiError(400, "No Google ID token is present");
  }

  const ticket = await client.verifyIdToken({
    idToken: tokens.id_token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  const googleId = payload?.sub;
  const email = payload?.email;
  const emailVerified = payload?.email_verified;
  const name = payload?.name;

  if (!googleId || !email || !emailVerified || !name) {
    throw new ApiError(400, "Invalid Google account");
  }

  const normalizedEmail = email.toLowerCase().trim();

  // Find Google account
  let oauthAccount = await OAuthAccount.findOne({
    provider: "google",
    providerAccountId: googleId,
  });

  let user;

  if (oauthAccount) {
    user = await User.findById(oauthAccount.userId);

    if (!user) {
      throw new ApiError(
        404,
        "User associated with this Google account not found",
      );
    }
  } else {
    // Check existing email
    user = await User.findOne({
      email: normalizedEmail,
    });

    // Create user
    if (!user) {
      user = await User.create({
        name: name,
        email: normalizedEmail,
        isEmailVerified: true,
        emailVerifiedAt: new Date(),
        authProvider: "google",
      });
    } else if (!user.isEmailVerified) {
      user.isEmailVerified = true;
      user.emailVerifiedAt = new Date();
      await user.save();
    }

    // Link Google account
    await OAuthAccount.create({
      userId: user._id,
      provider: "google",
      providerAccountId: googleId,
    });
  }

  user.lastLogin = new Date();
  await user.save();

  const { accessToken, refreshToken } =
  await generateAccessTokenAndRefreshToken(user._id);

  
  const accessTokenOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000,
  };

  const refreshTokenOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, accessTokenOptions)
    .cookie("refreshToken", refreshToken, refreshTokenOptions)
    .json(
      new ApiResponse(
        200,
        {
          accessToken,
          user: {
            id: user._id,
            email: user.email,
            isEmailVerified: user.isEmailVerified,
          },
        },
        "Google login successful",
      ),
    );
});
export const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user.refreshToken) {
      throw new ApiError(
        401,
        "Refresh token is expired or used"
      );
    }

    const {
      accessToken,
      newRefreshToken
    } = await generateAccessTokenAndRefreshToken(user._id);

    const accessTokenOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 15 * 60 * 1000
    };

    const refreshTokenOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    };

    return res
      .status(200)
      .cookie(
        "accessToken",
        accessToken,
        accessTokenOptions
      )
      .cookie(
        "refreshToken",
        newRefreshToken,
        refreshTokenOptions
      )
      .json(
        new ApiResponse(
          200,
          null,
          "Access token refreshed successfully"
        )
      );

  } catch (error) {
    throw new ApiError(
      401,
      error?.message || "Invalid refresh token"
    );
  }
});
export const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1
      }
    }
  );

  const accessTokenOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "strict"
  };

  const refreshTokenOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "strict"
  };

  return res
    .status(200)
    .clearCookie("accessToken", accessTokenOptions)
    .clearCookie("refreshToken", refreshTokenOptions)
    .json(
      new ApiResponse(
        200,
        null,
        "User logged out successfully"
      )
    );
});