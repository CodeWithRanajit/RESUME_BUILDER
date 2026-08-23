import { Router } from "express";
import { login, registerUser, resendVerifyEmailOtp } from "../controllers/user.controller.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login",login);
router.post("/resend-verify-email-otp",resendVerifyEmailOtp);

export default router;