import * as z from "zod";

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});
export const ResetSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});
export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(6, {
    message: "minimum password length is 6 characters",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});
