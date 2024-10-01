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
let GetAppointmentsResolver = class GetAppointmentsResolver {
    async getAppointmentsByDoctor(context) {
        const currentUserId = context.payload.userId;
        if (!currentUserId) {
            throw new graphql_1.GraphQLError("User not found");
        }
        const appointments = await prisma_1.default.appointment.findMany({
            where: {
                doctorId: currentUserId,
            },
        });
        return appointments;
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
exports.GetAppointmentsResolver = GetAppointmentsResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => type_graphql_2.Appointment)
], GetAppointmentsResolver);
