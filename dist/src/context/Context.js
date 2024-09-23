"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
const client_1 = require("@prisma/client");
function createContext({ req }) {
    return {
        prisma: new client_1.PrismaClient(),
        req,
    };
}
exports.createContext = createContext;
