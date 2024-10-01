import cron from "node-cron";
import Prisma from "./lib/prisma";
import moment from "moment";
export const cronAppointments = cron.schedule("*/5 * * * *", async () => {
  const upcomingAppointments = await Prisma.appointment.findMany({
    where: {
      status: {
        in: ["UPCOMING", "IN_PROGRESS"],
      },
    },
  });
  upcomingAppointments.forEach(async (appointment) => {
    const currentDate = moment(); // Current Date and Time

    // Assuming appointment.scheduledDate is the date you want to combine with time
    const appointmentDate = moment(appointment.scheduledDate).format(
      "YYYY-MM-DD"
    );

    // Extract only the time from start and end time
    const startTime = moment.utc(appointment.startTime).format("HH:mm:ss");
    const endTime = moment.utc(appointment.endTime).format("HH:mm:ss");

    // Combine appointment date with start and end times
    const startDateTime = moment(`${appointmentDate} ${startTime}`).utc();
    const endDateTime = moment(`${appointmentDate} ${endTime}`).utc();
    console.log("startDateTime", startDateTime);
    console.log("endDateTime", endDateTime);
    console.log("Current Date", currentDate.format());
    console.log("Start DateTime", startDateTime.format());
    console.log("End DateTime", endDateTime.format());

    if (currentDate.isBetween(startDateTime, endDateTime)) {
      await Prisma.appointment.update({
        where: {
          id: appointment.id,
        },
        data: {
          status: "IN_PROGRESS",
        },
      });
      console.log("Appointment is in progress");
    } else if (currentDate.isAfter(endDateTime)) {
      await Prisma.appointment.update({
        where: {
          id: appointment.id,
        },
        data: {
          status: "MISSED",
        },
      });
      console.log("Appointment is missed");
    }
  });
});
