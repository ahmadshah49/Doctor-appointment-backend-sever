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
exports.AvailabilitySlotGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AvailabilitySlotAvgAggregate_1 = require("../outputs/AvailabilitySlotAvgAggregate");
const AvailabilitySlotCountAggregate_1 = require("../outputs/AvailabilitySlotCountAggregate");
const AvailabilitySlotMaxAggregate_1 = require("../outputs/AvailabilitySlotMaxAggregate");
const AvailabilitySlotMinAggregate_1 = require("../outputs/AvailabilitySlotMinAggregate");
const AvailabilitySlotSumAggregate_1 = require("../outputs/AvailabilitySlotSumAggregate");
let AvailabilitySlotGroupBy = class AvailabilitySlotGroupBy {
};
exports.AvailabilitySlotGroupBy = AvailabilitySlotGroupBy;
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], AvailabilitySlotGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], AvailabilitySlotGroupBy.prototype, "startTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], AvailabilitySlotGroupBy.prototype, "endTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], AvailabilitySlotGroupBy.prototype, "doctorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => AvailabilitySlotCountAggregate_1.AvailabilitySlotCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", AvailabilitySlotCountAggregate_1.AvailabilitySlotCountAggregate)
], AvailabilitySlotGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => AvailabilitySlotAvgAggregate_1.AvailabilitySlotAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", AvailabilitySlotAvgAggregate_1.AvailabilitySlotAvgAggregate)
], AvailabilitySlotGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => AvailabilitySlotSumAggregate_1.AvailabilitySlotSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", AvailabilitySlotSumAggregate_1.AvailabilitySlotSumAggregate)
], AvailabilitySlotGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => AvailabilitySlotMinAggregate_1.AvailabilitySlotMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", AvailabilitySlotMinAggregate_1.AvailabilitySlotMinAggregate)
], AvailabilitySlotGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => AvailabilitySlotMaxAggregate_1.AvailabilitySlotMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", AvailabilitySlotMaxAggregate_1.AvailabilitySlotMaxAggregate)
], AvailabilitySlotGroupBy.prototype, "_max", void 0);
exports.AvailabilitySlotGroupBy = AvailabilitySlotGroupBy = __decorate([
    TypeGraphQL.ObjectType("AvailabilitySlotGroupBy", {})
], AvailabilitySlotGroupBy);
