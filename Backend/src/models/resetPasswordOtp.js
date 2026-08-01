import mongoose, { Schema } from "mongoose";

const passwordResetOtpSchema = new Schema({
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
        required:true
    },
    expiresAt: {
        type: Date,
        required:true
    },
}, { timestamps: true });

passwordResetOtpSchema.index({expiresAt:1}, {expireAfterSeconds:0});

const passwordResetModel = mongoose.model("PasswordResetOtp", passwordResetOtpSchema);
export default passwordResetModel;