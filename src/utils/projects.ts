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

import portfolioV1 from "../../public/prints/portfolioV1.png";

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
      "O Balance Me surge da interseção entre duas áreas minhas de interesse: a tecnologia e a Psicologia. Tendo por base meu background de atuação como psicólogo no mais diversos campos, venho dedicando minha atenção a identificar problemas, questões ou pontos de melhoria na atuação de profisionais da área que a tecnologia pode auxiliar na resolução. Esta aplicação surge como uma ferramenta para ser utilizada pelo usuário do serviço de psicológia para gerar um estímulo visual e organizado de como tem equilibrado suas atividades.",
    status: "MVP publicado | em andamento",
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
      "Componentização",
      "Gerenciamento de estado",
      "Estado global",
      "Persistência de dados",
      "LocalStorage",
      "Formulários",
      "Tipagem com TypeScript",
      "Design responsivo",
      "Mobile-first",
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
    about: "Abrindo um novo momento da minha carreira, o Dice Roller surge como o primeiro projeto concebido, elaborado e implementado de maneira autoral. Sua origem vem de uma busca por desenvolver ferramentas que auxiliassem na resolução de problemas reais e cotidianos. Seguindo uma dica de revisitar antigos projetos de cursos, me deparei com o 'Jogo do Bruxo'. Ele consiste em uma aplicação simples, desenvolvida com HTML, CSS e JavaScript Vanilla, de um jogo de adivinhação. O usuário tem 10 palpites para acertar um número entre 1 e 100, gerado de maneira aleatória, e à medida em que seus palpites vão se esgotando ou à medida em que acerte ou erre, diferentes elementos são exibidos em tela. \n \n Diante disso, busquei imaginar onde uma aplicação como essa, ou as soluções que ela oferece poderiam ser aplicadas para a resolução de algum problema real. Até que cheguei aos jogos de tabuleiro. Apesar de não ser um grande jogador de RPG (Role-Playing Game), jogos de tabuleiro em geral fizeram grande parte da minha infância e adolescência, como Detetive, Scotland Yard, Banco Imobiliário (Monopoly) e etc, e grande parte deles envolviam o uso de dados. Eventualmente, alguns desses dados se perdiam, sendo necessário buscar outros de outros jogos. E se fosse possível ter quantos dados fossem necessários na palma da mão sem precisar ir atrás pelos cantos da casa? Com o Dice Roller é possível fazer exatamente isso. \n \nNem a aplicação nem o relato sobre sua criação têm por objetivo gerar uma revolução no mundo dos jogos, muito menos no mundo tecnológico, mas sim de demonstrar como se dá, nas pequenas coisas, a identificação de um problema e a elaboração de uma solução eficaz para o mesmo. Acredito que é nesse exercício diário que se constrói o potencial para mudanças maiores e realmente impactantes ocorrerem",
    status: "MVP publicado",
    type: "Projeto Pessoal",
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
      "Componentização",
      "Componentes reutilizáveis",
      "Gerenciamento de estado global",
      "Props",
      "Eventos",
      "Renderização condicional",
      "Animações",
      "Testes automatizados",
      "CI/CD",
      "Deploy",
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
    about: "O projeto tem sua origem em um exercício do curso de 'Desenvolvedor Front-end' da EBAC. Nele estava sendo solicitado a criação de uma aplicação que utilizasse a arquitetura de Micro Frontends. Sendo assim, tanto o conceito (nome e paletas de cores) quanto layout (organização dos componentes em tela) e funcionalidades (a única exigida pela atividade era 'adicionar ao carrinho') foram escolhidos e implementados por mim. Até então, vinha estudando muito SPA (Single Page Aplication) e ter contato com essa forma de construir uma aplicação web ampliou significativamente meu reportório, principalmente se pensarmos em aplicações robustas, grandes times e grandes empresas.",
    status: "Projeto em repositório remoto sem publicação em site até o momento",
    type: "Projeto autoral originado de curso realizado",
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
      "Arquitetura distribuída",
      "Aplicação Host",
      "Módulos remotos (remotes)",
      "Comunicação entre aplicações",
      "Webpack 5",
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
    about: "Trata-se de um projeto originado do curso de 'Desenvolvedor Front-End' da EBAC que consistia na demonstração da nova tecnologia estudada: Progressive Web Apps (PWAs). Consiste em um 'to-do-list' em forma de diário de bordo que permite ao usuário usufruir dos três principais pilares de um PWA: capacidade de executar tarefas que apenas aplicativos nativos poderiam realizar, confiabilidade de utilizar a aplicação independente da qualidade da conexão e instabilidade da aplicação diretamente do navegador, gerando uma aplicação mais visualmente parecida com um aplicativo nativo. Conhecer esse tipo de tecnologia na época ampliou o escopo de 'como as aplicações web podem resolver problemas cotidianos?'. Ou seja, daquele momento em diante estava apto a construir algo que pudesse ser utilizado apesar de conexões com a internet (uma vez já baixado). Isso preveniria o usuário 'ficar à própria sorte' quando sem pacote de dados ou wifi.",
    status: "Projeto em repositório remoto sem publicação em site até o momento",
    type: "Projeto originado de curso realizado",
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
      "Funcionamento offline",
      "Persistência de dados",
      "LocalStorage",
      "Gerenciamento de estado",
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
    about: "O TudoDev Blog marca a consolidação dos meus estudos em Next.js. A atividade original solicitava a criação de um blog e que a organização de suas rotas seriam feitas por meio do App Router. Ela me ajudou muito a consolidar alguns temas como 'Server components', 'Rotas dinâmicas' e 'Data fetching', uma vez que, neste último caso, a aplicação simula chamadas de API pensando em aplicações que utilizam bancos de dados ou consumam dados de um servidor de API. Elaborei então um nome e um tema para o blog, gerando pequenos artigos para demonstração. Vale ressaltar que tudo o que foi aprendido neste momento foi utilizado inclusive na elaboração desta página de portfólio, que também utiliza Next.js e seu App Router. Acredito que o aprendizado obtido precisa ser replicado, colocado em prática, caso contrário, não serve de nada.",
    status: "MVP publicado",
    type: "Projeto originado de curso realizado",
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
      "Rotas dinâmicas",
      "Data fetching",
      "SSG (Static Site Generation)",
      "ISR (Incremental Static Regeneration)",
      "Geração de metadados",
      "SEO",
      "Slugs",
      "Organização em camadas",
    ],
    challenges:
      "O principal desafio foi compreender o modelo de desenvolvimento do Next.js e diferenciar responsabilidades entre componentes executados no servidor e no cliente, além de trabalhar com rotas dinâmicas e diferentes estratégias de renderização.",
    experience:
      "O projeto proporcionou uma introdução prática ao ecossistema Next.js, especialmente ao App Router, Server Components, rotas dinâmicas, geração estática e estratégias de obtenção de dados no servidor.",
  },
   {
    id: 6,
    name: "Portfolio (primeira versão)",
    img: portfolioV1,
    imgM: "",
    resume: "Primeira versão do portfolio elaborada",
    resume2:
      "Primeira versão do portfolio feita com base em um desafio do Bootcamp Santander 2025 - Front-End da DIO",
    description:
      "Projeto de Portfolio originado de um desafio realizado no Bootcamp Santender 2025. O desafio em questão teve como objetivo a aprendizagem. Consistiu na construção guiada de uma página web do zero baseada em um protótipo do figma, contendo informações profissionais, como currículo, projetos e tecnologias com as quais possui familiaridade. \n \nAqui ele foi refatorado em React e Typescript, utiliznado a biblioteca Motion para as transições do 'accordion'. Foram aproveitados o layout e a paleta de cores do projeto original. As funcionalidades foram adaptadas e a parte de projetos foi contruída do zero.",
    url: "https://github.com/filipesilveira-dev/desafiosBootcampSantander2025/tree/main/projetoPortfolio",
    deploy: "https://filipesilveira-dev.github.io/portfolio/",
    tech: ["React", "Typescript", "CSS Modules", "Motion"],
    about: "Durante meu processo de formação, me deparei com diversos projetos. Todos de alguma maneira contribuíram para eu chegar onde estou hoje. Um desses projetos consistia na elaboração guiada de uma página web com informações profissionais. Na época, ele foi elaborado utilizando HTML, CSS e JavaScript Vanilla. O projeto foi finalizado, porém algumas informações estavam faltando, pois se tratava do meu primeiro Bootcamp em Front-end. Tinha apenas o conhecimento básico. Então alguns campos acabaram ficando em branco e a parte de projetos vazia. \n \n Chegando em 2026, mais especificamente em agosto, finalizo a primeira parte do curso 'Desenvolvedor Front-End' da EBAC e seu trabalho final consistia justamente na elaboração de um portfólio. Porém, uma das exigências era o uso de React em sua elaboração. Apesar da obrigatoriedade, por conta dos conhecimentos acumulados ao longo do meu tempo de estudo, React seria a biblioteca Javascript utilizada nesse projeto independente, pois, além da maior familiaridade, dentre outras possibilidades que a ferramenta oferece, o uso de useState() facilitaria algumas re-renderizações em tela. Sendo assim, refatorei toda a aplicação para React, o que gerou alguns aprendizados durante, como o uso da biblioteca Motion para as transições de abertura/fechamento dos 'accordions'. \n \nOptei por apresentar essa primeira versão pois ela demonstra um pouco sobre como enxergo o processo de trabalho. Ao finalizar e entregar o trabalho de conclusão de curso, não me senti representado naquele projeto, me gerando um incômodo que sabia muito bem como resolvê-lo: criar um portfólio que de fato me veja nele e que represente o que sou capaz de fazer e o tanto de empenho que costumo aplicar em meus projetos. Ou seja, a primeira versão serviu como degrau para esta página atual que, apesar de ainda ter melhorias a serem feitas e funções a serem implementadas, me representa muito mais profissionalmente.",
    status: "MVP publicado",
    type: "Projeto originado de curso realizado",
functions: [
  {
    function: "Apresentação profissional",
    subtitle:
      "organização de informações sobre formação, trajetória e conhecimentos em desenvolvimento front-end",
  },
  {
    function: "Apresentação de tecnologias",
    subtitle:
      "exibição das principais tecnologias e ferramentas estudadas durante a formação",
  },
  {
    function: "Apresentação de projetos",
    subtitle:
      "listagem e organização dos projetos desenvolvidos ao longo do processo de formação",
  },
  {
    function: "Accordion de informações",
    subtitle:
      "exibição e ocultação de conteúdos por meio de seções expansíveis",
  },
  {
    function: "Navegação por seções",
    subtitle:
      "organização do conteúdo em diferentes áreas para facilitar a navegação pela página",
  },
  {
    function: "Transições de interface",
    subtitle:
      "animação da abertura e fechamento dos accordions utilizando a biblioteca Motion",
  },
  {
    function: "Layout responsivo",
    subtitle:
      "adaptação da apresentação das informações para diferentes tamanhos de tela",
  },
],

concepts: [
  "React",
  "TypeScript",
  "Componentização",
  "Props",
  "UseState",
  "Renderização condicional",
  "CSS Modules",
  "Motion",
  "Design responsivo",
  "Refatoração de aplicação",
],

challenges:
  "O principal desafio foi transformar uma aplicação originalmente desenvolvida com HTML, CSS e JavaScript Vanilla em uma aplicação React com TypeScript, preservando a identidade visual do projeto original e, ao mesmo tempo, adaptando sua estrutura para um modelo baseado em componentes. Também foi necessário estruturar do zero a área de projetos e implementar as interações dos accordions, utilizando o useState para controlar sua abertura e fechamento e a biblioteca Motion para criar as transições.",

experience:
  "O projeto representou uma etapa importante na evolução dos conhecimentos em desenvolvimento front-end. A refatoração permitiu aplicar React e TypeScript em um projeto que já possuía uma estrutura visual definida, tornando mais concreto o entendimento sobre componentização, gerenciamento de estado e organização da interface. O uso do Motion também proporcionou um primeiro contato prático com animações declarativas. Além dos aspectos técnicos, o projeto evidenciou a importância de revisar e evoluir uma aplicação quando seu resultado já não representa adequadamente o nível de conhecimento alcançado.",
  },
];

export const projects = projectsWithoutSlug.map((project) => ({
  ...project,
  slug: slugify(project.name, { lower: true, strict: true, locale: "pt" }),
}));
