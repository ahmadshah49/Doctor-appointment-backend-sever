import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { role } from "../generated/type-graphql";

export interface Context {
  req: Request;
  res: Response;
  prisma: PrismaClient;
  payload?: { userId: number; role: role };
}

export function createContext({
  req,
  res,
}: {
  req: Request;
  res: Response;
}): Context {
  return {
    prisma: new PrismaClient(),
    req,
    res,
  };
}
