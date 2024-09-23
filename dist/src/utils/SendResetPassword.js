"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResetPasswordOtp = exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
exports.transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "ahmadraza.fsd.pk94@gmail.com",
        pass: process.env.MAIL_PASSWORD,
    },
});
const sendResetPasswordOtp = async (email, token) => {
    const info = await exports.transporter.sendMail({
        from: '"No Reply" <noreply@noreply.com>',
        to: email,
        subject: "Password Reset",
        text: `Your Otp is ${token}`,
    });
};
exports.sendResetPasswordOtp = sendResetPasswordOtp;
