"use server";

import * as z from "zod";
import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user/user";
import { sendResetPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedField = ResetSchema.safeParse(values);
  if (!validatedField.success) {
    return {
      error: "Invalid Fields",
    };
  }
  const { email } = validatedField.data;
  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return {
      errorL: "Email not found ",
    };
  }
  const passwordResetToken = await generatePasswordResetToken(email);
  await sendResetPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );
  return { success: "Reset email sent" };
};
export { reset };
