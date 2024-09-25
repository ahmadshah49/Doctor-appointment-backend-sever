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
exports.AvailabilitySlotOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AvailabilitySlotAvgOrderByAggregateInput_1 = require("../inputs/AvailabilitySlotAvgOrderByAggregateInput");
const AvailabilitySlotCountOrderByAggregateInput_1 = require("../inputs/AvailabilitySlotCountOrderByAggregateInput");
const AvailabilitySlotMaxOrderByAggregateInput_1 = require("../inputs/AvailabilitySlotMaxOrderByAggregateInput");
const AvailabilitySlotMinOrderByAggregateInput_1 = require("../inputs/AvailabilitySlotMinOrderByAggregateInput");
const AvailabilitySlotSumOrderByAggregateInput_1 = require("../inputs/AvailabilitySlotSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AvailabilitySlotOrderByWithAggregationInput = class AvailabilitySlotOrderByWithAggregationInput {
};
exports.AvailabilitySlotOrderByWithAggregationInput = AvailabilitySlotOrderByWithAggregationInput;
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AvailabilitySlotOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AvailabilitySlotOrderByWithAggregationInput.prototype, "doctorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AvailabilitySlotOrderByWithAggregationInput.prototype, "day", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AvailabilitySlotOrderByWithAggregationInput.prototype, "startTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AvailabilitySlotOrderByWithAggregationInput.prototype, "endTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AvailabilitySlotOrderByWithAggregationInput.prototype, "isBooked", void 0);
__decorate([
    TypeGraphQL.Field(_type => AvailabilitySlotCountOrderByAggregateInput_1.AvailabilitySlotCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", AvailabilitySlotCountOrderByAggregateInput_1.AvailabilitySlotCountOrderByAggregateInput)
], AvailabilitySlotOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => AvailabilitySlotAvgOrderByAggregateInput_1.AvailabilitySlotAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", AvailabilitySlotAvgOrderByAggregateInput_1.AvailabilitySlotAvgOrderByAggregateInput)
], AvailabilitySlotOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => AvailabilitySlotMaxOrderByAggregateInput_1.AvailabilitySlotMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", AvailabilitySlotMaxOrderByAggregateInput_1.AvailabilitySlotMaxOrderByAggregateInput)
], AvailabilitySlotOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => AvailabilitySlotMinOrderByAggregateInput_1.AvailabilitySlotMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", AvailabilitySlotMinOrderByAggregateInput_1.AvailabilitySlotMinOrderByAggregateInput)
], AvailabilitySlotOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => AvailabilitySlotSumOrderByAggregateInput_1.AvailabilitySlotSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", AvailabilitySlotSumOrderByAggregateInput_1.AvailabilitySlotSumOrderByAggregateInput)
], AvailabilitySlotOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.AvailabilitySlotOrderByWithAggregationInput = AvailabilitySlotOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("AvailabilitySlotOrderByWithAggregationInput", {})
], AvailabilitySlotOrderByWithAggregationInput);
