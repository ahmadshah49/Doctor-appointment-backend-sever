"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatJwt = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const generatJwt = (user) => {
    return (0, jsonwebtoken_1.sign)({ userId: user?.id, email: user?.email, role: user?.role }, process.env.SECRET_KEY, {
        expiresIn: "15d",
    });
};
exports.generatJwt = generatJwt;
