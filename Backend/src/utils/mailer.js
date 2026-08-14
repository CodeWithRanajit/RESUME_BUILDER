import nodemailer from "nodemailer";
import { ApiError } from "./ApiError.js";
import { asyncHandler } from "./asyncHandler.js";





const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASSWORD
    },
});

const sendEmail = async (to, subject, html) => {
    
        const info = await transporter.sendMail({
            from: `"ResumeCraft" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html,
        });
        
        return info;
}     

export default sendEmail;