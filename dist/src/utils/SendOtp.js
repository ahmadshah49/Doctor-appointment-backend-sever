"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOtp = exports.otp = void 0;
const twilio_1 = __importDefault(require("twilio"));
const otp_generator_1 = __importDefault(require("otp-generator"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.TWILIO_ACCOUNT_SID ||
    !process.env.TWILIO_AUTH_TOKEN ||
    !process.env.TWILIO_PHONE_NO) {
    console.log("All Environment Variables,");
    throw new Error("Twilio credentials are missing from environment variables All Environment Variables");
}
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNo = process.env.TWILIO_PHONE_NO;
const twilioClient = (0, twilio_1.default)(accountSid, authToken);
exports.otp = otp_generator_1.default.generate(4, {
    lowerCaseAlphabets: false,
    specialChars: false,
    upperCaseAlphabets: false,
});
const createOtp = async (phoneNo, generatedOtp) => {
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (!phoneRegex.test(phoneNo)) {
        throw new Error("Invalid phone number format.");
    }
    try {
        await twilioClient.messages.create({
            body: `Your OTP is: ${generatedOtp}`,
            to: phoneNo,
            from: twilioPhoneNo,
        });
        console.log("OTP Sent: " + generatedOtp);
    }
    catch (error) {
        console.error("Error Sending OTP", error);
    }
};
exports.createOtp = createOtp;
