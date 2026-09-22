// Configuração do Zod
import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Digite seu nome."),

  email: z
    .email("Digite um e-mail válido."),

  subject: z
    .string()
    .min(1, "Informe um assunto."),

  message: z
    .string()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres."),
});

export type ContactFormData = z.infer<typeof contactSchema>;