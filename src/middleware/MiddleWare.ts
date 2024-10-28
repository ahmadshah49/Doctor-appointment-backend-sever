import { GraphQLError } from "graphql";
import Jwt from "jsonwebtoken";
import { MiddlewareFn } from "type-graphql";
import { Context } from "../context/Context";
import { role } from "../generated/type-graphql";
import Prisma from "../lib/prisma";
interface JwtPayloadWithRole extends Jwt.JwtPayload {
  role: role;
  userId: number;
}

export const isAuth: MiddlewareFn<Context> = async ({ context }, next) => {
  const { req, res, prisma } = context;
  const accessToken = req.headers["authorization"];
  const refreshToken = Array.isArray(req.headers["x-refresh-token"])
    ? req.headers["x-refresh-token"][0]
    : req.headers["x-refresh-token"];

  if (!accessToken) {
    throw new GraphQLError("Not authenticated");
  }

  try {
    const accessTokenFromHeader = accessToken.split(" ")[1];

    const payload = Jwt.verify(
      accessTokenFromHeader,
      process.env.ACCESS_TOKEN_SECRET!
    );
    context.payload = payload as any;
  } catch (error) {
    if (!refreshToken) {
      throw new GraphQLError(
        "Not authenticated - refresh token missing ,Please login again"
      );
    }

    try {
      const refreshTokenFromHeader = refreshToken.split(" ")[1];

      const refreshPayload = Jwt.verify(
        refreshTokenFromHeader,
        process.env.REFRESH_TOKEN_SECRET
      ) as any;

      const dbUserData = await prisma.user.findUnique({
        where: { id: refreshPayload.userId },
      });

      if (dbUserData?.refreshToken !== refreshTokenFromHeader) {
        throw new GraphQLError("Refresh token does not match");
      }

      const newAccessToken = Jwt.sign(
        {
          userId: dbUserData.id,
          email: dbUserData.email,
          role: dbUserData.role,
        },
        process.env.ACCESS_TOKEN_SECRET!,
        { expiresIn: "1m" }
      );

      res.setHeader("x-access-token", newAccessToken);
      context.payload = refreshPayload;
    } catch (error) {
      throw new GraphQLError("Not authenticated");
    }
  }

  return next();
};

export const isDoctor: MiddlewareFn<Context> = async ({ context }, next) => {
  const { req, res } = context;
  const accessToken = req.headers["authorization"];
  const refreshToken = Array.isArray(req.headers["x-refresh-token"])
    ? req.headers["x-refresh-token"][0]
    : req.headers["x-refresh-token"];

  if (!accessToken) {
    throw new GraphQLError("Not authenticated");
  }

  try {
    const accessTokenFromHeader = accessToken.split(" ")[1];

    const payload = Jwt.verify(
      accessTokenFromHeader,
      process.env.ACCESS_TOKEN_SECRET!
    ) as JwtPayloadWithRole;
    context.payload = payload;

    if (payload.role !== "DOCTOR") {
      throw new GraphQLError("Access denied: Doctors only");
    }
  } catch (error) {
    if (!refreshToken) {
      throw new GraphQLError(
        "Not authenticated - refresh token missing ,Please login again"
      );
    }
    try {
      const refreshTokenFromHeader = refreshToken.split(" ")[1];

      const refreshPayload = Jwt.verify(
        refreshTokenFromHeader,
        process.env.REFRESH_TOKEN_SECRET
      ) as any;
      const dbUserData = await Prisma.user.findUnique({
        where: { id: refreshPayload.userId },
      });

      if (dbUserData?.refreshToken !== refreshTokenFromHeader) {
        throw new GraphQLError("Refresh token does not match");
      }

      const newAccessToken = Jwt.sign(
        {
          userId: dbUserData.id,
          email: dbUserData.email,
          role: dbUserData.role,
        },
        process.env.ACCESS_TOKEN_SECRET!,
        { expiresIn: "1m" }
      );

      res.setHeader("x-access-token", newAccessToken);
      context.payload = refreshPayload;
    } catch (error) {
      throw new GraphQLError(error.message || "Access denied: Doctors only");
    }
  }
  return next();
};
