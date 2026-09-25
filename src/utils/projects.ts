//Importação direta de imagens por conflitos de caminho após o build
import diceRoller from "../../public/prints/diceRoller.png";
import diceRollerMobile from "../../public/prints/diceRollerMobile.png";

import balanceMe from "../../public/prints/balanceMe.png";
import balanceMeMobile from "../../public/prints/balanceMeMobile.png";

import sepiaBistro from "../../public/prints/sepiaBistro.png";
import sepiaBistroMobile from "../../public/prints/sepiaBistroMobile.png";

import diarioDeBordo from "../../public/prints/diarioDeBordo.png";
import diarioDeBordoMobile from "../../public/prints/diarioDeBordoMobile.png";

import tudoDevBlog from "../../public/prints/tudoDevBlog.png";
import tudoDevBlogMobile from "../../public/prints/tudoDevBlogMobile.png";

import slugify from "slugify";

// Arquivo que fornece os dados consumidos na aplicação
const projectsWithoutSlug = [
  {
    id: 1,
    name: "Balance Me",
    img: balanceMe,
    imgM: balanceMeMobile,
    resume: "Veja seu equilíbrio diário",
    resume2:
      "Uma ferramenta visual para acompanhar o equilíbrio entre obrigações e lazer.",
    description:
      "O Balance Me é uma aplicação web interativa concebida para auxiliar no autogerenciamento diário. Muitas vezes nos sentimos sobrecarregados sem entender a real proporção entre o que precisamos fazer (obrigações) e o que nos recarrega as energias (lazer e descanso). Com uma proposta visual, simples e intuitiva, o usuário atribui pesos e níveis de intensidade a cada atividade do seu dia, permitindo que a aplicação gere uma régua de equilíbrio proporcional e dinâmica.",
    url: "https://github.com/filipesilveira-dev/balance-me-app",
    deploy: "https://filipesilveira-dev.github.io/balance-me-app/",
    tech: ["React", "Typescript", "CSS Modules"],
    about:
      "O Balance Me surge da interceção entre duas áreas minhas de interesse: a tecnologia e a Psicologia. Tendo por base meu background de atuação como psicólogo no mais diversos campos, venho dedicando minhas atenção a identificar porblemas, questões ou pontos de melhoria que a tecnologia poderia resolver. Esta aplicação surge como uma ferramenta para ser utilizada pelo usuário do serviço de psicológia para gerar uma noção visual e organizada de como tem equilibrado suas atividades.",
    status: ["MVP publicado", "Em andamento"],
    type: "Projeto Pessoal",
    functions: [
      {
        function: "Registro de obrigações",
        subtitle: "cadastro de atividades que representam demandas do dia",
      },
      {
        function: "Registro de lazer",
        subtitle: "cadastro de atividades associadas a descanso e bem-estar",
      },
      {
        function: "Níveis de intensidade",
        subtitle: "atribuição de intensidade de 1 a 10 para cada atividade",
      },
      {
        function: "Balanço diário",
        subtitle:
          "visualização proporcional entre obrigações e momentos de lazer",
      },
      {
        function: "Persistência local",
        subtitle: "armazenamento dos registros no navegador",
      },
    ],
    concepts: [
      "componentização",
      "gerenciamento de estado",
      "estado global",
      "persistência de dados",
      "localStorage",
      "formulários",
      "tipagem com TypeScript",
      "design responsivo",
      "mobile-first",
    ],
    challenges:
      "Transformar uma ideia abstrata de equilíbrio entre demandas e lazer em uma representação visual simples, compreensível e dinâmica, além de estruturar o gerenciamento e a persistência dos dados no cliente.",
    experience:
      "O projeto proporcionou a prática de transformar uma necessidade identificada em uma aplicação funcional, unindo desenvolvimento front-end, organização de dados, gerenciamento de estado e decisões de experiência do usuário.",
  },

  {
    id: 2,
    name: "Dice Roller",
    img: diceRoller,
    imgM: diceRollerMobile,
    resume: "Chegou a hora de rolar os dados",
    resume2:
      "Um simulador de dados com múltiplos formatos, animações e lançamentos simultâneos.",
    description:
      "Trata-se de uma aplicação web autoral desenvolvida desde o conceito, com múltiplos tipos de dados, lançamentos individuais e simultâneos, componentes reutilizáveis, gerenciamento de estado global com Zustand e animações. Implementação de testes automatizados com Jest e React Testing Library, CI/CD com GitHub Actions e deploy no GitHub Pages.",
    url: "https://github.com/filipesilveira-dev/dice-roller",
    deploy: "https://filipesilveira-dev.github.io/dice-roller/",
    tech: [
      "React",
      "Typescript",
      "Vite",
      "Zustand",
      "Motion",
      "Jest",
      "React Testing Library",
      "GitHub Actions",
    ],
    about: "",
    status: "",
    type: "",
    functions: [
      {
        function: "Múltiplos tipos de dados",
        subtitle: "suporte a dados D4, D6, D8, D10, D12 e D20",
      },
      {
        function: "Lançamento individual",
        subtitle: "rolagem de um dado específico de forma independente",
      },
      {
        function: "Lançamento simultâneo",
        subtitle: "rolagem de múltiplos dados em uma única ação",
      },
      {
        function: "Gerenciamento de dados",
        subtitle: "adição e remoção dos dados utilizados na rolagem",
      },
      {
        function: "Animações",
        subtitle: "efeitos visuais durante as rolagens dos dados",
      },
      {
        function: "Persistência de configuração",
        subtitle: "manutenção da configuração dos dados no navegador",
      },
      {
        function: "Testes automatizados",
        subtitle: "testes de componentes e comportamentos da aplicação",
      },
      {
        function: "Deploy automatizado",
        subtitle: "integração e publicação por meio do GitHub Actions",
      },
    ],
    concepts: [
      "componentização",
      "componentes reutilizáveis",
      "gerenciamento de estado global",
      "Zustand",
      "props",
      "eventos",
      "renderização condicional",
      "animações",
      "testes automatizados",
      "CI/CD",
      "deploy",
    ],
    challenges:
      "Estruturar uma aplicação de rolagem que permitisse trabalhar com diferentes tipos de dados e combinações de lançamentos, mantendo os componentes reutilizáveis e o estado da aplicação organizado.",
    experience:
      "O projeto ampliou a experiência com gerenciamento de estado global, criação de componentes reutilizáveis, animações e testes automatizados, além de proporcionar contato prático com CI/CD e publicação de uma aplicação React.",
  },

  {
    id: 3,
    name: "Sépia Bistrô",
    img: sepiaBistro,
    imgM: sepiaBistroMobile,
    resume: "Sua página web com Micro Frontend",
    resume2:
      "Uma aplicação de restaurante estruturada com arquitetura de Micro Frontends.",
    description:
      "Trata-se de uma página web desenvolvida utilizando a arquitetura de micro frontends. O Container é a aplicação Host responsável por integrar os micro frontends do projeto Sépia Bistrô por meio de Module Federation utilizando React e Vite. Nesta arquitetura, o Container é responsável por carregar dinamicamente os módulos remotos, compondo a aplicação final exibida ao usuário. O projeto é composto pelos seguintes micro frontends: mfe-container → aplicação Host responsável pela integração. mfe-menu → responsável pela exibição do cardápio e seleção dos produtos. mfe-checkout → responsável pelo carrinho de compras e processo de checkout.",
    url: "https://github.com/filipesilveira-dev/frontendGithub/tree/main/sepia_bistro_micro_frontend",
    deploy: "",
    tech: [
      "React",
      "JavaScript",
      "Vite",
      "Webpack",
      "Module Federation",
      "Micro Frontend",
    ],
    about: "",
    status: "",
    type: "",
    functions: [
      {
        function: "Integração de Micro Frontends",
        subtitle:
          "composição de diferentes aplicações em uma experiência única",
      },
      {
        function: "Cardápio",
        subtitle: "exibição dos produtos disponíveis no restaurante",
      },
      {
        function: "Seleção de produtos",
        subtitle: "adição e controle de itens escolhidos pelo usuário",
      },
      {
        function: "Carrinho de compras",
        subtitle: "gerenciamento dos produtos selecionados para o pedido",
      },
      {
        function: "Checkout",
        subtitle: "visualização e finalização do pedido",
      },
      {
        function: "Comunicação entre módulos",
        subtitle: "troca de informações entre micro frontends independentes",
      },
      {
        function: "Carregamento de módulos remotos",
        subtitle: "integração dinâmica dos módulos pelo aplicativo Host",
      },
    ],
    concepts: [
      "Micro Frontends",
      "Module Federation",
      "arquitetura distribuída",
      "aplicação Host",
      "módulos remotos",
      "componentização",
      "comunicação entre aplicações",
      "gerenciamento de estado",
      "Vite",
      "Webpack",
    ],
    challenges:
      "O principal desafio foi compreender como dividir uma aplicação em partes independentes e, posteriormente, integrá-las em uma aplicação Host, mantendo a comunicação entre o cardápio, o carrinho e o checkout.",
    experience:
      "O projeto proporcionou contato prático com arquitetura de Micro Frontends e Module Federation, ampliando a compreensão sobre integração, comunicação e organização de aplicações front-end independentes.",
  },

  {
    id: 4,
    name: "Diário de bordo",
    img: diarioDeBordo,
    imgM: diarioDeBordoMobile,
    resume: "O que você fez hoje?",
    resume2:
      "Um diário pessoal desenvolvido como Progressive Web App para registrar atividades do dia.",
    description:
      "Projeto desenvolvido como atividade prática da EBAC com o objetivo de implementar um Diário de Bordo como Progressive Web App (PWA) utilizando React, TypeScript, Vite e Zustand.",
    url: "https://github.com/filipesilveira-dev/frontendGithub/tree/main/diario_de_bordo_PWA",
    deploy: "",
    tech: ["PWA", "Typescript", "React", "Vite", "Zustand"],
    about: "",
    status: "",
    type: "",
    functions: [
      {
        function: "Registro diário",
        subtitle: "registro das atividades realizadas durante o dia",
      },
      {
        function: "Persistência local",
        subtitle: "armazenamento dos registros no dispositivo do usuário",
      },
      {
        function: "Funcionamento offline",
        subtitle: "acesso à aplicação mesmo sem conexão com a internet",
      },
      {
        function: "Instalação como aplicativo",
        subtitle: "disponibilização da aplicação como Progressive Web App",
      },
      {
        function: "Estado global",
        subtitle: "gerenciamento dos dados da aplicação com Zustand",
      },
    ],
    concepts: [
      "Progressive Web App",
      "Service Worker",
      "Web App Manifest",
      "funcionamento offline",
      "persistência de dados",
      "localStorage",
      "gerenciamento de estado",
      "Zustand",
      "componentização",
      "design responsivo",
    ],
    challenges:
      "O projeto exigiu compreender conceitos específicos de PWAs, principalmente o funcionamento offline, a configuração do Service Worker e do Manifest, além da organização da aplicação para funcionar como uma experiência próxima à de um aplicativo.",
    experience:
      "O projeto permitiu compreender na prática como transformar uma aplicação React em uma PWA, trabalhando com persistência local, funcionamento offline, Service Worker e gerenciamento de estado.",
  },

  {
    id: 5,
    name: "Tudo Dev Blog",
    img: tudoDevBlog,
    imgM: tudoDevBlogMobile,
    resume: "Tudo sobre o mundo dev",
    resume2:
      "Um blog técnico construído com Next.js para explorar recursos modernos de renderização e roteamento.",
    description:
      "Blog desenvolvido com Next.js para exibição de artigos técnicos, utilizando rotas dinâmicas, Server Components e geração estática de páginas. Demonstrar na prática conceitos modernos como data fetching no servidor, SSG/ISR e organização em camadas simulando consumo de API.",
    url: "https://github.com/filipesilveira-dev/frontendGithub/tree/main/tudo-dev-blog-nextjs",
    deploy: "https://frontend-github-iota.vercel.app/",
    tech: ["Next.js", "Typescript", "CSS Modules"],
    about: "",
    status: "",
    type: "",
    functions: [
      {
        function: "Listagem de artigos",
        subtitle: "exibição dos conteúdos disponíveis no blog",
      },
      {
        function: "Resumo de artigos",
        subtitle: "apresentação das principais informações de cada publicação",
      },
      {
        function: "Página individual",
        subtitle:
          "visualização completa de um artigo por meio de rota dinâmica",
      },
      {
        function: "Rotas dinâmicas",
        subtitle:
          "geração de páginas utilizando identificadores e slugs dos artigos",
      },
      {
        function: "Renderização no servidor",
        subtitle: "uso de Server Components para obtenção e exibição dos dados",
      },
      {
        function: "Geração estática",
        subtitle:
          "pré-renderização de páginas para melhorar desempenho e entrega do conteúdo",
      },
      {
        function: "Metadados dinâmicos",
        subtitle: "geração de informações de SEO específicas para cada artigo",
      },
      {
        function: "Dados simulados",
        subtitle: "organização de dados locais simulando o consumo de uma API",
      },
    ],
    concepts: [
      "Next.js",
      "App Router",
      "Server Components",
      "rotas dinâmicas",
      "data fetching",
      "SSG",
      "ISR",
      "geração de metadados",
      "SEO",
      "slugs",
      "organização em camadas",
    ],
    challenges:
      "O principal desafio foi compreender o modelo de desenvolvimento do Next.js e diferenciar responsabilidades entre componentes executados no servidor e no cliente, além de trabalhar com rotas dinâmicas e diferentes estratégias de renderização.",
    experience:
      "O projeto proporcionou uma introdução prática ao ecossistema Next.js, especialmente ao App Router, Server Components, rotas dinâmicas, geração estática e estratégias de obtenção de dados no servidor.",
  },
];

export const projects = projectsWithoutSlug.map((project) => ({
  ...project,
  slug: slugify(project.name, { lower: true, strict: true, locale: "pt" }),
}));
