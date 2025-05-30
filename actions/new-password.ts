"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { NewPasswordSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user/user";
import { db } from "@/lib/db";
import { getPasswordResetTokenByToken } from "@/data/user/password-reset-token";

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
  if (!token) {
    return {
      error: "Token is required",
    };
  }
  const validatedFields = NewPasswordSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Invalid Fields",
    };
  }
  const { password } = validatedFields.data;
  const existingToken = await getPasswordResetTokenByToken(token);
  console.log("Received token:", token);
  console.log("Fetched token from DB:", existingToken);
  if (!existingToken) {
    return {
      error: "Invalid token",
    };
  }

  const tokenHasExpired = new Date(existingToken.expires) < new Date();
  if (tokenHasExpired) {
    return { error: "Token has expired" };
  }
  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return {
      error: "Email doesn't exist!",
    };
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      password: hashedPassword,
    },
  });
  await db.passwordResetToken.delete({
    where: {
      id: existingToken.id,
    },
  });
  return { success: "Password updated successfully" };
};
