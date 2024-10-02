import cron from "node-cron";
import Prisma from "./lib/prisma";
import moment from "moment";
export const cronAppointments = cron.schedule("*/1 * * * *", async () => {
  const upcomingAppointments = await Prisma.appointment.findMany({
    where: {
      status: {
        in: ["UPCOMING", "IN_PROGRESS"],
      },
    },
  });
  upcomingAppointments.forEach(async (appointment) => {
    const currentDate = moment();

    const appointmentDate = moment(appointment.scheduledDate).format(
      "YYYY-MM-DD"
    );

    const startTime = moment.utc(appointment.startTime).format("HH:mm:ss");
    const endTime = moment.utc(appointment.endTime).format("HH:mm:ss");

    const startDateTime = moment(`${appointmentDate} ${startTime}`).utc();
    const endDateTime = moment(`${appointmentDate} ${endTime}`).utc();

    if (currentDate.isBetween(startDateTime, endDateTime)) {
      await Prisma.appointment.update({
        where: {
          id: appointment.id,
        },
        data: {
          status: "IN_PROGRESS",
        },
      });
    } else if (currentDate.isAfter(endDateTime.add(30, "minutes"))) {
      await Prisma.appointment.update({
        where: {
          id: appointment.id,
        },
        data: {
          status: "MISSED",
        },
      });
    }
  });
});
