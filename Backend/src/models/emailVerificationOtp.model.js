import mongoose, { Schema } from "mongoose";

const emailVerificationOtpSchema = new Schema({
    user: {
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
        required:true,
    },
    expiresAt: {
        type: Date,
        required:true,
    }

}, { timestamps: true });

emailVerificationOtpSchema.index({
    expiresAt:1
}, {expireAfterSeconds:0});


const emailVerificationModel = mongoose.model("EmailVerificationOtp", emailVerificationOtpSchema);
export default emailVerificationModel;