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
exports.AppointmentUpdateManyWithoutUserNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AppointmentCreateManyUserInputEnvelope_1 = require("../inputs/AppointmentCreateManyUserInputEnvelope");
const AppointmentCreateOrConnectWithoutUserInput_1 = require("../inputs/AppointmentCreateOrConnectWithoutUserInput");
const AppointmentCreateWithoutUserInput_1 = require("../inputs/AppointmentCreateWithoutUserInput");
const AppointmentScalarWhereInput_1 = require("../inputs/AppointmentScalarWhereInput");
const AppointmentUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/AppointmentUpdateManyWithWhereWithoutUserInput");
const AppointmentUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/AppointmentUpdateWithWhereUniqueWithoutUserInput");
const AppointmentUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/AppointmentUpsertWithWhereUniqueWithoutUserInput");
const AppointmentWhereUniqueInput_1 = require("../inputs/AppointmentWhereUniqueInput");
let AppointmentUpdateManyWithoutUserNestedInput = class AppointmentUpdateManyWithoutUserNestedInput {
};
exports.AppointmentUpdateManyWithoutUserNestedInput = AppointmentUpdateManyWithoutUserNestedInput;
__decorate([
    TypeGraphQL.Field(_type => [AppointmentCreateWithoutUserInput_1.AppointmentCreateWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AppointmentUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentCreateOrConnectWithoutUserInput_1.AppointmentCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AppointmentUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentUpsertWithWhereUniqueWithoutUserInput_1.AppointmentUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AppointmentUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => AppointmentCreateManyUserInputEnvelope_1.AppointmentCreateManyUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", AppointmentCreateManyUserInputEnvelope_1.AppointmentCreateManyUserInputEnvelope)
], AppointmentUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput_1.AppointmentWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AppointmentUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput_1.AppointmentWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AppointmentUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput_1.AppointmentWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AppointmentUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput_1.AppointmentWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AppointmentUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentUpdateWithWhereUniqueWithoutUserInput_1.AppointmentUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AppointmentUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentUpdateManyWithWhereWithoutUserInput_1.AppointmentUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AppointmentUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentScalarWhereInput_1.AppointmentScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AppointmentUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.AppointmentUpdateManyWithoutUserNestedInput = AppointmentUpdateManyWithoutUserNestedInput = __decorate([
    TypeGraphQL.InputType("AppointmentUpdateManyWithoutUserNestedInput", {})
], AppointmentUpdateManyWithoutUserNestedInput);
