import Contact from "@/components/Contact/Contact";
import style from "./page.module.css";
import { skills } from "@/utils/skills";
import Image from "next/image";

export default function Skills() {
  return (
    <>
      <div className={style.text_wrapper}>
        <h2 className={style.title}>
          <span>Habilidades</span>
        </h2>
        <p className={style.subtitle}>
          Tecnologias e ferramentas que domino no desenvolvimento front-end.
        </p>
        <p className={style.subtitle_desktop}>
          <strong>Tecnologias</strong>, <strong>ferramentas</strong> e{" "}
          <strong>práticas</strong> que domino para construir aplicações
          modernas, rápidas e escaláveis em front-end.
        </p>
      </div>

      {/* Tabela em telas menores */}
      <ul className={style.list_container}>
        {skills.map((skill) => (
          <li key={skill.id} className={style.list_item_container} title={skill.name}>
            <Image
              width={40}
              height={40}
              alt={`Logo de ${skill.id}`}
              src={skill.img}
              unoptimized
            />
            <div className={style.list_item_text_wrapper}>
              <span>
                <strong>{skill.name}</strong>
              </span>
              <div
                className={`
                    ${skill.skillLv === "Básico" ? style.basic : ""}
                    ${skill.skillLv === "Intermediário" ? style.intermediate : ""}
                    ${skill.skillLv === "Avançado" ? style.advanced : ""}
                `}
              >
                {skill.skillLv}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Telas maiores */}
      <div className={style.skill_desktop_container}>
        {/* Front-end Core */}
        <div>
          <h3>Front-end Core</h3>

          {/* Card da tecnologia */}
          <ul className={style.list_desktop_container}>
            {skills
              .filter((s) => s.type === "frontEndCore")
              .map((skill) => (
                <li
                  key={skill.id}
                  className={style.list_item_container}
                  title={skill.name}
                >
                  <div className={style.list_item_wrapper}>
                    {/* Imagem da tecnologia */}
                    <Image
                      width={40}
                      height={40}
                      alt={`Logo de ${skill.id}`}
                      src={skill.img}
                      unoptimized
                    />

                    {/* Nome da tecnologia */}
                    <div className={style.list_item_text_wrapper}>
                      <span>
                        <strong>{skill.name}</strong>
                      </span>
                    </div>

                    {/* Nível de proeficiência */}
                    <div
                      className={`
                    ${skill.skillLv === "Básico" ? style.basic : ""}
                    ${skill.skillLv === "Intermediário" ? style.intermediate : ""}
                    ${skill.skillLv === "Avançado" ? style.advanced : ""}
                `}
                    >
                      {skill.skillLv}
                    </div>

                    {/* Tópicos da tecnologia */}
                    <div className={style.topics_wrapper}>
                      {skill.topics.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* Arquitetura e Estado */}
        {/* Front-end Core */}
        <div>
          <h3>Arquitetura e Estado</h3>

          {/* Card da tecnologia */}
          <ul className={style.list_desktop_container}>
            {skills
              .filter((s) => s.type === "arqState")
              .map((skill) => (
                <li
                  key={skill.id}
                  className={style.list_item_container}
                  title={skill.name}
                >
                  <div className={style.list_item_wrapper}>
                    {/* Imagem da tecnologia */}
                    <Image
                      width={40}
                      height={40}
                      alt={`Logo de ${skill.id}`}
                      src={skill.img}
                      unoptimized
                    />

                    {/* Nome da tecnologia */}
                    <div className={style.list_item_text_wrapper}>
                      <span>
                        <strong>{skill.name}</strong>
                      </span>
                    </div>

                    {/* Nível de proeficiência */}
                    <div
                      className={`
                    ${skill.skillLv === "Básico" ? style.basic : ""}
                    ${skill.skillLv === "Intermediário" ? style.intermediate : ""}
                    ${skill.skillLv === "Avançado" ? style.advanced : ""}
                `}
                    >
                      {skill.skillLv}
                    </div>

                    {/* Tópicos da tecnologia */}
                    <div className={style.topics_wrapper}>
                      {skill.topics.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* Testes e ferramentas */}
        <div>
          <h3>Testes e Ferramentas</h3>

          {/* Card da tecnologia */}
          <ul className={style.list_desktop_container}>
            {skills
              .filter((s) => s.type === "testTools")
              .map((skill) => (
                <li key={skill.id} className={style.list_item_container}>
                  <div className={style.list_item_wrapper}>
                    {/* Imagem da tecnologia */}
                    <Image
                      width={40}
                      height={40}
                      alt={`Logo de ${skill.id}`}
                      src={skill.img}
                      unoptimized
                    />

                    {/* Nome da tecnologia */}
                    <div className={style.list_item_text_wrapper}>
                      <span>
                        <strong>{skill.name}</strong>
                      </span>
                    </div>

                    {/* Nível de proeficiência */}
                    <div
                      className={`
                    ${skill.skillLv === "Básico" ? style.basic : ""}
                    ${skill.skillLv === "Intermediário" ? style.intermediate : ""}
                    ${skill.skillLv === "Avançado" ? style.advanced : ""}
                `}
                    >
                      {skill.skillLv}
                    </div>

                    {/* Tópicos da tecnologia */}
                    <div className={style.topics_wrapper}>
                      {skill.topics.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <Contact />
    </>
  );
}
