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
  {
    id: "html",
    name: "HTML5",
    img: html,
    skillLv: "Intermediário",
    topics: [
      "HTML semântico,",
      "Formulários e validação,",
      "Acessibilidade e SEO.",
    ],
    type: "frontEndCore",
  },
  {
    id: "css",
    name: "CSS3",
    img: css,
    skillLv: "Intermediário",
    topics: [
      "Flexbox e Grid,",
      "Responsividade e Mobile First,",
      "Animações e transições.",
    ],
    type: "frontEndCore",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    img: tailwind,
    skillLv: "Básico",
    topics: [
      "Utility classes,",
      "Layouts responsivos,",
      "Customização de estilos.",
    ],
    type: "frontEndCore",
  },
  {
    id: "js",
    name: "JavaScript",
    img: js,
    skillLv: "Intermediário",
    topics: [
      "Manipulação de arrays e objetos,",
      "Programação assíncrona,",
      "Manipulação do DOM e eventos.",
    ],
    type: "frontEndCore",
  },
  {
    id: "ts",
    name: "TypeScript",
    img: ts,
    skillLv: "Intermediário",
    topics: [
      "Tipagem de objetos e funções,",
      "Interfaces e Type Aliases,",
      "Generics e Utility Types.",
    ],
    type: "frontEndCore",
  },
  {
    id: "node",
    name: "Node.js",
    img: node,
    skillLv: "Básico",
    topics: [
      "NPM e gerenciamento de dependências,",
      "Módulos e APIs do Node.js,",
      "Criação de APIs e servidores.",
    ],
  },
  {
    id: "react",
    name: "React",
    img: react,
    skillLv: "Avançado",
    topics: [
      "Componentização e composição,",
      "Hooks e gerenciamento de estado,",
      "Formulários e integração com APIs.",
    ],
    type: "frontEndCore",
  },
  {
    id: "motion",
    name: "Motion",
    img: motion,
    skillLv: "Básico",
    topics: [
      "Animações de entrada e saída,",
      "Transições entre estados,",
      "Animações baseadas em interação.",
    ],
  },
  {
    id: "next",
    name: "Next.js",
    img: next,
    skillLv: "Intermediário",
    topics: [
      "App Router e layouts,",
      "Rotas dinâmicas,",
      "Server e Client Components.",
    ],
    type: "frontEndCore",
  },
  {
    id: "vercel",
    name: "Vercel",
    img: vercel,
    skillLv: "",
    topics: [
      "Deploy de aplicações Next.js,",
      "Integração com GitHub,",
      "Variáveis de ambiente.",
    ],
    type: "testTools",
  },
  {
    id: "git",
    name: "Git",
    img: git,
    skillLv: "Básico",
    topics: [
      "Branches e merge,",
      "Commits e histórico,",
      "Git workflow no desenvolvimento.",
    ],
    type: "testTools",
  },
  {
    id: "github",
    name: "GitHub",
    img: github,
    skillLv: "",
    topics: [
      "Repositórios e branches,",
      "Pull Requests e Issues,",
      "GitHub Actions e CI/CD.",
    ],
    type: "testTools",
  },
];