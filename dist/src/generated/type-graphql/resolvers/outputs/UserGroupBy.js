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
exports.UserGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserAvgAggregate_1 = require("../outputs/UserAvgAggregate");
const UserCountAggregate_1 = require("../outputs/UserCountAggregate");
const UserMaxAggregate_1 = require("../outputs/UserMaxAggregate");
const UserMinAggregate_1 = require("../outputs/UserMinAggregate");
const UserSumAggregate_1 = require("../outputs/UserSumAggregate");
const role_1 = require("../../enums/role");
let UserGroupBy = class UserGroupBy {
};
exports.UserGroupBy = UserGroupBy;
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], UserGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "phoneNumber", void 0);
__decorate([
    TypeGraphQL.Field(_type => role_1.role, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "token", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserGroupBy.prototype, "tokenExpire", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "otp", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "resetPasswordToken", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserGroupBy.prototype, "resetPasswordTokenExpire", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserGroupBy.prototype, "otpExpire", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "profilePicture", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "refreshToken", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCountAggregate_1.UserCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserCountAggregate_1.UserCountAggregate)
], UserGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserAvgAggregate_1.UserAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserAvgAggregate_1.UserAvgAggregate)
], UserGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserSumAggregate_1.UserSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserSumAggregate_1.UserSumAggregate)
], UserGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserMinAggregate_1.UserMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserMinAggregate_1.UserMinAggregate)
], UserGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserMaxAggregate_1.UserMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserMaxAggregate_1.UserMaxAggregate)
], UserGroupBy.prototype, "_max", void 0);
exports.UserGroupBy = UserGroupBy = __decorate([
    TypeGraphQL.ObjectType("UserGroupBy", {})
], UserGroupBy);
