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
exports.UnavailabilitySlotUpdateManyWithoutDoctorNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UnavailabilitySlotCreateManyDoctorInputEnvelope_1 = require("../inputs/UnavailabilitySlotCreateManyDoctorInputEnvelope");
const UnavailabilitySlotCreateOrConnectWithoutDoctorInput_1 = require("../inputs/UnavailabilitySlotCreateOrConnectWithoutDoctorInput");
const UnavailabilitySlotCreateWithoutDoctorInput_1 = require("../inputs/UnavailabilitySlotCreateWithoutDoctorInput");
const UnavailabilitySlotScalarWhereInput_1 = require("../inputs/UnavailabilitySlotScalarWhereInput");
const UnavailabilitySlotUpdateManyWithWhereWithoutDoctorInput_1 = require("../inputs/UnavailabilitySlotUpdateManyWithWhereWithoutDoctorInput");
const UnavailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput_1 = require("../inputs/UnavailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput");
const UnavailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput_1 = require("../inputs/UnavailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput");
const UnavailabilitySlotWhereUniqueInput_1 = require("../inputs/UnavailabilitySlotWhereUniqueInput");
let UnavailabilitySlotUpdateManyWithoutDoctorNestedInput = class UnavailabilitySlotUpdateManyWithoutDoctorNestedInput {
};
exports.UnavailabilitySlotUpdateManyWithoutDoctorNestedInput = UnavailabilitySlotUpdateManyWithoutDoctorNestedInput;
__decorate([
    TypeGraphQL.Field(_type => [UnavailabilitySlotCreateWithoutDoctorInput_1.UnavailabilitySlotCreateWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UnavailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UnavailabilitySlotCreateOrConnectWithoutDoctorInput_1.UnavailabilitySlotCreateOrConnectWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UnavailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UnavailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput_1.UnavailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UnavailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UnavailabilitySlotCreateManyDoctorInputEnvelope_1.UnavailabilitySlotCreateManyDoctorInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", UnavailabilitySlotCreateManyDoctorInputEnvelope_1.UnavailabilitySlotCreateManyDoctorInputEnvelope)
], UnavailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UnavailabilitySlotWhereUniqueInput_1.UnavailabilitySlotWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UnavailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UnavailabilitySlotWhereUniqueInput_1.UnavailabilitySlotWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UnavailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UnavailabilitySlotWhereUniqueInput_1.UnavailabilitySlotWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UnavailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UnavailabilitySlotWhereUniqueInput_1.UnavailabilitySlotWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UnavailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UnavailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput_1.UnavailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UnavailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UnavailabilitySlotUpdateManyWithWhereWithoutDoctorInput_1.UnavailabilitySlotUpdateManyWithWhereWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UnavailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UnavailabilitySlotScalarWhereInput_1.UnavailabilitySlotScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UnavailabilitySlotUpdateManyWithoutDoctorNestedInput.prototype, "deleteMany", void 0);
exports.UnavailabilitySlotUpdateManyWithoutDoctorNestedInput = UnavailabilitySlotUpdateManyWithoutDoctorNestedInput = __decorate([
    TypeGraphQL.InputType("UnavailabilitySlotUpdateManyWithoutDoctorNestedInput", {})
], UnavailabilitySlotUpdateManyWithoutDoctorNestedInput);
