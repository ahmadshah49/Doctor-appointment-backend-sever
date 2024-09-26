import { Request } from "express";
import { PrismaClient } from "@prisma/client";
import { role } from "../generated/type-graphql";

export interface Context {
  prisma: PrismaClient;
  req: Request;
  payload?: { userId: number; role: role };
}

export function createContext({ req }: { req: Request }): Context {
  return {
    prisma: new PrismaClient(),
    req,
  };
}
