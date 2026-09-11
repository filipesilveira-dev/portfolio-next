//Importação direta de imagens por conflitos de caminho após o build
// import diceRoller from "../../public/prints/diceRoller.png";
// import diceRollerMobile from "../../public/prints/diceRollerMobile.png";

import balanceMe from "../../public/prints/balanceMe.png";
import balanceMeMobile from "../../public/prints/balanceMeMobile.png";

// import sepiaBistro from "../../public/prints/sepiaBistro.png";
// import sepiaBistroMobile from "../../public/prints/sepiaBistroMobile.png";

// import diarioDeBordo from "../../public/prints/diarioDeBordo.png";
// import diarioDeBordoMobile from "../../public/prints/diarioDeBordoMobile.png";

// import tudoDevBlog from "../../public/prints/tudoDevBlog.png";
// import tudoDevBlogMobile from "../../public/prints/tudoDevBlogMobile.png";

// Arquivo que fornece os dados consimidos em "Portfolio"
export const projects = [
  {
    id: 1,
    name: "Balance Me",
    img: balanceMe,
    imgM: balanceMeMobile,
    resume: "Veja seu equilíbrio diário",
    description:
      "O Balance Me é uma aplicação web interativa concebida para auxiliar no autogerenciamento diário. Muitas vezes nos sentimos sobrecarregados sem entender a real proporção entre o que precisamos fazer (obrigações) e o que nos recarrega as energias (lazer e descanso). Com uma proposta visual, simples e intuitiva, o usuário atribui pesos e níveis de intensidade a cada atividade do seu dia, permitindo que a aplicação gere uma régua de equilíbrio proporcional e dinâmica.",
    url: "https://github.com/filipesilveira-dev/balance-me-app",
    deploy: "https://filipesilveira-dev.github.io/balance-me-app/",
    tech: ["React", "Typescript", "CSS Modules"],
  },
  // {
  //   id: 2,
  //   name: "Dice Roller",
  //   img: diceRoller,
  //   imgM: diceRollerMobile,
  //   resume: "Chegou a hora de rolar os dados",
  //   description:
  //     "Trata-se de uma aplicação web autoral desenvolvida desde o conceito, com múltiplos tipos de dados, lançamentos individuais e simultâneos, componentes reutilizáveis, gerenciamento de estado global com Zustand e animações. Implementação de testes automatizados com Jest e React Testing Library, CI/CD com GitHub Actions e deploy no GitHub Pages.",
  //   url: "https://github.com/filipesilveira-dev/dice-roller",
  //   deploy: "https://filipesilveira-dev.github.io/dice-roller/",
  //   tech: ["Zustand", "Motion", "Jest"],
  // },
  // {
  //   id: 3,
  //   name: "Sépia Bistrô",
  //   img: sepiaBistro,
  //   imgM: sepiaBistroMobile,
  //   resume: "Sua página web com Micro Frontend",
  //   description:
  //     "Trata-se de uma página web desenvolvida utilizando a arquitetura de micro frontends. O Container é a aplicação Host responsável por integrar os micro frontends do projeto Sépia Bistrô por meio de Module Federation utilizando React e Vite. Nesta arquitetura, o Container é responsável por carregar dinamicamente os módulos remotos, compondo a aplicação final exibida ao usuário. O projeto é composto pelos seguintes micro frontends: mfe-container → aplicação Host responsável pela integração. mfe-menu → responsável pela exibição do cardápio e seleção dos produtos. mfe-checkout → responsável pelo carrinho de compras e processo de checkout.",
  //   url: "https://github.com/filipesilveira-dev/frontendGithub/tree/main/sepia_bistro_micro_frontend",
  //   deploy: "",
  //   tech: ["Micro Frontend", "Module Federation", "React"],
  // },
  // {
  //   id: 4,
  //   name: "Diário de bordo",
  //   img: diarioDeBordo,
  //   imgM: diarioDeBordoMobile,
  //   resume: "O que você fez hoje?",
  //   description:
  //     "Projeto desenvolvido como atividade prática da EBAC com o objetivo de implementar um Diário de Bordo como Progressive Web App (PWA) utilizando React, TypeScript, Vite e Zustand.",
  //   url: "https://github.com/filipesilveira-dev/frontendGithub/tree/main/diario_de_bordo_PWA",
  //   deploy: "",
  //   tech: ["PWA", "Typescript", "React"],
  // },
  // {
  //   name: "Tudo Dev Blog",
  //   img: tudoDevBlog,
  //   imgM: tudoDevBlogMobile,
  //   resume: "Tudo sobre o mundo dev",
  //   description:
  //     "Blog desenvolvido com Next.js para exibição de artigos técnicos, utilizando rotas dinâmicas, Server Components e geração estática de páginas. Demonstrar na prática conceitos modernos como data fetching no servidor, SSG/ISR e organização em camadas simulando consumo de API.",
  //   url: "https://github.com/filipesilveira-dev/frontendGithub/tree/main/tudo-dev-blog-nextjs",
  //   deploy: "https://frontend-github-iota.vercel.app/",
  //   tech: ["Next.js", "Typescript", "CSS Modules"],
  // },
];
