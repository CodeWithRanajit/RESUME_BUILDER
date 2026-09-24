import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import { ApiError } from "./ApiError.js";
import { SALT_ROUND } from "../constants.js";

const generateAccessTokenAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    const hashedRefreshToken=await bcrypt.hash(refreshToken,SALT_ROUND);

    user.refreshToken = hashedRefreshToken;
    await user.save();

    return {accessToken,refreshToken};
  } catch (error) {
     throw new ApiError(500, "Something went wrong while generating referesh and access token");
  }
};

export default generateAccessTokenAndRefreshToken;
