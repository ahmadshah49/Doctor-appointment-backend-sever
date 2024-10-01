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
exports.Patients = void 0;
const graphql_1 = require("graphql");
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../generated/type-graphql");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const MiddleWare_1 = require("../../middleware/MiddleWare");
let Patients = class Patients {
    async getPatientsByDoctor(context) {
        const currentUserId = context.payload.userId;
        if (!currentUserId) {
            throw new graphql_1.GraphQLError("User not found");
        }
        const distinctPatients = await prisma_1.default.appointment.findMany({
            where: {
                doctorId: currentUserId,
            },
            distinct: ["patientId"],
            select: {
                patientId: true,
            },
        });
        const patientIds = distinctPatients.map((appointment) => appointment.patientId);
        console.log("PatientIds", patientIds);
        const patients = await prisma_1.default.patient.findMany({
            where: {
                userId: {
                    in: patientIds,
                },
            },
        });
        return patients;
    }
    async getFilteredPatients(gender, minAge, maxAge, context) {
        const currentUserId = context.payload.userId;
        if (!currentUserId) {
            throw new graphql_1.GraphQLError("User not found");
        }
        const distinctPatients = await prisma_1.default.appointment.findMany({
            where: {
                doctorId: currentUserId,
            },
            distinct: ["patientId"],
            select: {
                patientId: true,
            },
        });
        if (distinctPatients.length === 0) {
            return [];
        }
        const patientIds = distinctPatients.map((appointment) => appointment.patientId);
        console.log("PatientIds", patientIds);
        const patients = await prisma_1.default.patient.findMany({
            where: {
                userId: {
                    in: patientIds,
                },
                gender: gender || undefined,
            },
        });
        const filteredPatients = patients.filter((patient) => {
            const age = parseInt(patient.age);
            if (isNaN(age))
                return false;
            const withinMinAge = minAge ? age >= minAge : true;
            const withinMaxAge = maxAge ? age <= maxAge : true;
            return withinMinAge && withinMaxAge;
        });
        return filteredPatients;
    }
    async getAppointmentByPatient(context, patientId) {
        try {
            const patient = await prisma_1.default.patient.findUnique({
                where: { id: patientId },
                include: {
                    appointments: true,
                },
            });
            if (!patient) {
                throw new graphql_1.GraphQLError("Patient not found");
            }
            return patient;
        }
        catch (error) {
            console.log("Error", error);
            throw new graphql_1.GraphQLError("Something went wrong");
        }
    }
    async searchPatientsByDoctor(context, search) {
        const currentUserId = context.payload.userId;
        if (!currentUserId) {
            throw new graphql_1.GraphQLError("User not found");
        }
        if (!search || search.trim() === "") {
            return [];
        }
        const distinctPatients = await prisma_1.default.appointment.findMany({
            where: {
                doctorId: currentUserId,
            },
            distinct: ["patientId"],
            select: {
                patientId: true,
            },
        });
        const patientIds = distinctPatients.map((appointment) => appointment.patientId);
        console.log("PatientIds", patientIds);
        const searchedPatients = await prisma_1.default.patient.findMany({
            where: {
                userId: {
                    in: patientIds,
                },
                ...(search && {
                    OR: [
                        {
                            fullName: {
                                contains: search,
                                mode: "insensitive",
                            },
                        },
                    ],
                }),
            },
        });
        return searchedPatients;
    }
};
exports.Patients = Patients;
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Patient]),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Patients.prototype, "getPatientsByDoctor", null);
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Patient]),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Arg)("gender", () => type_graphql_2.gender, { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)("minAge", { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("maxAge", { nullable: true })),
    __param(3, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], Patients.prototype, "getFilteredPatients", null);
__decorate([
    (0, type_graphql_1.Query)(() => type_graphql_2.Patient),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("patientId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], Patients.prototype, "getAppointmentByPatient", null);
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Patient]),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("search")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], Patients.prototype, "searchPatientsByDoctor", null);
exports.Patients = Patients = __decorate([
    (0, type_graphql_1.Resolver)(() => type_graphql_2.Patient)
], Patients);
