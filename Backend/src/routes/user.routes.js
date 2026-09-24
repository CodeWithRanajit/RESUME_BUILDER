import { Router } from "express";
import { forgotPasswordOtp, getCurrentUser, googleAuthCallbackHandler, googleAuthStartHandler, login, logoutUser, refreshAccessToken, registerUser, resendVerifyEmailOtp, verifyEmailOtp } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login",login);
router.post("/resend-verify-email-otp",resendVerifyEmailOtp);
router.get("/google",googleAuthStartHandler);
router.get("/google/callback",googleAuthCallbackHandler);
router.get("/get-user",verifyJWT,getCurrentUser);
router.post("/refresh-token",refreshAccessToken);
router.post("/logout",verifyJWT,logoutUser);
router.post("/verify-email",verifyEmailOtp);
router.post("/reset-password-otp",forgotPasswordOtp);
export default router;