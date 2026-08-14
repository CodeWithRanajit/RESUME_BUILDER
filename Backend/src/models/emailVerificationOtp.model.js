import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import { EMAIL_VERIFY_OTP_EXPIRY_MINUTES, SALT_ROUND } from "../constants.js";

const emailVerificationOtpSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    otp: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
      default: () =>
        new Date(Date.now() + EMAIL_VERIFY_OTP_EXPIRY_MINUTES * 60 * 1000),
    },
  },
  { timestamps: true },
);

emailVerificationOtpSchema.index(
  {
    expiresAt: 1,
  },
  { expireAfterSeconds: 0 },
);

// generate otp
emailVerificationOtpSchema.statics.generateOtpForEmailVerification =
  function () {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

//generate hashd otp
emailVerificationOtpSchema.pre("save", async function () {
  if (!this.isModified("otp")) return;
    this.otp = await bcrypt.hash(this.otp, SALT_ROUND);
});

//compare otp
emailVerificationOtpSchema.methods.isEmailVerifyOtpCorrect = async function (
  otp
) {
  return await bcrypt.compare(otp, this.otp);
};

// expiry check
emailVerificationOtpSchema.methods.isEmailVerificationOtpExpired = function () {
  return (this.expiresAt < new Date());
};

export const emailVerificationModel = mongoose.model(
  "EmailVerificationOtp",
  emailVerificationOtpSchema,
);

