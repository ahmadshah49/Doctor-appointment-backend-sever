"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAppointmentsResolver = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../generated/type-graphql");
const MiddleWare_1 = require("../../middleware/MiddleWare");
const graphql_1 = require("graphql");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const Validation_1 = require("../../validations/Validation");
let GetAppointmentsResolver = class GetAppointmentsResolver {
    async getAppointmentsByDoctor(context) {
        try {
            const currentUserId = context.payload.userId;
            if (!currentUserId) {
                throw new graphql_1.GraphQLError("User not found");
            }
            await (0, Validation_1.validateUserRole)(context);
            const appointments = await prisma_1.default.appointment.findMany({
                where: {
                    doctorId: currentUserId,
                },
            });
            return appointments;
        }
        catch (error) {
            console.error("Error in getAppointmentsByDoctor:", error);
            throw new graphql_1.GraphQLError(error.message || "An unexpected error occurred.");
        }
    }
    async getTodayUpcomingAppointments(context) {
        try {
            await (0, Validation_1.validateUserRole)(context);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const tomorrow = new Date();
            tomorrow.setHours(0, 0, 0, 0);
            tomorrow.setDate(today.getDate() + 1);
            console.log("Today", today);
            console.log("Tomorrow", tomorrow);
            const currentUserId = context.payload.userId;
            if (!currentUserId) {
                throw new graphql_1.GraphQLError("User not found");
            }
            const upcommingAppointments = await prisma_1.default.appointment.findMany({
                where: {
                    doctorId: currentUserId,
                    status: "UPCOMING",
                    scheduledDate: {
                        gte: today,
                        lt: tomorrow,
                    },
                },
            });
            return upcommingAppointments;
        }
        catch (error) {
            console.error("Error while getting today upcomming appointments".toUpperCase(), error);
            throw new graphql_1.GraphQLError(error.message || "An unexpected error occurred.");
        }
    }
    async getTodayCompletedAppointments(context) {
        try {
            await (0, Validation_1.validateUserRole)(context);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const tomorrow = new Date();
            tomorrow.setHours(0, 0, 0, 0);
            tomorrow.setDate(today.getDate() + 1);
            console.log("Today", today);
            console.log("Tomorrow", tomorrow);
            const currentUserId = context.payload.userId;
            if (!currentUserId) {
                throw new graphql_1.GraphQLError("User not found");
            }
            const compeltedAppointments = await prisma_1.default.appointment.findMany({
                where: {
                    doctorId: currentUserId,
                    status: "COMPLETED",
                    scheduledDate: {
                        gte: today,
                        lt: tomorrow,
                    },
                },
            });
            return compeltedAppointments;
        }
        catch (error) {
            console.error("Error while getting today completed appointments".toUpperCase(), error);
            throw new graphql_1.GraphQLError(error.message || "An unexpected error occurred.");
        }
    }
    async getTodayMissedAppointments(context) {
        try {
            await (0, Validation_1.validateUserRole)(context);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const tomorrow = new Date();
            tomorrow.setHours(0, 0, 0, 0);
            tomorrow.setDate(today.getDate() + 1);
            console.log("Today", today);
            console.log("Tomorrow", tomorrow);
            const currentUserId = context.payload.userId;
            if (!currentUserId) {
                throw new graphql_1.GraphQLError("User not found");
            }
            const missedAppointments = await prisma_1.default.appointment.findMany({
                where: {
                    doctorId: currentUserId,
                    status: "MISSED",
                    scheduledDate: {
                        gte: today,
                        lt: tomorrow,
                    },
                },
            });
            return missedAppointments;
        }
        catch (error) {
            console.log("Error while  geting Today Missed Appointments".toUpperCase(), error);
            throw new graphql_1.GraphQLError(error.message || "An unexpected error occurred.");
        }
    }
    async getAllMissedAppointments(context) {
        try {
            await (0, Validation_1.validateUserRole)(context);
            const currentUserId = context.payload.userId;
            if (!currentUserId) {
                throw new graphql_1.GraphQLError("User not found");
            }
            const missedAppointments = await prisma_1.default.appointment.findMany({
                where: {
                    doctorId: currentUserId,
                    status: "MISSED",
                },
            });
            return missedAppointments;
        }
        catch (error) {
            console.log("Error while  geting All Missed Appointments".toUpperCase(), error);
            throw new graphql_1.GraphQLError(error.message || "An unexpected error occurred.");
        }
    }
    async getAllUpcomingAppointments(context) {
        try {
            await (0, Validation_1.validateUserRole)(context);
            const currentUserId = context.payload.userId;
            if (!currentUserId) {
                throw new graphql_1.GraphQLError("User not found");
            }
            const upcommingAppointments = await prisma_1.default.appointment.findMany({
                where: {
                    doctorId: currentUserId,
                    status: "UPCOMING",
                },
            });
            return upcommingAppointments;
        }
        catch (error) {
            console.log("Error while  geting All Upcommig Appointments".toUpperCase(), error);
            throw new graphql_1.GraphQLError(error.message || "An unexpected error occurred.");
        }
    }
    async getAllCompletedAppointments(context) {
        try {
            await (0, Validation_1.validateUserRole)(context);
            const currentUserId = context.payload.userId;
            if (!currentUserId) {
                throw new graphql_1.GraphQLError("User not found");
            }
            const completedAppointments = await prisma_1.default.appointment.findMany({
                where: {
                    doctorId: currentUserId,
                    status: "COMPLETED",
                },
            });
            return completedAppointments;
        }
        catch (error) {
            console.log("Error while  geting All Completed Appointments".toUpperCase(), error);
            throw new graphql_1.GraphQLError(error.message || "An unexpected error occurred.");
        }
    }
    async searchAppointments(context, search) {
        try {
            await (0, Validation_1.validateUserRole)(context);
            const currentUserId = context.payload.userId;
            if (!currentUserId) {
                throw new graphql_1.GraphQLError("User not found");
            }
            const searchAppointments = await prisma_1.default.appointment.findMany({
                where: {
                    doctorId: currentUserId,
                    ...(search && {
                        OR: [
                            {
                                Patient: {
                                    fullName: {
                                        contains: search,
                                        mode: "insensitive",
                                    },
                                },
                            },
                        ],
                    }),
                },
            });
            return searchAppointments;
        }
        catch (error) {
            console.log("Error while searching Appointments".toUpperCase(), error);
            throw new graphql_1.GraphQLError(error.message || "An unexpected error occurred.");
        }
    }
};
exports.GetAppointmentsResolver = GetAppointmentsResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Appointment]),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GetAppointmentsResolver.prototype, "getAppointmentsByDoctor", null);
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Appointment]),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GetAppointmentsResolver.prototype, "getTodayUpcomingAppointments", null);
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Appointment]),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GetAppointmentsResolver.prototype, "getTodayCompletedAppointments", null);
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Appointment]),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GetAppointmentsResolver.prototype, "getTodayMissedAppointments", null);
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Appointment]),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GetAppointmentsResolver.prototype, "getAllMissedAppointments", null);
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Appointment]),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GetAppointmentsResolver.prototype, "getAllUpcomingAppointments", null);
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Appointment]),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GetAppointmentsResolver.prototype, "getAllCompletedAppointments", null);
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Appointment]),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("search")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], GetAppointmentsResolver.prototype, "searchAppointments", null);
exports.GetAppointmentsResolver = GetAppointmentsResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => type_graphql_2.Appointment)
], GetAppointmentsResolver);
