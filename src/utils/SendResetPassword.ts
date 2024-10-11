import nodemailer from "nodemailer";
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ahmadraza.fsd.pk94@gmail.com",
    pass: process.env.MAIL_PASSWORD,
  },
});

export const sendResetPasswordOtp = async (email: string, token: string) => {
  const info = await transporter.sendMail({
    from: '"No Reply" <noreply@noreply.com>',
    to: email,
    subject: "Password Reset",
    text: `Your Otp is ${token}`,
  });
};
