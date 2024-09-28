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
exports.PatientUpdateInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AppointmentUpdateManyWithoutPatientNestedInput_1 = require("../inputs/AppointmentUpdateManyWithoutPatientNestedInput");
const DoctorUpdateOneWithoutPatientsNestedInput_1 = require("../inputs/DoctorUpdateOneWithoutPatientsNestedInput");
const EnumgenderFieldUpdateOperationsInput_1 = require("../inputs/EnumgenderFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutPatientNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutPatientNestedInput");
let PatientUpdateInput = class PatientUpdateInput {
};
exports.PatientUpdateInput = PatientUpdateInput;
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PatientUpdateInput.prototype, "age", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PatientUpdateInput.prototype, "fullName", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumgenderFieldUpdateOperationsInput_1.EnumgenderFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", EnumgenderFieldUpdateOperationsInput_1.EnumgenderFieldUpdateOperationsInput)
], PatientUpdateInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PatientUpdateInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PatientUpdateInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PatientUpdateInput.prototype, "profilePicture", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PatientUpdateInput.prototype, "phoneNo", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorUpdateOneWithoutPatientsNestedInput_1.DoctorUpdateOneWithoutPatientsNestedInput, {
        nullable: true
    }),
    __metadata("design:type", DoctorUpdateOneWithoutPatientsNestedInput_1.DoctorUpdateOneWithoutPatientsNestedInput)
], PatientUpdateInput.prototype, "Doctor", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPatientNestedInput_1.UserUpdateOneRequiredWithoutPatientNestedInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateOneRequiredWithoutPatientNestedInput_1.UserUpdateOneRequiredWithoutPatientNestedInput)
], PatientUpdateInput.prototype, "User", void 0);
__decorate([
    TypeGraphQL.Field(_type => AppointmentUpdateManyWithoutPatientNestedInput_1.AppointmentUpdateManyWithoutPatientNestedInput, {
        nullable: true
    }),
    __metadata("design:type", AppointmentUpdateManyWithoutPatientNestedInput_1.AppointmentUpdateManyWithoutPatientNestedInput)
], PatientUpdateInput.prototype, "appointments", void 0);
exports.PatientUpdateInput = PatientUpdateInput = __decorate([
    TypeGraphQL.InputType("PatientUpdateInput", {})
], PatientUpdateInput);
