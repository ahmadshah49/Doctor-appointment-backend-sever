"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = createContext;
const client_1 = require("@prisma/client");
function createContext({ req }) {
    return {
        prisma: new client_1.PrismaClient(),
        req,
    };
}
