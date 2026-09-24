# Portfólio — Filipe P. Silveira

Portfólio pessoal desenvolvido para apresentar minha trajetória de transição para o desenvolvimento Front-end, meus projetos, conhecimentos técnicos e experiências de aprendizado.

O projeto também funciona como um espaço para documentar minha evolução como desenvolvedor e reunir projetos desenvolvidos durante minha formação.

## 🚀 Tecnologias

* **Next.js**
* **React**
* **TypeScript**
* **CSS Modules**
* **Resend**
* **React Email**
* **Swiper js**

## ✨ Funcionalidades

* Apresentação profissional
* Seção de habilidades técnicas
* Listagem de projetos
* Páginas individuais para os projetos
* Informações sobre tecnologias utilizadas e aprendizados
* Formulário de contato
* Envio de mensagens por e-mail
* Layout responsivo
* SEO e Open Graph
* Navegação otimizada para dispositivos móveis

## ✨ Funcionalidades futuras

* Seção de artigos
* Links para mais informações de cada projeto principal
* Seção "Mais projetos"

## 📂 Estrutura

A aplicação utiliza o **App Router do Next.js**, organizando as páginas e componentes de forma modular.

```text
src/
├── app/
│   ├── projetos/
│   ├── habilidades/
│   ├── artigos/
│   └── ...
├── components/
├── data/
├── lib/
└── ...
```

A estrutura pode evoluir conforme novas funcionalidades forem incorporadas ao projeto.

## 📌 Projetos

Entre os projetos apresentados no portfólio estão:

* **Dice Roller** — aplicação para lançamento de dados utilizando React e TypeScript.
* **Balance Me** — aplicação para registro e visualização do equilíbrio entre obrigações e momentos de lazer.
* Outros projetos desenvolvidos durante minha formação em desenvolvimento web.

Cada projeto possui uma página própria com informações sobre suas funcionalidades, tecnologias utilizadas e principais aprendizados.

## 📬 Contato

O portfólio possui um formulário de contato integrado ao **Resend**, permitindo o envio de mensagens diretamente pela aplicação.

## 🛠️ Desenvolvimento

Para executar o projeto localmente:

```bash
git clone https://github.com/filipesilveira-dev/portfolio.git
cd portfolio
npm install
npm run dev
```

Depois, acesse:

```text
http://localhost:3000
```

### Variáveis de ambiente

Para utilizar o formulário de contato, configure as variáveis de ambiente necessárias em um arquivo `.env.local`.

```env
RESEND_API_KEY=sua_chave_aqui
```

> A chave da API deve permanecer em uma variável de ambiente e nunca ser adicionada diretamente ao código ou ao repositório.

## 📦 Build

Para gerar uma versão de produção:

```bash
npm run build
```

Para executar a aplicação em modo de produção:

```bash
npm start
```

## 📄 Licença

Este projeto faz parte do meu portfólio pessoal e tem finalidade principalmente demonstrativa e educacional.
