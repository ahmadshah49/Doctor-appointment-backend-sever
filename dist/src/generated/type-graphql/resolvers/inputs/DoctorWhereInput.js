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
exports.DoctorWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AppointmentListRelationFilter_1 = require("../inputs/AppointmentListRelationFilter");
const AvailabilitySlotListRelationFilter_1 = require("../inputs/AvailabilitySlotListRelationFilter");
const EnumgenderFilter_1 = require("../inputs/EnumgenderFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const PatientListRelationFilter_1 = require("../inputs/PatientListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UnavailabilitySlotListRelationFilter_1 = require("../inputs/UnavailabilitySlotListRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let DoctorWhereInput = class DoctorWhereInput {
};
exports.DoctorWhereInput = DoctorWhereInput;
__decorate([
    TypeGraphQL.Field(_type => [DoctorWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DoctorWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DoctorWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DoctorWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DoctorWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DoctorWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], DoctorWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], DoctorWhereInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], DoctorWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DoctorWhereInput.prototype, "profilePhoto", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], DoctorWhereInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], DoctorWhereInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumgenderFilter_1.EnumgenderFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumgenderFilter_1.EnumgenderFilter)
], DoctorWhereInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], DoctorWhereInput.prototype, "User", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientListRelationFilter_1.PatientListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", PatientListRelationFilter_1.PatientListRelationFilter)
], DoctorWhereInput.prototype, "patients", void 0);
__decorate([
    TypeGraphQL.Field(_type => AppointmentListRelationFilter_1.AppointmentListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", AppointmentListRelationFilter_1.AppointmentListRelationFilter)
], DoctorWhereInput.prototype, "appointments", void 0);
__decorate([
    TypeGraphQL.Field(_type => AvailabilitySlotListRelationFilter_1.AvailabilitySlotListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", AvailabilitySlotListRelationFilter_1.AvailabilitySlotListRelationFilter)
], DoctorWhereInput.prototype, "AvailabilitySlot", void 0);
__decorate([
    TypeGraphQL.Field(_type => UnavailabilitySlotListRelationFilter_1.UnavailabilitySlotListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", UnavailabilitySlotListRelationFilter_1.UnavailabilitySlotListRelationFilter)
], DoctorWhereInput.prototype, "UnavailabilitySlot", void 0);
exports.DoctorWhereInput = DoctorWhereInput = __decorate([
    TypeGraphQL.InputType("DoctorWhereInput", {})
], DoctorWhereInput);
