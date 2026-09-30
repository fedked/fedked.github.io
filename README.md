# Site Profissional — Fernando Kendi Utida

Portfólio minimalista · Profissional de TI e Administração.

## Estrutura

```
site-profissional/
├── index.html          # marcação (só HTML, sem estilo/script inline)
├── css/
│   └── styles.css       # CSS compilado (gerado — NÃO editar à mão)
├── scss/                # fonte dos estilos (edite AQUI)
│   ├── styles.scss      # arquivo principal (reúne os partials)
│   ├── _tokens.scss     # variáveis + cores + temas claro/escuro
│   ├── _base.scss       # reset e base
│   ├── _sidebar.scss    # menu lateral, bandeira, toggle de tema
│   ├── _content.scss    # hero, perfil, skills, projetos, contato
│   └── _responsive.scss # ajustes mobile
├── js/
│   ├── icons.js         # ícones (Simple Icons + Lucide)
│   ├── i18n.js          # textos em português e inglês
│   └── main.js          # skills, projetos, renderização e interações
└── assets/
    └── flag_deaf.webp   # imagem da bandeira surda
```

## Editar os estilos (SCSS)

O CSS é gerado a partir do SCSS. Edite os arquivos em `scss/` e recompile:

```bash
npm install        # só na primeira vez
npm run build:css  # compila uma vez
npm run watch:css  # recompila sozinho a cada alteração
```

## Rodar

É um site estático — basta abrir `index.html` no navegador
(ou servir a pasta com qualquer servidor estático).
