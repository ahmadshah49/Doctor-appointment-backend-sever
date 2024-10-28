"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const generateAccessToken = (user) => {
    const accessToken = (0, jsonwebtoken_1.sign)({ userId: user?.id, email: user?.email, role: user?.role }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1m" });
    return accessToken;
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (user) => {
    const refreshToken = (0, jsonwebtoken_1.sign)({ userId: user?.id, email: user?.email, role: user?.role }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "90d" });
    return refreshToken;
};
exports.generateRefreshToken = generateRefreshToken;
