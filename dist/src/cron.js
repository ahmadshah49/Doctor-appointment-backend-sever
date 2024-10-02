"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cronAppointments = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const prisma_1 = __importDefault(require("./lib/prisma"));
const moment_1 = __importDefault(require("moment"));
exports.cronAppointments = node_cron_1.default.schedule("*/1 * * * *", async () => {
    const upcomingAppointments = await prisma_1.default.appointment.findMany({
        where: {
            status: {
                in: ["UPCOMING", "IN_PROGRESS"],
            },
        },
    });
    upcomingAppointments.forEach(async (appointment) => {
        const currentDate = (0, moment_1.default)();
        const appointmentDate = (0, moment_1.default)(appointment.scheduledDate).format("YYYY-MM-DD");
        const startTime = moment_1.default.utc(appointment.startTime).format("HH:mm:ss");
        const endTime = moment_1.default.utc(appointment.endTime).format("HH:mm:ss");
        const startDateTime = (0, moment_1.default)(`${appointmentDate} ${startTime}`).utc();
        const endDateTime = (0, moment_1.default)(`${appointmentDate} ${endTime}`).utc();
        if (currentDate.isBetween(startDateTime, endDateTime)) {
            await prisma_1.default.appointment.update({
                where: {
                    id: appointment.id,
                },
                data: {
                    status: "IN_PROGRESS",
                },
            });
        }
        else if (currentDate.isAfter(endDateTime.add(30, "minutes"))) {
            await prisma_1.default.appointment.update({
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
