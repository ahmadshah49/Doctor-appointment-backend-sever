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
exports.AvailabilitySlotUpdateManyWithoutDoctorNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AvailabilitySlotCreateManyDoctorInputEnvelope_1 = require("../inputs/AvailabilitySlotCreateManyDoctorInputEnvelope");
const AvailabilitySlotCreateOrConnectWithoutDoctorInput_1 = require("../inputs/AvailabilitySlotCreateOrConnectWithoutDoctorInput");
const AvailabilitySlotCreateWithoutDoctorInput_1 = require("../inputs/AvailabilitySlotCreateWithoutDoctorInput");
const AvailabilitySlotScalarWhereInput_1 = require("../inputs/AvailabilitySlotScalarWhereInput");
const AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput_1 = require("../inputs/AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput");
const AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput_1 = require("../inputs/AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput");
const AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput_1 = require("../inputs/AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput");
const AvailabilitySlotWhereUniqueInput_1 = require("../inputs/AvailabilitySlotWhereUniqueInput");
let AvailabilitySlotUpdateManyWithoutDoctorNestedInput = class AvailabilitySlotUpdateManyWithoutDoctorNestedInput {
};
exports.AvailabilitySlotUpdateManyWithoutDoctorNestedInput = AvailabilitySlotUpdateManyWithoutDoctorNestedInput;
__decorate([
    TypeGraphQL.Field(_type => [AvailabilitySlotCreateWithoutDoctorInput_1.AvailabilitySlotCreateWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AvailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AvailabilitySlotCreateOrConnectWithoutDoctorInput_1.AvailabilitySlotCreateOrConnectWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AvailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput_1.AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AvailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => AvailabilitySlotCreateManyDoctorInputEnvelope_1.AvailabilitySlotCreateManyDoctorInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", AvailabilitySlotCreateManyDoctorInputEnvelope_1.AvailabilitySlotCreateManyDoctorInputEnvelope)
], AvailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AvailabilitySlotWhereUniqueInput_1.AvailabilitySlotWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AvailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AvailabilitySlotWhereUniqueInput_1.AvailabilitySlotWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AvailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AvailabilitySlotWhereUniqueInput_1.AvailabilitySlotWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AvailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AvailabilitySlotWhereUniqueInput_1.AvailabilitySlotWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AvailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput_1.AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AvailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput_1.AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AvailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AvailabilitySlotScalarWhereInput_1.AvailabilitySlotScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AvailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "deleteMany", void 0);
exports.AvailabilitySlotUpdateManyWithoutDoctorNestedInput = AvailabilitySlotUpdateManyWithoutDoctorNestedInput = __decorate([
    TypeGraphQL.InputType("AvailabilitySlotUpdateManyWithoutDoctorNestedInput", {})
], AvailabilitySlotUpdateManyWithoutDoctorNestedInput);
