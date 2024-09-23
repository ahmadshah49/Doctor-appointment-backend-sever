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
exports.OnlyAdmin = exports.ExampleResolver = void 0;
const type_graphql_1 = require("type-graphql");
const MiddleWare_1 = require("../../middleware/MiddleWare");
let ExampleResolver = class ExampleResolver {
    async securedQuery() {
        return "This data is secure";
    }
};
exports.ExampleResolver = ExampleResolver;
__decorate([
    (0, type_graphql_1.Query)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor) // Apply middleware
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExampleResolver.prototype, "securedQuery", null);
exports.ExampleResolver = ExampleResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ExampleResolver);
let OnlyAdmin = class OnlyAdmin {
    async forDoctor() {
        return "This is just for doctors";
    }
};
exports.OnlyAdmin = OnlyAdmin;
__decorate([
    (0, type_graphql_1.Query)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor) // Apply middleware
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OnlyAdmin.prototype, "forDoctor", null);
exports.OnlyAdmin = OnlyAdmin = __decorate([
    (0, type_graphql_1.Resolver)()
], OnlyAdmin);
