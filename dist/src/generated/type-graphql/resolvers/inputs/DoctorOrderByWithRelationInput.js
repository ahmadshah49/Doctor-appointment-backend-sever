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
exports.DoctorOrderByWithRelationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AppointmentOrderByRelationAggregateInput_1 = require("../inputs/AppointmentOrderByRelationAggregateInput");
const AvailabilitySlotOrderByRelationAggregateInput_1 = require("../inputs/AvailabilitySlotOrderByRelationAggregateInput");
const PatientOrderByRelationAggregateInput_1 = require("../inputs/PatientOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const UnavailabilitySlotOrderByRelationAggregateInput_1 = require("../inputs/UnavailabilitySlotOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DoctorOrderByWithRelationInput = class DoctorOrderByWithRelationInput {
};
exports.DoctorOrderByWithRelationInput = DoctorOrderByWithRelationInput;
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DoctorOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DoctorOrderByWithRelationInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DoctorOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    __metadata("design:type", SortOrderInput_1.SortOrderInput)
], DoctorOrderByWithRelationInput.prototype, "profilePhoto", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DoctorOrderByWithRelationInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DoctorOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DoctorOrderByWithRelationInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], DoctorOrderByWithRelationInput.prototype, "User", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientOrderByRelationAggregateInput_1.PatientOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", PatientOrderByRelationAggregateInput_1.PatientOrderByRelationAggregateInput)
], DoctorOrderByWithRelationInput.prototype, "patients", void 0);
__decorate([
    TypeGraphQL.Field(_type => AppointmentOrderByRelationAggregateInput_1.AppointmentOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", AppointmentOrderByRelationAggregateInput_1.AppointmentOrderByRelationAggregateInput)
], DoctorOrderByWithRelationInput.prototype, "appointments", void 0);
__decorate([
    TypeGraphQL.Field(_type => AvailabilitySlotOrderByRelationAggregateInput_1.AvailabilitySlotOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", AvailabilitySlotOrderByRelationAggregateInput_1.AvailabilitySlotOrderByRelationAggregateInput)
], DoctorOrderByWithRelationInput.prototype, "AvailabilitySlot", void 0);
__decorate([
    TypeGraphQL.Field(_type => UnavailabilitySlotOrderByRelationAggregateInput_1.UnavailabilitySlotOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", UnavailabilitySlotOrderByRelationAggregateInput_1.UnavailabilitySlotOrderByRelationAggregateInput)
], DoctorOrderByWithRelationInput.prototype, "UnavailabilitySlot", void 0);
exports.DoctorOrderByWithRelationInput = DoctorOrderByWithRelationInput = __decorate([
    TypeGraphQL.InputType("DoctorOrderByWithRelationInput", {})
], DoctorOrderByWithRelationInput);
