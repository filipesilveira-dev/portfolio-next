"use server";

import { Resend } from "resend";

import ContactEmail from "@/components/ContactEmail";
import { contactSchema } from "@/schemas/contactSchema";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function sendContactEmail(data: unknown) {
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: "Dados inválidos.",
    };
  }

  const {
    name,
    email,
    subject,
    message,
  } = result.data;

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",

    to: [process.env.CONTACT_EMAIL!],

    replyTo: email,

    subject: `[Portfólio] ${subject}`,

    react: ContactEmail({
      name,
      email,
      subject,
      message,
    }),
  });

  if (error) {
    console.error("Erro do Resend:", error);
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Mensagem enviada com sucesso!",
  };
}