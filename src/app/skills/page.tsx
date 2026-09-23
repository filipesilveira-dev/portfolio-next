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
      </div>

      {/* Tabela em telas menores */}
      <ul className={style.list_container}>
        {skills.map((skill) => (
          <li key={skill.id} className={style.list_item_container}>
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

      <Contact />
    </>
  );
}
