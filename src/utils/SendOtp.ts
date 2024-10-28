import twilio from "twilio";
import otpGenerator from "otp-generator";
import dotenv from "dotenv";
import { GraphQLError } from "graphql";
dotenv.config();

if (
  !process.env.TWILIO_ACCOUNT_SID ||
  !process.env.TWILIO_AUTH_TOKEN ||
  !process.env.TWILIO_PHONE_NO
) {
  throw new Error(
    "Twilio credentials are missing from environment variables All Environment Variables"
  );
}

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNo = process.env.TWILIO_PHONE_NO;

const twilioClient = twilio(accountSid, authToken);

export const otp = otpGenerator.generate(4, {
  lowerCaseAlphabets: false,
  specialChars: false,
  upperCaseAlphabets: false,
});

export const createOtp = async (phoneNo: string, generatedOtp: string) => {
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
  } catch (error) {
    throw new GraphQLError(error.message || "Something went wrong");
  }
};
