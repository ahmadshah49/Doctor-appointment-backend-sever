import moment from "moment";
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

export const sendAppointmentCancelEmail = async (
  email: string,
  scheduledDate: Date,
  name: string
) => {
  const formatedDate = moment(scheduledDate).format("MMMM Do YYYY");
  const info = await transporter.sendMail({
    from: "ahmadraza.fsd.pk94@gmail.com",
    to: email,
    subject: "Appointment Cancel",
    text: `${name} Your Appointment  at ${formatedDate} cancelled due to doctor unavailability please reschedule Your appointment `,
  });
};
