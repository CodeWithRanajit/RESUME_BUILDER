import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { emailRegex, passwordRegex } from "../utils/validation.js";
import { User } from "../models/user.model.js";
import { capitalizeName } from "../utils/capitalizeName.js";
import { emailVerificationModel } from "../models/emailVerificationOtp.model.js";
import { emailTemplateForEmailVerification } from "../utils/filePath.js";
import sendEmail from "../utils/mailer.js";

const registerUser = asyncHandler(async (req, res) => {
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
    "Verify Your ResumeCraft Email",
    htmlemialTemplateForVerifyEmail,
  );
  const emailVerificationOtpModel = await emailVerificationModel.findOne({
    userId: user._id,
  });

  if (!emailVerificationOtpModel) {
    await emailVerificationModel.create({
      userId: createdUser._id,
      email:createdUser.email,
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

export { registerUser };
