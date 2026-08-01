import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength:[50, "Name cannot exceed 50 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"],
        index:true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength:[8,"Password must be at least 8 characters long"],
    },
    isEmailVerified: {
        type: Boolean,
        default: false,
    },
    emailVerifiedAt: {
        type: Date,
        default:null
    },
    lastLogin: {
        type: Date,
        default: null,
    },
    refreshToken: {
        type: String,
        default:null,
    },
    
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;