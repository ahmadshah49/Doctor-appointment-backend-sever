import { MiddlewareFn } from "type-graphql";
import Jwt from "jsonwebtoken";
import { Context } from "../context/Context";
import { GraphQLError } from "graphql";
import { role } from "../generated/type-graphql";
interface JwtPayloadWithRole extends Jwt.JwtPayload {
  role: role;
  userId: number;
}

export const isAuth: MiddlewareFn<Context> = async ({ context }, next) => {
  const { req } = context;
  const authorization = req.headers["authorization"];
  console.log("authorization", authorization);

  if (!authorization) {
    throw new GraphQLError("Not authenticated");
  }

  try {
    const token = authorization.split(" ")[1];
    console.log("token", token);

    const payload = Jwt.verify(token, process.env.SECRET_KEY!);
    console.log("payload", payload);
    context.payload = payload as any;
  } catch (error) {
    console.log("Error", error);

    throw new GraphQLError("Not authenticated");
  }
  return next();
};

export const isDoctor: MiddlewareFn<Context> = async ({ context }, next) => {
  const { req } = context;
  const authorization = req.headers["authorization"];
  console.log("authorization", authorization);

  if (!authorization) {
    throw new GraphQLError("Not authenticated");
  }

  try {
    const token = authorization.split(" ")[1];
    console.log("token", token);

    const payload = Jwt.verify(
      token,
      process.env.SECRET_KEY!
    ) as JwtPayloadWithRole;
    context.payload = payload;

    if (payload.role !== "DOCTOR") {
      throw new GraphQLError("Access denied: Doctors only");
    }
  } catch (error) {
    throw new GraphQLError("Access denied: Doctors only");
  }
  return next();
};
