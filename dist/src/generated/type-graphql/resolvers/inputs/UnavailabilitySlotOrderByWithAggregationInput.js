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
exports.UnavailabilitySlotOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const UnavailabilitySlotAvgOrderByAggregateInput_1 = require("../inputs/UnavailabilitySlotAvgOrderByAggregateInput");
const UnavailabilitySlotCountOrderByAggregateInput_1 = require("../inputs/UnavailabilitySlotCountOrderByAggregateInput");
const UnavailabilitySlotMaxOrderByAggregateInput_1 = require("../inputs/UnavailabilitySlotMaxOrderByAggregateInput");
const UnavailabilitySlotMinOrderByAggregateInput_1 = require("../inputs/UnavailabilitySlotMinOrderByAggregateInput");
const UnavailabilitySlotSumOrderByAggregateInput_1 = require("../inputs/UnavailabilitySlotSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UnavailabilitySlotOrderByWithAggregationInput = class UnavailabilitySlotOrderByWithAggregationInput {
};
exports.UnavailabilitySlotOrderByWithAggregationInput = UnavailabilitySlotOrderByWithAggregationInput;
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UnavailabilitySlotOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UnavailabilitySlotOrderByWithAggregationInput.prototype, "doctorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UnavailabilitySlotOrderByWithAggregationInput.prototype, "startTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UnavailabilitySlotOrderByWithAggregationInput.prototype, "endTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    __metadata("design:type", SortOrderInput_1.SortOrderInput)
], UnavailabilitySlotOrderByWithAggregationInput.prototype, "startDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    __metadata("design:type", SortOrderInput_1.SortOrderInput)
], UnavailabilitySlotOrderByWithAggregationInput.prototype, "endDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    __metadata("design:type", SortOrderInput_1.SortOrderInput)
], UnavailabilitySlotOrderByWithAggregationInput.prototype, "reason", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    __metadata("design:type", SortOrderInput_1.SortOrderInput)
], UnavailabilitySlotOrderByWithAggregationInput.prototype, "isAvailable", void 0);
__decorate([
    TypeGraphQL.Field(_type => UnavailabilitySlotCountOrderByAggregateInput_1.UnavailabilitySlotCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", UnavailabilitySlotCountOrderByAggregateInput_1.UnavailabilitySlotCountOrderByAggregateInput)
], UnavailabilitySlotOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => UnavailabilitySlotAvgOrderByAggregateInput_1.UnavailabilitySlotAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", UnavailabilitySlotAvgOrderByAggregateInput_1.UnavailabilitySlotAvgOrderByAggregateInput)
], UnavailabilitySlotOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => UnavailabilitySlotMaxOrderByAggregateInput_1.UnavailabilitySlotMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", UnavailabilitySlotMaxOrderByAggregateInput_1.UnavailabilitySlotMaxOrderByAggregateInput)
], UnavailabilitySlotOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => UnavailabilitySlotMinOrderByAggregateInput_1.UnavailabilitySlotMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", UnavailabilitySlotMinOrderByAggregateInput_1.UnavailabilitySlotMinOrderByAggregateInput)
], UnavailabilitySlotOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => UnavailabilitySlotSumOrderByAggregateInput_1.UnavailabilitySlotSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", UnavailabilitySlotSumOrderByAggregateInput_1.UnavailabilitySlotSumOrderByAggregateInput)
], UnavailabilitySlotOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.UnavailabilitySlotOrderByWithAggregationInput = UnavailabilitySlotOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("UnavailabilitySlotOrderByWithAggregationInput", {})
], UnavailabilitySlotOrderByWithAggregationInput);
