"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { sendContactEmail } from "@/app/actions/contact";
import {
  contactSchema,
  type ContactFormData,
} from "@/schemas/contactSchema";

import style from "./Form.module.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    const result = await sendContactEmail(data);

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert(result.message);

    reset();
  }

  return (
    <form
      className={style.form_container}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3>Seu nome</h3>

      <input
        type="text"
        placeholder="Ex.: Maria Silva"
        {...register("name")}
      />

      {errors.name && (
        <span>{errors.name.message}</span>
      )}

      <h3>Seu E-mail</h3>

      <input
        type="email"
        placeholder="Ex.: maria@email.com"
        {...register("email")}
      />

      {errors.email && (
        <span>{errors.email.message}</span>
      )}

      <h3>Assunto</h3>

      <input
        list="subjects"
        id="subject"
        {...register("subject")}
      />

      <datalist id="subjects">
        <option value="Proposta de Projeto" />
        <option value="Oportunidade de Trabalho" />
        <option value="Dúvida/Outro" />
      </datalist>

      {errors.subject && (
        <span>{errors.subject.message}</span>
      )}

      <h3>Sua Mensagem</h3>

      <textarea
        placeholder="Descreva os detalhes da sua ideia ou oportunidade"
        rows={5}
        {...register("message")}
      />

      {errors.message && (
        <span>{errors.message.message}</span>
      )}

      <button
        className={style.btn}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? "Enviando..."
          : "Enviar"}
      </button>
    </form>
  );
}