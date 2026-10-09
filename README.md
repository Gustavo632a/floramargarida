# Flora Margarida

Projeto local em React, Vite, JavaScript e lucide-react.

## Executar

```sh
npm install
npm run dev
```

Build: `npm run build`. Visualizar build: `npm run preview`.

## Conteúdo a completar

- Logo original aplicada em `public/images/logo-flora-margarida.png`, no cabeçalho e no rodapé, preservando cores, transparência e proporções.
- Colocar fotos reais em `public/images/local-01.webp` até `local-04.webp`. Sem as fotos, a galeria exibe placeholders identificados, inclusive no lightbox.
- Endereço, mapa e rota configurados em `src/data/business.js`. Horários: segunda a sexta 07:30–17:30, sábado 07:30–17:00, domingo fechado.
- Definir canonical, og:url e og:image em `index.html` após conhecer o domínio público; O Schema.org já inclui o endereço e os horários confirmados.

A ilustração de margarida é decorativa e não reproduz a logo. Animações respeitam prefers-reduced-motion. Menu móvel e lightbox usam controles acessíveis; o lightbox permite fechar por Escape e devolve o foco.

Não foram inventados preços, estoque ou fotos da loja. Fontes do Google usam fallback local. O perfil do Instagram não estava acessível durante a implementação.
