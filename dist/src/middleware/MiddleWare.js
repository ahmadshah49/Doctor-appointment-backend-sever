"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDoctor = exports.isAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const graphql_1 = require("graphql");
// export const isAuth: MiddlewareFn<Context> = async ({ context }, next) => {
//   const { req, res } = context;
//   const accessToken = req.headers["authorization"];
//   const refreshToken = Array.isArray(req.headers["x-refresh-token"])
//     ? req.headers["x-refresh-token"][0]
//     : req.headers["x-refresh-token"];
//   console.log("accessToken", accessToken);
//   console.log("refreshToken", refreshToken);
//   if (!accessToken) {
//     throw new GraphQLError("Not authenticated");
//   }
//   try {
//     const accessTokenFromHeader = accessToken.split(" ")[1];
//     console.log("accessTokenFromHeader", accessTokenFromHeader);
//     const payload = Jwt.verify(
//       accessTokenFromHeader,
//       process.env.ACCESS_TOKEN_SECRET!
//     );
//     console.log("payload", payload);
//     context.payload = payload as any;
//   } catch (error) {
//     console.log("Error", error);
//     // throw new GraphQLError(error.message || "Not Authenticated");
//     try {
//       const dbUserData = await Prisma.user.findUnique({
//         where: {
//           id: context?.payload?.userId,
//         },
//       });
//       const payload = Jwt.verify(
//         dbUserData?.refreshToken,
//         process.env.REFRESH_TOKEN_SECRET
//       );
//       const newAccessToken = Jwt.sign(
//         {
//           userId: dbUserData?.id,
//           email: dbUserData?.email,
//           role: dbUserData?.role,
//         },
//         process.env.ACCESS_TOKEN_SECRET,
//         { expiresIn: "1m" }
//       );
//       res.setHeader("x-access-token", newAccessToken);
//       context.payload = payload as any;
//     } catch (error) {
//       throw new GraphQLError("Not authenticated");
//     }
//   }
//   return next();
// };
const isAuth = async ({ context }, next) => {
    const { req, res, prisma } = context;
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
    }
    catch (error) {
        if (!refreshToken) {
            throw new graphql_1.GraphQLError("Not authenticated - refresh token missing");
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
            context.payload = refreshPayload; // Use payload from verified refresh token
        }
        catch (refreshError) {
            console.log("Refresh token verification failed:", refreshError);
            throw new graphql_1.GraphQLError("Not authenticated");
        }
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
