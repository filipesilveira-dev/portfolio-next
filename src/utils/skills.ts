// Arquivo que será consumido na página de tecnologia (pode ser reaproveitado no componente Tech eventualmente)
import html from "../../public/tech_logos/html.png";
import css from "../../public/tech_logos/css.png";
import tailwind from "../../public/tech_logos/tailwind.png";
import js from "../../public/tech_logos/js.png";
import ts from "../../public/tech_logos/typescript.png";
import node from "../../public/tech_logos/nodejs.png";
import react from "../../public/tech_logos/react.png";
import motion from "../../public/tech_logos/motion.png";
import next from "../../public/tech_logos/Next.js.png";
import vercel from "../../public/tech_logos/vercel.png";
import git from "../../public/tech_logos/git.png";
import github from "../../public/tech_logos/githubLight.png";

export const skills = [
  { id: "html", name: "HTML5", img: html, skillLv: "Intermediário" },
  { id: "css", name: "CSS3", img: css, skillLv: "Intermediário" },
  { id: "tailwind", name: "Tailwind CSS", img: tailwind, skillLv: "Básico" },
  { id: "js", name: "JavaScript", img: js, skillLv: "Intermediário" },
  { id: "ts", name: "Typescript", img: ts, skillLv: "Intermediário" },
  { id: "node", name: "Node Js", img: node, skillLv: "Básico" },
  { id: "react", name: "React", img: react, skillLv: "Avançado" },
  { id: "motion", name: "Motion", img: motion, skillLv: "Básico" },
  { id: "next", name: "Next.js", img: next, skillLv: "Intermediário" },
  { id: "vercel", name: "Vercel", img: vercel, skillLv: "" },
  { id: "git", name: "Git", img: git, skillLv: "Básico" },
  { id: "github", name: "GitHub", img: github, skillLv: "" },
];
