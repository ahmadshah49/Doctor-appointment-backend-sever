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
exports.AppointmentWhereUniqueInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AppointmentWhereInput_1 = require("../inputs/AppointmentWhereInput");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DoctorNullableRelationFilter_1 = require("../inputs/DoctorNullableRelationFilter");
const EnumAppointmentStatusNullableFilter_1 = require("../inputs/EnumAppointmentStatusNullableFilter");
const EnumgenderNullableFilter_1 = require("../inputs/EnumgenderNullableFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const PatientNullableRelationFilter_1 = require("../inputs/PatientNullableRelationFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
let AppointmentWhereUniqueInput = class AppointmentWhereUniqueInput {
};
exports.AppointmentWhereUniqueInput = AppointmentWhereUniqueInput;
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], AppointmentWhereUniqueInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereInput_1.AppointmentWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AppointmentWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereInput_1.AppointmentWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AppointmentWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereInput_1.AppointmentWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AppointmentWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AppointmentWhereUniqueInput.prototype, "fullName", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AppointmentWhereUniqueInput.prototype, "age", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumgenderNullableFilter_1.EnumgenderNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumgenderNullableFilter_1.EnumgenderNullableFilter)
], AppointmentWhereUniqueInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AppointmentWhereUniqueInput.prototype, "phoneNo", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AppointmentWhereUniqueInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AppointmentWhereUniqueInput.prototype, "medicalHistory", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], AppointmentWhereUniqueInput.prototype, "presciptions", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AppointmentWhereUniqueInput.prototype, "details", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AppointmentWhereUniqueInput.prototype, "scheduledDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumAppointmentStatusNullableFilter_1.EnumAppointmentStatusNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumAppointmentStatusNullableFilter_1.EnumAppointmentStatusNullableFilter)
], AppointmentWhereUniqueInput.prototype, "status", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], AppointmentWhereUniqueInput.prototype, "doctorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], AppointmentWhereUniqueInput.prototype, "patientId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorNullableRelationFilter_1.DoctorNullableRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", DoctorNullableRelationFilter_1.DoctorNullableRelationFilter)
], AppointmentWhereUniqueInput.prototype, "Doctor", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientNullableRelationFilter_1.PatientNullableRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", PatientNullableRelationFilter_1.PatientNullableRelationFilter)
], AppointmentWhereUniqueInput.prototype, "Patient", void 0);
exports.AppointmentWhereUniqueInput = AppointmentWhereUniqueInput = __decorate([
    TypeGraphQL.InputType("AppointmentWhereUniqueInput", {})
], AppointmentWhereUniqueInput);
