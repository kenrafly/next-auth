import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `<p>Click the link below to reset your password:</p>
    <a href="${resetLink}">Reset Password</a> 
    <p>If you did not request this, please ignore this email.</p>`,
  });
};

export const sentVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verify your email",
    html: `<p>Click the link below to verify your email:</p>
    <a href="${confirmLink}">Verify Email</a>
    <p>If you did not request this, please ignore this email.</p>`,
  });
};
