"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDoctor = exports.isAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const graphql_1 = require("graphql");
const isAuth = async ({ context }, next) => {
    const { req } = context;
    const authorization = req.headers["authorization"];
    console.log("authorization", authorization);
    if (!authorization) {
        throw new graphql_1.GraphQLError("Not authenticated");
    }
    try {
        const token = authorization.split(" ")[1];
        console.log("token", token);
        const payload = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        console.log("payload", payload);
        context.payload = payload;
    }
    catch (error) {
        console.log("Error", error);
        throw new graphql_1.GraphQLError("Not authenticated");
    }
    return next();
};
exports.isAuth = isAuth;
const isDoctor = async ({ context }, next) => {
    const { req } = context;
    const authorization = req.headers["authorization"];
    console.log("authorization", authorization);
    if (!authorization) {
        throw new graphql_1.GraphQLError("Not authenticated");
    }
    try {
        const token = authorization.split(" ")[1];
        console.log("token", token);
        const payload = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        context.payload = payload;
        if (payload.role !== "DOCTOR") {
            throw new graphql_1.GraphQLError("Access denied: Doctors only");
        }
    }
    catch (error) {
        throw new graphql_1.GraphQLError("Access denied: Doctors only");
    }
    return next();
};
exports.isDoctor = isDoctor;
