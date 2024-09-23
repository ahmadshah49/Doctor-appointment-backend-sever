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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnAppointment = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CreateManyAndReturnAppointmentUserArgs_1 = require("./args/CreateManyAndReturnAppointmentUserArgs");
const User_1 = require("../../models/User");
const gender_1 = require("../../enums/gender");
let CreateManyAndReturnAppointment = class CreateManyAndReturnAppointment {
    getUser(root, args) {
        return root.User;
    }
};
exports.CreateManyAndReturnAppointment = CreateManyAndReturnAppointment;
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], CreateManyAndReturnAppointment.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], CreateManyAndReturnAppointment.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], CreateManyAndReturnAppointment.prototype, "fullName", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], CreateManyAndReturnAppointment.prototype, "age", void 0);
__decorate([
    TypeGraphQL.Field(_type => gender_1.gender, {
        nullable: true
    }),
    __metadata("design:type", String)
], CreateManyAndReturnAppointment.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], CreateManyAndReturnAppointment.prototype, "phoneNo", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], CreateManyAndReturnAppointment.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], CreateManyAndReturnAppointment.prototype, "medicalHistory", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CreateManyAndReturnAppointment.prototype, "presciptions", void 0);
__decorate([
    TypeGraphQL.Field(_type => User_1.User, {
        name: "User",
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateManyAndReturnAppointment, CreateManyAndReturnAppointmentUserArgs_1.CreateManyAndReturnAppointmentUserArgs]),
    __metadata("design:returntype", User_1.User)
], CreateManyAndReturnAppointment.prototype, "getUser", null);
exports.CreateManyAndReturnAppointment = CreateManyAndReturnAppointment = __decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnAppointment", {})
], CreateManyAndReturnAppointment);
