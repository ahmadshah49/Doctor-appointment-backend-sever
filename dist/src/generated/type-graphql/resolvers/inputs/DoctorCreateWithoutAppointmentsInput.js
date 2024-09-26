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
exports.DoctorCreateWithoutAppointmentsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AvailabilitySlotCreateNestedManyWithoutDoctorInput_1 = require("../inputs/AvailabilitySlotCreateNestedManyWithoutDoctorInput");
const PatientCreateNestedManyWithoutDoctorInput_1 = require("../inputs/PatientCreateNestedManyWithoutDoctorInput");
const UnavailabilitySlotCreateNestedManyWithoutDoctorInput_1 = require("../inputs/UnavailabilitySlotCreateNestedManyWithoutDoctorInput");
const UserCreateNestedOneWithoutDoctorInput_1 = require("../inputs/UserCreateNestedOneWithoutDoctorInput");
const gender_1 = require("../../enums/gender");
let DoctorCreateWithoutAppointmentsInput = class DoctorCreateWithoutAppointmentsInput {
};
exports.DoctorCreateWithoutAppointmentsInput = DoctorCreateWithoutAppointmentsInput;
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], DoctorCreateWithoutAppointmentsInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], DoctorCreateWithoutAppointmentsInput.prototype, "profilePhoto", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], DoctorCreateWithoutAppointmentsInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], DoctorCreateWithoutAppointmentsInput.prototype, "availability", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], DoctorCreateWithoutAppointmentsInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], DoctorCreateWithoutAppointmentsInput.prototype, "isAvailable", void 0);
__decorate([
    TypeGraphQL.Field(_type => gender_1.gender, {
        nullable: false
    }),
    __metadata("design:type", String)
], DoctorCreateWithoutAppointmentsInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutDoctorInput_1.UserCreateNestedOneWithoutDoctorInput, {
        nullable: false
    }),
    __metadata("design:type", UserCreateNestedOneWithoutDoctorInput_1.UserCreateNestedOneWithoutDoctorInput)
], DoctorCreateWithoutAppointmentsInput.prototype, "User", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientCreateNestedManyWithoutDoctorInput_1.PatientCreateNestedManyWithoutDoctorInput, {
        nullable: true
    }),
    __metadata("design:type", PatientCreateNestedManyWithoutDoctorInput_1.PatientCreateNestedManyWithoutDoctorInput)
], DoctorCreateWithoutAppointmentsInput.prototype, "patients", void 0);
__decorate([
    TypeGraphQL.Field(_type => AvailabilitySlotCreateNestedManyWithoutDoctorInput_1.AvailabilitySlotCreateNestedManyWithoutDoctorInput, {
        nullable: true
    }),
    __metadata("design:type", AvailabilitySlotCreateNestedManyWithoutDoctorInput_1.AvailabilitySlotCreateNestedManyWithoutDoctorInput)
], DoctorCreateWithoutAppointmentsInput.prototype, "AvailabilitySlot", void 0);
__decorate([
    TypeGraphQL.Field(_type => UnavailabilitySlotCreateNestedManyWithoutDoctorInput_1.UnavailabilitySlotCreateNestedManyWithoutDoctorInput, {
        nullable: true
    }),
    __metadata("design:type", UnavailabilitySlotCreateNestedManyWithoutDoctorInput_1.UnavailabilitySlotCreateNestedManyWithoutDoctorInput)
], DoctorCreateWithoutAppointmentsInput.prototype, "UnavailabilitySlot", void 0);
exports.DoctorCreateWithoutAppointmentsInput = DoctorCreateWithoutAppointmentsInput = __decorate([
    TypeGraphQL.InputType("DoctorCreateWithoutAppointmentsInput", {})
], DoctorCreateWithoutAppointmentsInput);
