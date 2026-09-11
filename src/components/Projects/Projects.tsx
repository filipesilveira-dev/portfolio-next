import Link from "next/link";
import Card from "../Card/Card";
import style from "./Projects.module.css"
// nome, resumo, três tecnologias
// import {projects} from "@/utils/projects"

export interface Projeto{
  id: number;
  name: string;
  resume: string;
  tech: string[];
}

const projetoMock = [{
  id: 1,
  name: "Balance Me",
  resume: "Veja seu equilíbrio diário",
  tech: ["React", "Typescript", "CSS Modules"],
}];

export default function Projects() {
  return (
    <div className={style.projects_container}>
      <h2>Projetos em destaque</h2>
      <Link href="/projects">Ver todos</Link>
      <Link href="/projects" />
      {projetoMock.map((projeto)=>(<Card key={projeto.id} name={projeto.name} resume={projeto.resume} tech={projeto.tech}/>))}
    </div>
  );
}
