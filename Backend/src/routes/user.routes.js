import { Router } from "express";
import { getCurrentUser, googleAuthCallbackHandler, googleAuthStartHandler, login, logoutUser, registerUser, resendVerifyEmailOtp } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login",login);
router.post("/resend-verify-email-otp",resendVerifyEmailOtp);
router.get("/google",googleAuthStartHandler);
router.get("/google/callback",googleAuthCallbackHandler);
router.get("/current-user",verifyJWT,getCurrentUser);
router.post("/logout",verifyJWT,logoutUser)

export default router;