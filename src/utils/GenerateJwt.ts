import { sign } from "jsonwebtoken";

import { User } from "@prisma/client";

export const generatJwt = (user: User) => {
  return sign(
    { userId: user?.id, email: user?.email, role: user?.role },
    process.env.SECRET_KEY,
    {
      expiresIn: "15d",
    }
  );
};
