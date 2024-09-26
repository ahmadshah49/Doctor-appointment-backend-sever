"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentCreateWithoutPatientInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AppointmentCreatepresciptionsInput_1 = require("../inputs/AppointmentCreatepresciptionsInput");
const DoctorCreateNestedOneWithoutAppointmentsInput_1 = require("../inputs/DoctorCreateNestedOneWithoutAppointmentsInput");
const AppointmentStatus_1 = require("../../enums/AppointmentStatus");
const gender_1 = require("../../enums/gender");
let AppointmentCreateWithoutPatientInput = class AppointmentCreateWithoutPatientInput {
};
exports.AppointmentCreateWithoutPatientInput = AppointmentCreateWithoutPatientInput;
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AppointmentCreateWithoutPatientInput.prototype, "fullName", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AppointmentCreateWithoutPatientInput.prototype, "age", void 0);
__decorate([
    TypeGraphQL.Field(_type => gender_1.gender, {
        nullable: false
    }),
    __metadata("design:type", String)
], AppointmentCreateWithoutPatientInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AppointmentCreateWithoutPatientInput.prototype, "phoneNo", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AppointmentCreateWithoutPatientInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AppointmentCreateWithoutPatientInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], AppointmentCreateWithoutPatientInput.prototype, "medicalHistory", void 0);
__decorate([
    TypeGraphQL.Field(_type => AppointmentCreatepresciptionsInput_1.AppointmentCreatepresciptionsInput, {
        nullable: true
    }),
    __metadata("design:type", AppointmentCreatepresciptionsInput_1.AppointmentCreatepresciptionsInput)
], AppointmentCreateWithoutPatientInput.prototype, "presciptions", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], AppointmentCreateWithoutPatientInput.prototype, "details", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], AppointmentCreateWithoutPatientInput.prototype, "scheduledDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => AppointmentStatus_1.AppointmentStatus, {
        nullable: true
    }),
    __metadata("design:type", String)
], AppointmentCreateWithoutPatientInput.prototype, "status", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], AppointmentCreateWithoutPatientInput.prototype, "startTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], AppointmentCreateWithoutPatientInput.prototype, "endTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorCreateNestedOneWithoutAppointmentsInput_1.DoctorCreateNestedOneWithoutAppointmentsInput, {
        nullable: true
    }),
    __metadata("design:type", DoctorCreateNestedOneWithoutAppointmentsInput_1.DoctorCreateNestedOneWithoutAppointmentsInput)
], AppointmentCreateWithoutPatientInput.prototype, "Doctor", void 0);
exports.AppointmentCreateWithoutPatientInput = AppointmentCreateWithoutPatientInput = __decorate([
    TypeGraphQL.InputType("AppointmentCreateWithoutPatientInput", {})
], AppointmentCreateWithoutPatientInput);
