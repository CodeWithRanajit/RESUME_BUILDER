import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { emailRegex } from "../utils/validation.js";

const registerUser = asyncHandler(async (req, res) => {

  const { name, email, password, confirmPassword } = req.body;
    
  const cleanName = name?.trim();
  const cleanEmail = email?.trim().toLowerCase();

  if (password !== password?.trim()) {
    throw new ApiError(
      400,
      "Password should not contain spaces at beginning or end",
    );
  }
  if (!name || !email || !password || !confirmPassword) {
    throw new ApiError(400, "All fields are required");
  }

  if (name.length < 3 || name.length > 50) {
    throw new ApiError(400, "Name must be between 3 and 50 characters");
  }

  if (!emailRegex.test(email)) {
    throw new ApiError(400, "Invalid Email formate");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, "User Registered Successfully"));
});

export { registerUser };
