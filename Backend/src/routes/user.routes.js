import { Router } from "express";
import { googleAuthCallbackHandler, googleAuthStartHandler, login, registerUser, resendVerifyEmailOtp } from "../controllers/user.controller.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login",login);
router.post("/resend-verify-email-otp",resendVerifyEmailOtp);
router.get("/google",googleAuthStartHandler);
router.get("/google/callback",googleAuthCallbackHandler);

export default router;