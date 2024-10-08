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
exports.UnavailabilitySlotScalarWhereWithAggregatesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BoolNullableWithAggregatesFilter_1 = require("../inputs/BoolNullableWithAggregatesFilter");
const DateTimeNullableWithAggregatesFilter_1 = require("../inputs/DateTimeNullableWithAggregatesFilter");
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
let UnavailabilitySlotScalarWhereWithAggregatesInput = class UnavailabilitySlotScalarWhereWithAggregatesInput {
};
exports.UnavailabilitySlotScalarWhereWithAggregatesInput = UnavailabilitySlotScalarWhereWithAggregatesInput;
__decorate([
    TypeGraphQL.Field(_type => [UnavailabilitySlotScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UnavailabilitySlotScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UnavailabilitySlotScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UnavailabilitySlotScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UnavailabilitySlotScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UnavailabilitySlotScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], UnavailabilitySlotScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], UnavailabilitySlotScalarWhereWithAggregatesInput.prototype, "doctorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], UnavailabilitySlotScalarWhereWithAggregatesInput.prototype, "startTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], UnavailabilitySlotScalarWhereWithAggregatesInput.prototype, "endTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], UnavailabilitySlotScalarWhereWithAggregatesInput.prototype, "startDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], UnavailabilitySlotScalarWhereWithAggregatesInput.prototype, "endDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], UnavailabilitySlotScalarWhereWithAggregatesInput.prototype, "reason", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter)
], UnavailabilitySlotScalarWhereWithAggregatesInput.prototype, "isAvailable", void 0);
exports.UnavailabilitySlotScalarWhereWithAggregatesInput = UnavailabilitySlotScalarWhereWithAggregatesInput = __decorate([
    TypeGraphQL.InputType("UnavailabilitySlotScalarWhereWithAggregatesInput", {})
], UnavailabilitySlotScalarWhereWithAggregatesInput);
