"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAppointmentCancelEmail = exports.transporter = void 0;
const moment_1 = __importDefault(require("moment"));
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
const sendAppointmentCancelEmail = async (email, scheduledDate, name) => {
    const formatedDate = (0, moment_1.default)(scheduledDate).format("MMMM Do YYYY");
    const info = await exports.transporter.sendMail({
        from: "ahmadraza.fsd.pk94@gmail.com",
        to: email,
        subject: "Appointment Cancel",
        text: `${name} Your Appointment  at ${formatedDate} cancelled due to doctor unavailability please reschedule Your appointment `,
    });
};
exports.sendAppointmentCancelEmail = sendAppointmentCancelEmail;
