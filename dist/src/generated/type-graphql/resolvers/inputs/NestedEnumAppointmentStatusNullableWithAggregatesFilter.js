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
exports.NestedEnumAppointmentStatusNullableWithAggregatesFilter = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const NestedEnumAppointmentStatusNullableFilter_1 = require("../inputs/NestedEnumAppointmentStatusNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const AppointmentStatus_1 = require("../../enums/AppointmentStatus");
let NestedEnumAppointmentStatusNullableWithAggregatesFilter = class NestedEnumAppointmentStatusNullableWithAggregatesFilter {
};
exports.NestedEnumAppointmentStatusNullableWithAggregatesFilter = NestedEnumAppointmentStatusNullableWithAggregatesFilter;
__decorate([
    TypeGraphQL.Field(_type => AppointmentStatus_1.AppointmentStatus, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedEnumAppointmentStatusNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentStatus_1.AppointmentStatus], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NestedEnumAppointmentStatusNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentStatus_1.AppointmentStatus], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NestedEnumAppointmentStatusNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumAppointmentStatusNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedEnumAppointmentStatusNullableWithAggregatesFilter)
], NestedEnumAppointmentStatusNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedEnumAppointmentStatusNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumAppointmentStatusNullableFilter_1.NestedEnumAppointmentStatusNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedEnumAppointmentStatusNullableFilter_1.NestedEnumAppointmentStatusNullableFilter)
], NestedEnumAppointmentStatusNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumAppointmentStatusNullableFilter_1.NestedEnumAppointmentStatusNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedEnumAppointmentStatusNullableFilter_1.NestedEnumAppointmentStatusNullableFilter)
], NestedEnumAppointmentStatusNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumAppointmentStatusNullableWithAggregatesFilter = NestedEnumAppointmentStatusNullableWithAggregatesFilter = __decorate([
    TypeGraphQL.InputType("NestedEnumAppointmentStatusNullableWithAggregatesFilter", {})
], NestedEnumAppointmentStatusNullableWithAggregatesFilter);
