"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResponse = exports.DoctorTypes = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../generated/type-graphql");
let DoctorTypes = class DoctorTypes {
};
exports.DoctorTypes = DoctorTypes;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], DoctorTypes.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], DoctorTypes.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorTypes.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], DoctorTypes.prototype, "profilePhoto", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorTypes.prototype, "address", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], DoctorTypes.prototype, "availability", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorTypes.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], DoctorTypes.prototype, "isAvailable", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorTypes.prototype, "gender", void 0);
exports.DoctorTypes = DoctorTypes = __decorate([
    (0, type_graphql_1.ObjectType)()
], DoctorTypes);
let AuthResponse = class AuthResponse {
};
exports.AuthResponse = AuthResponse;
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AuthResponse.prototype, "accessToken", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AuthResponse.prototype, "refreshToken", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_2.User, { nullable: true }),
    __metadata("design:type", type_graphql_2.User)
], AuthResponse.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AuthResponse.prototype, "message", void 0);
exports.AuthResponse = AuthResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], AuthResponse);
// @ObjectType()
// export class AuthResponseForPhoneNo {
//   @Field({ nullable: true })
//   accessToken?: string;
//   @Field({ nullable: true })
//   refreshToken?: string;
//   @Field({ nullable: true })
//   message?: string;
//   @Field(() => User, { nullable: true })
//   user?: User;
// }
