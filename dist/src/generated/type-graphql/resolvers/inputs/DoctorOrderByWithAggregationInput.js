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
exports.DoctorOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DoctorAvgOrderByAggregateInput_1 = require("../inputs/DoctorAvgOrderByAggregateInput");
const DoctorCountOrderByAggregateInput_1 = require("../inputs/DoctorCountOrderByAggregateInput");
const DoctorMaxOrderByAggregateInput_1 = require("../inputs/DoctorMaxOrderByAggregateInput");
const DoctorMinOrderByAggregateInput_1 = require("../inputs/DoctorMinOrderByAggregateInput");
const DoctorSumOrderByAggregateInput_1 = require("../inputs/DoctorSumOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DoctorOrderByWithAggregationInput = class DoctorOrderByWithAggregationInput {
};
exports.DoctorOrderByWithAggregationInput = DoctorOrderByWithAggregationInput;
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DoctorOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DoctorOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DoctorOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    __metadata("design:type", SortOrderInput_1.SortOrderInput)
], DoctorOrderByWithAggregationInput.prototype, "profilePhoto", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DoctorOrderByWithAggregationInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DoctorOrderByWithAggregationInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DoctorOrderByWithAggregationInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorCountOrderByAggregateInput_1.DoctorCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", DoctorCountOrderByAggregateInput_1.DoctorCountOrderByAggregateInput)
], DoctorOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorAvgOrderByAggregateInput_1.DoctorAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", DoctorAvgOrderByAggregateInput_1.DoctorAvgOrderByAggregateInput)
], DoctorOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorMaxOrderByAggregateInput_1.DoctorMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", DoctorMaxOrderByAggregateInput_1.DoctorMaxOrderByAggregateInput)
], DoctorOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorMinOrderByAggregateInput_1.DoctorMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", DoctorMinOrderByAggregateInput_1.DoctorMinOrderByAggregateInput)
], DoctorOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorSumOrderByAggregateInput_1.DoctorSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", DoctorSumOrderByAggregateInput_1.DoctorSumOrderByAggregateInput)
], DoctorOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.DoctorOrderByWithAggregationInput = DoctorOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("DoctorOrderByWithAggregationInput", {})
], DoctorOrderByWithAggregationInput);
