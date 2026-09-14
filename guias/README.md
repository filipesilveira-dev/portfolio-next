# Central de Guias de Design (Mockups UI)

Este diretório contém todas as guias visuais de layout para o portfólio profissional de **Filipe Silveira (Desenvolvedor Front-end)**, divididas por página e formato de tela (Desktop e Mobile).

---

## 📁 Estrutura de Pastas e Arquivos

```
guias/
├── PROMPT_GUIAS_RESTANTES.md   <-- Prompt completo pronto para copiar e gerar "Artigos" e "Contato"
├── README.md                   <-- Esta documentação
│
├── inicio/                     <-- Página Inicial (Guias originais de referência)
│   ├── guide-desktop.png       <-- Layout Desktop da Home
│   ├── guide-mobile.png        <-- Layout Mobile da Home
│   └── guide-original.png      <-- Visão comparativa lado a lado
│
├── projetos/                   <-- Página de Todos os Projetos
│   ├── guia-projetos-desktop.jpg
│   └── guia-projetos-mobile.jpg
│
├── sobre/                      <-- Página Sobre Mim / Trajetória
│   ├── guia-sobre-desktop.jpg
│   └── guia-sobre-mobile.jpg
│
├── habilidades/                <-- Página de Habilidades & Stack Técnica
│   ├── guia-habilidades-desktop.jpg
│   └── guia-habilidades-mobile.jpg
│
├── artigos/                    <-- Página de Artigos & Publicações
│   └── (Aguardando geração com o prompt de PROMPT_GUIAS_RESTANTES.md)
│
└── contato/                    <-- Página de Contato & Formulário
    └── (Aguardando geração com o prompt de PROMPT_GUIAS_RESTANTES.md)
```

---

## 🎨 Sistema de Design e Identidade Visual

- **Cor Primária**: `#5437a3` (Violeta vibrante para botões principais, links ativos e destaques).
- **Cor de Fundo das Tags/Badges**: `#eee9fe` (Lilás claro).
- **Cor de Acento (Logotipo "FS" e detalhes)**: `#00bfa5` / `#09B8A9` (Ciano/Verde-azulado).
- **Tipografia**: Sans-serif moderna e geométrica com pesos bem definidos (Regular 400, Medium 500, Bold 700).
- **Cards**: Cantos arredondados (12px a 16px), sombras suaves e borda sutil `rgba(84, 55, 163, 0.12)`.
- **Componentes Padronizados**:
  - Header fixo com logotipo `FS` e navegação (`SOBRE`, `PROJETOS`, `HABILIDADES`, `ARTIGOS`, `CONTATO`).
  - Banner CTA de incentivo ao contato antes do rodapé.
  - Footer institucional com redes sociais e direitos reservados.

---

## 🚀 Como gerar as guias que faltam ("Artigos" e "Contato")

Abra o arquivo [`PROMPT_GUIAS_RESTANTES.md`](./PROMPT_GUIAS_RESTANTES.md), copie o bloco de instruções e envie em uma nova sessão de IA com suporte a geração de imagens/design (ex: Gemini, ChatGPT/DALL-E 3, Midjourney ou Claude). Assim que geradas, salve os arquivos em:
- `guias/artigos/guia-artigos-desktop.png`
- `guias/artigos/guia-artigos-mobile.png`
- `guias/contato/guia-contato-desktop.png`
- `guias/contato/guia-contato-mobile.png`
