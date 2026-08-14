import mongoose, { Schema } from "mongoose";
import { RESET_PASSWORD_OTP_EXPIRY_MINUTES, SALT_ROUND } from "../constants.js";
import bcrypt from "bcryptjs";

const passwordResetOtpSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index:true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        index:true
    },
    otp: {
        type: String,
        required:true
    },
    expiresAt: {
        type: Date,
        required: true,
        default:()=> new Date(Date.now() + RESET_PASSWORD_OTP_EXPIRY_MINUTES * 60 * 1000)
    },
}, { timestamps: true });

passwordResetOtpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// generate otp
passwordResetOtpSchema.static.generateOtpForResetPassword = function () {
    return Math.floor(100000 + Math.random() * 999999).toString();
};

//store the hash otp into the db
passwordResetOtpSchema.pre("save", async function () {
    if (!this.isModified("otp")) return ;
        this.otp = await bcrypt.hash(this.otp, SALT_ROUND); 
});

// compare the otp
passwordResetOtpSchema.methods.isResetPasswordOtpCorrect = async function (otp) {
    return await bcrypt.compare(otp, this.otp);
}

// check the otp expier or not
passwordResetOtpSchema.methods.isResetPasswordOtpExpired = function () {
    return (new Date() > this.expiresAt);
}


const passwordResetModel = mongoose.model("PasswordResetOtp", passwordResetOtpSchema);
export default passwordResetModel;