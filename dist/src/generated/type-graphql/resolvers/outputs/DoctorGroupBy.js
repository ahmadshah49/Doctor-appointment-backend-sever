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
exports.DoctorGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DoctorAvgAggregate_1 = require("../outputs/DoctorAvgAggregate");
const DoctorCountAggregate_1 = require("../outputs/DoctorCountAggregate");
const DoctorMaxAggregate_1 = require("../outputs/DoctorMaxAggregate");
const DoctorMinAggregate_1 = require("../outputs/DoctorMinAggregate");
const DoctorSumAggregate_1 = require("../outputs/DoctorSumAggregate");
const gender_1 = require("../../enums/gender");
let DoctorGroupBy = class DoctorGroupBy {
};
exports.DoctorGroupBy = DoctorGroupBy;
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], DoctorGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], DoctorGroupBy.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], DoctorGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], DoctorGroupBy.prototype, "profilePhoto", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], DoctorGroupBy.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], DoctorGroupBy.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => gender_1.gender, {
        nullable: false
    }),
    __metadata("design:type", String)
], DoctorGroupBy.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorCountAggregate_1.DoctorCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", DoctorCountAggregate_1.DoctorCountAggregate)
], DoctorGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorAvgAggregate_1.DoctorAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", DoctorAvgAggregate_1.DoctorAvgAggregate)
], DoctorGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorSumAggregate_1.DoctorSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", DoctorSumAggregate_1.DoctorSumAggregate)
], DoctorGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorMinAggregate_1.DoctorMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", DoctorMinAggregate_1.DoctorMinAggregate)
], DoctorGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorMaxAggregate_1.DoctorMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", DoctorMaxAggregate_1.DoctorMaxAggregate)
], DoctorGroupBy.prototype, "_max", void 0);
exports.DoctorGroupBy = DoctorGroupBy = __decorate([
    TypeGraphQL.ObjectType("DoctorGroupBy", {})
], DoctorGroupBy);
