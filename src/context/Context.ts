import { Request } from "express";
import { PrismaClient } from "@prisma/client";

export interface Context {
  prisma: PrismaClient;
  req: Request;
  payload?: { userId: number };
}

export function createContext({ req }: { req: Request }): Context {
  return {
    prisma: new PrismaClient(),
    req,
  };
}
