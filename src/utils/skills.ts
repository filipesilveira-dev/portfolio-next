// Arquivo que será consumido na página de tecnologia (pode ser reaproveitado no componente Tech eventualmente)
import html from "../../public/tech_logos/html.png";
import css from "../../public/tech_logos/css.png";
import tailwind from "../../public/tech_logos/tailwind.png";
import js from "../../public/tech_logos/js.png";
import ts from "../../public/tech_logos/typescript.png";
import node from "../../public/tech_logos/nodejs.png";
import react from "../../public/tech_logos/react.png";
import motion from "../../public/tech_logos/motion.png";
import next from "../../public/tech_logos/next.js.png";
import vercel from "../../public/tech_logos/vercel.png";
import git from "../../public/tech_logos/git.png";
import github from "../../public/tech_logos/githubLight.png";
import gitHubActions from "../../public/tech_logos/gitHubActions.png";
import jest from "../../public/tech_logos/jest.png";
import rtl from "../../public/tech_logos/rtl.png";
import vite from "../../public/tech_logos/vite-js-256-logo.png";
import mfe from "../../public/tech_logos/microfrontend.png";
import pwa from "../../public/tech_logos/pwa.png";
import restApi from "../../public/tech_logos/restApi.png";
import zustand from "../../public/tech_logos/zustand.svg";
import gitHubPages from "../../public/tech_logos/GitHubPages.png";

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
    type: "testTools",
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
    type: "frontEndCore",
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
    id: "jest",
    name: "Jest",
    img: jest,
    skillLv: "Básico",
    topics: [
      "Testes unitários com matchers,",
      "Mocks e spies básicos,",
      "Execução e configuração inicial.",
    ],
    type: "testTools",
  },
  {
    id: "rtl",
    name: "React Testing Library",
    img: rtl,
    skillLv: "Básico",
    topics: [
      "Renderização de componentes em testes,",
      "Seleção de elementos por queries,",
      "Simulação de eventos básicos.",
    ],
    type: "testTools",
  },
  {
    id: "vite",
    name: "Vite",
    img: vite,
    skillLv: "Básico",
    topics: [
      "Configuração inicial de projetos,",
      "Hot Module Replacement (HMR),",
      "Build otimizado para produção.",
    ],
    type: "testTools",
  },
  {
    id: "vercel",
    name: "Vercel",
    img: vercel,
    skillLv: "Básico",
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
    skillLv: "Básico",
    topics: [
      "Repositórios e branches,",
      "Pull Requests e Issues,",
      "GitHub Actions e CI/CD.",
    ],
    type: "testTools",
  },
  {
    id: "gitHubActions",
    name: "GitHub Actions",
    img: gitHubActions,
    skillLv: "Básico",
    topics: [
      "Criação de workflows YAML,",
      "Automação de testes e build,",
      "Triggers de eventos (push, pull request).",
    ],
    type: "testTools",
  },
  {
    id: "gitHubPages",
    name: "GitHub Pages",
    img: gitHubPages,
    skillLv: "Básico",
    topics: [
      "Publicação de sites estáticos,",
      "Configuração via repositório,",
      "Deploy automático a partir de branches.",
    ],
    type: "testTools",
  },
  {
    id: "mfe",
    name: "Micro Front-end",
    img: mfe,
    skillLv: "Básico",
    topics: [
      "Conceitos de aplicações independentes,",
      "Integração entre múltiplos front-ends,",
      "Compartilhamento de componentes básicos.",
    ],
    type: "arqState",
  },
  {
    id: "pwa",
    name: "PWA",
    img: pwa,
    skillLv: "Básico",
    topics: [
      "Service Workers básicos,",
      "Manifesto de aplicação web,",
      "Cache e funcionamento offline.",
    ],
    type: "arqState",
  },
  {
    id: "restApi",
    name: "REST API",
    img: restApi,
    skillLv: "Básico",
    topics: [
      "Métodos HTTP (GET, POST, PUT, DELETE),",
      "Consumo de endpoints,",
      "Manipulação de requisições e respostas.",
    ],
    type: "arqState",
  },
  {
    id: "zustand",
    name: "Zustand",
    img: zustand,
    skillLv: "Básico",
    topics: [
      "Criação de stores simples,",
      "Gerenciamento de estado global básico,",
      "Hooks de acesso ao estado.",
    ],
    type: "arqState",
  },
];
