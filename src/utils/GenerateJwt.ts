import { sign } from "jsonwebtoken";
import { User } from "@prisma/client";

export const generateAccessToken = (user: User) => {
  const accessToken = sign(
    { userId: user?.id, email: user?.email, role: user?.role },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
  return accessToken;
};

export const generateRefreshToken = (user: User) => {
  const refreshToken = sign(
    { userId: user?.id, email: user?.email, role: user?.role },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "90d" }
  );
  return refreshToken;
};
