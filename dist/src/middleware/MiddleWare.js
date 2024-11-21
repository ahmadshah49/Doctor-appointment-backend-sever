"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDoctor = exports.isAuth = void 0;
const graphql_1 = require("graphql");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const isAuth = async ({ context }, next) => {
    const { req, res, prisma } = context;
    const accessToken = req.headers["authorization"];
    const refreshToken = Array.isArray(req.headers["x-refresh-token"])
        ? req.headers["x-refresh-token"][0]
        : req.headers["x-refresh-token"];
    if (!accessToken) {
        throw new graphql_1.GraphQLError("Access Token Not Found, Please Login Again");
    }
    try {
        const accessTokenFromHeader = accessToken.split(" ")[1];
        const payload = jsonwebtoken_1.default.verify(accessTokenFromHeader, process.env.ACCESS_TOKEN_SECRET);
        context.payload = payload;
    }
    catch (error) {
        if (!refreshToken) {
            throw new graphql_1.GraphQLError("Not authenticated - refresh token missing ,Please login again");
        }
        try {
            const refreshTokenFromHeader = refreshToken.split(" ")[1];
            const refreshPayload = jsonwebtoken_1.default.verify(refreshTokenFromHeader, process.env.REFRESH_TOKEN_SECRET);
            const dbUserData = await prisma.user.findUnique({
                where: { id: refreshPayload.userId },
            });
            if (dbUserData?.refreshToken !== refreshTokenFromHeader) {
                throw new graphql_1.GraphQLError("Refresh token does not match");
            }
            const newAccessToken = jsonwebtoken_1.default.sign({
                userId: dbUserData.id,
                email: dbUserData.email,
                role: dbUserData.role,
            }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1m" });
            res.setHeader("x-access-token", newAccessToken);
            context.payload = refreshPayload;
        }
        catch (error) {
            throw new graphql_1.GraphQLError("Not authenticated");
        }
    }
    return next();
};
exports.isAuth = isAuth;
const isDoctor = async ({ context }, next) => {
    const { req, res } = context;
    const accessToken = req.headers["authorization"];
    const refreshToken = Array.isArray(req.headers["x-refresh-token"])
        ? req.headers["x-refresh-token"][0]
        : req.headers["x-refresh-token"];
    if (!accessToken) {
        throw new graphql_1.GraphQLError("Not authenticated");
    }
    try {
        const accessTokenFromHeader = accessToken.split(" ")[1];
        const payload = jsonwebtoken_1.default.verify(accessTokenFromHeader, process.env.ACCESS_TOKEN_SECRET);
        context.payload = payload;
        if (payload.role !== "DOCTOR") {
            throw new graphql_1.GraphQLError("Access denied: Doctors only");
        }
    }
    catch (error) {
        if (!refreshToken) {
            throw new graphql_1.GraphQLError("Not authenticated - refresh token missing ,Please login again");
        }
        try {
            const refreshTokenFromHeader = refreshToken.split(" ")[1];
            const refreshPayload = jsonwebtoken_1.default.verify(refreshTokenFromHeader, process.env.REFRESH_TOKEN_SECRET);
            const dbUserData = await prisma_1.default.user.findUnique({
                where: { id: refreshPayload.userId },
            });
            if (dbUserData?.refreshToken !== refreshTokenFromHeader) {
                throw new graphql_1.GraphQLError("Refresh token does not match");
            }
            const newAccessToken = jsonwebtoken_1.default.sign({
                userId: dbUserData.id,
                email: dbUserData.email,
                role: dbUserData.role,
            }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1m" });
            res.setHeader("x-access-token", newAccessToken);
            context.payload = refreshPayload;
        }
        catch (error) {
            throw new graphql_1.GraphQLError(error.message || "Access denied: Doctors only");
        }
    }
    return next();
};
exports.isDoctor = isDoctor;
