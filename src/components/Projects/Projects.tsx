import Link from "next/link";
import Card from "../Card/Card";
import style from "./Projects.module.css";
import { projects } from "@/utils/projects";
import Image from "next/image";
// import arrow from "./arrow.svg"

export interface Projeto {
  id: number;
  img: string;
  name: string;
  resume: string;
  tech: string[];
}

// const projetoMock = [
//   {
//     id: 1,
//     name: "Balance Me",
//     resume: "Veja seu equilíbrio diário",
//     tech: ["React", "Typescript", "CSS Modules"],
//   },
// ];

export default function Projects() {
  return (
    <div className={style.projects_section}>
      <div className={style.projets_section_title_wrapper}>
        <h2>Projetos em destaque</h2>
        <Link className={style.projects_link} href="/projects">
          Ver todos{" "}
          <Image src="/arrow.svg" width={20} height={20} alt="Imagem de seta" />
        </Link>
      </div>

      {projects.map((project) => (
        <Card
          key={project.id}
          img={project.imgM}
          name={project.name}
          resume={project.resume}
          tech={project.tech}
        />
      ))}
    </div>
  );
}
