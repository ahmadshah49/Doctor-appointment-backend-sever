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
exports.AppointmentWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const DoctorNullableRelationFilter_1 = require("../inputs/DoctorNullableRelationFilter");
const EnumAppointmentStatusNullableFilter_1 = require("../inputs/EnumAppointmentStatusNullableFilter");
const EnumgenderFilter_1 = require("../inputs/EnumgenderFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const PatientNullableRelationFilter_1 = require("../inputs/PatientNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
let AppointmentWhereInput = class AppointmentWhereInput {
};
exports.AppointmentWhereInput = AppointmentWhereInput;
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AppointmentWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AppointmentWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AppointmentWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], AppointmentWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AppointmentWhereInput.prototype, "fullName", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AppointmentWhereInput.prototype, "age", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumgenderFilter_1.EnumgenderFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumgenderFilter_1.EnumgenderFilter)
], AppointmentWhereInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AppointmentWhereInput.prototype, "phoneNo", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AppointmentWhereInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AppointmentWhereInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AppointmentWhereInput.prototype, "medicalHistory", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], AppointmentWhereInput.prototype, "presciptions", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AppointmentWhereInput.prototype, "details", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], AppointmentWhereInput.prototype, "scheduledDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumAppointmentStatusNullableFilter_1.EnumAppointmentStatusNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumAppointmentStatusNullableFilter_1.EnumAppointmentStatusNullableFilter)
], AppointmentWhereInput.prototype, "status", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AppointmentWhereInput.prototype, "startTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AppointmentWhereInput.prototype, "endTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], AppointmentWhereInput.prototype, "doctorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], AppointmentWhereInput.prototype, "patientId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorNullableRelationFilter_1.DoctorNullableRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", DoctorNullableRelationFilter_1.DoctorNullableRelationFilter)
], AppointmentWhereInput.prototype, "Doctor", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientNullableRelationFilter_1.PatientNullableRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", PatientNullableRelationFilter_1.PatientNullableRelationFilter)
], AppointmentWhereInput.prototype, "Patient", void 0);
exports.AppointmentWhereInput = AppointmentWhereInput = __decorate([
    TypeGraphQL.InputType("AppointmentWhereInput", {})
], AppointmentWhereInput);
