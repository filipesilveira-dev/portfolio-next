# Prompt para Geração das Guias Restantes ("Artigos" e "Contato")

Copie e cole o prompt estruturado abaixo em uma nova conversa com uma IA geradora de imagens ou assistente de design (como Gemini, Midjourney, ChatGPT Plus/DALL-E 3 ou Claude).

---

```markdown
Você é um Designer de UI/UX sênior especialista em Design Systems para Front-end.
Preciso que você elabore as telas/guias visuais (mockups de alta fidelidade) para as 2 páginas restantes do meu portfólio profissional de Desenvolvedor Front-end ("Artigos" e "Contato"), tanto na versão DESKTOP quanto na versão MOBILE.

## Identidade Visual e Diretrizes de Design (Baseadas nas guias existentes)
- **Tema**: Portfólio moderno, minimalista, profissional e altamente tecnológico.
- **Paleta de Cores**:
  - Primária (Destaques e Botões): Roxo/Violeta `#5437a3` (com variantes `#eee9fe` para fundos de badges).
  - Secundária / Accent: Verde-azulado / Ciano `#00bfa5` / `#09B8A9` (usado no logotipo "FS" e detalhes).
  - Fundos: Branco puro `#ffffff` e cinza muito claro `#fbfbfe` para cards e contraste.
  - Textos: Grafite escuro `#111827` para títulos e `#4b5563` para parágrafos.
  - Cards: Bordas suaves arredondadas (12px a 16px), borda sutil `rgba(84, 55, 163, 0.12)` e sombra leve `0 2px 8px rgba(0, 0, 0, 0.06)`.
- **Elementos Fixos Presentes em Todas as Telas**:
  - **Header Desktop**: Logotipo "FS" em ciano na extrema esquerda; à direita, links de navegação com "SOBRE", "PROJETOS", "HABILIDADES", "ARTIGOS", "CONTATO" (a página atual fica destacada com sublinhado roxo `#5437a3`) e ícone de alternância de tema (lua/modo escuro).
  - **Header Mobile**: Logotipo "FS" em ciano na esquerda e ícone de menu hambúrguer `☰` na direita.
  - **Banner CTA Inferior**: Caixa em tom violeta suave com ícone de avião de papel, texto "Tem um projeto em mente? Vamos transformar sua ideia em realidade." e botão "ENTRE EM CONTATO".
  - **Footer**: Ícones sociais (GitHub, LinkedIn, E-mail), copyright "© 2025 Filipe Silveira" e indicação "Feito com ♥ e Next.js".

---

## TELA 1: Página "Artigos" (Blog Técnico)

### Requisito Fundamental:
Na página "Artigos", deve haver uma **lista estruturada de artigos como links clicáveis**, que abrirão uma nova página dedicada contendo apenas o artigo completo.

### 1.1 Versão Desktop (1440px wide - Formato 1:1 ou 4:3):
- **Cabeçalho da Página**: Título "Artigos & Publicações" com subtítulo elegante: "Compartilhando aprendizados práticos sobre arquitetura front-end, Next.js, performance e boas práticas."
- **Barra de Busca e Filtros**: Campo de pesquisa com ícone de lupa ("Buscar artigo...") e chips/pills de categorias ("Todos" ativo em roxo, "Next.js", "Micro Front-ends", "TypeScript", "Performance", "CSS Modules").
- **Artigo em Destaque (Card Hero Superior)**: Card largo horizontal com imagem de capa ilustrativa sobre código/arquitetura, badge "Destaque", data e tempo de leitura ("12 de Março, 2025 • 8 min de leitura"), título em negrito "Arquitetura de Micro Front-ends com Module Federation e React 19", resumo introdutório de 2 linhas e botão de ação "Ler Artigo Completo ↗".
- **Lista de Artigos (Links Clicáveis)**: Lista vertical limpa com 4 a 5 cards de artigos. Cada item deve conter:
  1. Metadados no topo: Tag de categoria em badge roxo claro (ex: "Next.js", "TypeScript", "Zustand"), data de publicação e tempo de leitura estimado.
  2. Título do Artigo: Formatado como link clicável em destaque com ícone de seta externa (ex: "Otimizando Performance no Next.js com Server Components e Streaming ↗", "Gerenciamento de Estado Descomplicado com Zustand ↗", "PWA na Prática: Construindo Aplicações Offline-First ↗").
  3. Resumo/Prévia: Parágrafo conciso de 2 linhas despertando interesse técnico.
  4. Ação no rodapé do card: Link clicável explícito "Ler publicação completa ↗" (indicando navegação para a página do artigo).
- **Banner CTA** e **Footer** oficiais.

### 1.2 Versão Mobile (375px wide - Formato 9:16 vertical):
- Header mobile com "FS" e menu hambúrguer.
- Título "Artigos" com subtítulo conciso.
- Barra de busca compacta e barra horizontal de categorias deslizável por toque.
- Lista vertical de cards de artigos adaptada para visualização em 1 coluna, com tipografia legível, títulos em destaque com setas indicativas de link clicável e botão/link "Ler artigo ↗".
- Banner CTA compacto e Footer.

---

## TELA 2: Página "Contato"

### Requisito Fundamental:
Na página "Contato", deve haver um **formulário de contato moderno, funcional e convidativo**, acompanhado dos canais diretos de comunicação.

### 2.1 Versão Desktop (1440px wide - Formato 1:1 ou 4:3):
- **Cabeçalho da Página**: Título "Vamos Conversar?" ou "Entre em Contato" com subtítulo: "Tem um projeto em mente, uma proposta de trabalho ou quer apenas trocar ideias sobre tecnologia? Preencha o formulário abaixo ou utilize os canais diretos."
- **Layout Dividido em 2 Colunas (Grid 40% / 60%)**:
  - **Coluna da Esquerda (Informações e Acessos Rápidos)**:
    - Badge de status ativo com indicador verde: "● Disponível para novas oportunidades e freelance".
    - Cards de contato direto com ícones limpos:
      - E-mail direto com botão de copiar.
      - LinkedIn com link para o perfil.
      - GitHub com link para os repositórios.
      - Localização / Formato: "Brasil • Trabalho Remoto".
    - Texto de incentivo caloroso para conexões profissionais.
  - **Coluna da Direita (Formulário de Contato Moderno)**:
    - Card branco com bordas arredondadas e sombra suave contendo:
      - Campo 1: "Seu Nome" (Input com rótulo claro e placeholder "Ex: Maria Silva").
      - Campo 2: "Seu E-mail" (Input para endereço de e-mail "Ex: maria@email.com").
      - Campo 3: "Assunto" (Campo de seleção ou texto: "Proposta de Projeto", "Oportunidade de Trabalho", "Dúvida/Outro").
      - Campo 4: "Sua Mensagem" (Textarea espaçoso com placeholder "Descreva os detalhes da sua ideia ou oportunidade...").
      - Botão de Envio: Botão roxo `#5437a3` em destaque com texto "Enviar Mensagem" e ícone de envio/avião de papel.
- **Banner CTA** e **Footer** oficiais.

### 2.2 Versão Mobile (375px wide - Formato 9:16 vertical):
- Header mobile com "FS" e menu hambúrguer.
- Título "Contato" com subtítulo direto.
- Badge de disponibilidade para novos projetos.
- Botões de ação rápida no topo (chips com ícones para E-mail, LinkedIn e WhatsApp).
- Formulário de contato em coluna única, com inputs touch-friendly de altura adequada (48px), rótulos visíveis e botão "Enviar Mensagem" em largura total (100%).
- Footer mobile.

---

## Instruções de Saída:
- Gere os layouts em alta fidelidade visual (estilo Figma/Dribbble profissional).
- Apenas renderize a interface da aplicação, sem molduras desnecessárias de notebooks ou smartphones.
- Mantenha rigorosamente a coerência estética entre as telas Desktop e Mobile.
```
