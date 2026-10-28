# O Desbloqueio Intestinal de 24 Horas — Design

Landing page (sales page) de um único scroll para o ebook "O Desbloqueio Intestinal de 24 Horas".
Plataforma: **web apenas**. Checkout externo (Kiwify). Idioma: pt-BR.

Direção visual: **editorial clínico premium, dark-first**. Referência de sensação: relatório médico
de alto padrão cruzado com marca de wellness sofisticada — fundo verde-quase-preto, tipografia serif
editorial grande, acentos terracota e latão, muito espaço negativo e fotografia com luz de janela.
Nada de "infoproduto grito": zero amarelo, zero contador falso, zero seta piscando.

## Brand & Colors

Tokens CSS em `packages/web/src/web/styles.css` (`:root`), consumidos via Tailwind 4 `@theme`.

| Token | Hex | Uso |
|-------|-----|-----|
| `--ink` | #0A0F0D | Fundo principal (verde-preto profundo) |
| `--ink-2` | #101815 | Seções alternadas / cards |
| `--ink-3` | #16201C | Superfícies elevadas, bordas internas |
| `--bone` | #F4F0E6 | Texto principal sobre escuro, fundos claros de seção |
| `--bone-dim` | #C9C4B6 | Texto secundário sobre escuro |
| `--clay` | #C9603F | Acento primário — CTA, eyebrow, destaque de palavra |
| `--clay-soft` | #E08B6A | Hover de CTA, ícones |
| `--brass` | #C2A25C | Acento secundário — números, selos, filetes |
| `--sage` | #7E8F7C | Detalhes calmos, ícones de checklist |
| `--alert` | #D14343 | Somente na seção de sinais de alerta médico |
| `--line` | rgba(244,240,230,.12) | Hairlines sobre escuro |

Seções claras (prova social, conteúdo) usam `--bone` como fundo com texto `--ink`, invertendo os
tokens — o contraste entre blocos escuros e um bloco claro é o principal ritmo da página.

## Typography

- **Display**: `Fraunces` (serif variável, `opsz` alto, italic para ênfase) — H1, H2, números de preço.
- **Body/UI**: `Manrope` — parágrafos, labels, botões, FAQ.
- Eyebrows: Manrope 600, `text-[11px]`, `tracking-[0.22em]`, uppercase, cor `--clay`.
- H1: `clamp(2.6rem, 7vw, 5.4rem)`, `leading-[0.95]`, `tracking-[-0.02em]`.
- H2: `clamp(2rem, 4.4vw, 3.4rem)`, mesma métrica.
- Corpo: 17–19px, `leading-[1.75]`, largura máxima 62ch.
- Ênfase: uma palavra-chave por headline em *italic* + cor `--clay`.

## Layout & Motion

- Container 1200px, gutter 24px mobile / 40px desktop. Grid assimétrico 7/5 no hero e nas seções de foto.
- Espaçamento vertical de seção: `py-24 md:py-36`.
- Cantos: `rounded-none` para blocos editoriais, `rounded-2xl` apenas em cards de oferta e foto.
- Filetes de 1px (`--line`) separando blocos, com eyebrow ancorado no topo esquerdo.
- Motion: um único sistema de reveal on-scroll (opacity + translateY 16px, stagger 60ms) via
  IntersectionObserver + CSS. Nada de parallax, nada de bounce.
- CTA sticky no rodapé em mobile e barra de topo que aparece após 600px de scroll no desktop.

## Seções (ordem)

1. **Top bar** — marca + selo "conteúdo educativo" + CTA compacto (aparece no scroll).
2. **Hero** — headline "sequência", subcopy, CTA, 3 micro-provas (8 ações / 24h / 7 dias), foto premium.
3. **Problema** — foto espelho + bolhas de pensamento, "o problema não é falta de tentativa".
4. **Mural de comentários** — bloco claro, comentários estilo Instagram (identificação com a dor).
5. **Mecanismo** — por que dica solta falha: 3 colunas (ordem, horário, limite).
6. **A sequência** — timeline das 8 ações com horário, acordeão abrível.
7. **Entrega** — o que está incluído: ebook, kit de acompanhamento, plano 7 dias, escala, alertas.
8. **Mockup** — imagem do produto em bloco claro.
9. **Para quem é / não é** — duas colunas contrastadas.
10. **Oferta** — card central com R$ 67, itens inclusos, CTA, direito de arrependimento (art. 49 CDC).
11. **Segurança clínica** — sinais de alerta, quando procurar médico (usa `--alert`).
12. **FAQ** — acordeão.
13. **Decisão + CTA final** — duas opções, fechamento.
14. **Footer** — disclaimers, e-mail de suporte, copyright.

## Regras de conteúdo (compliance)

- Nunca prometer resultado, cura, prazo de alívio ou "funciona para todos".
- Nunca prometer garantia de reembolso própria — citar apenas o direito legal de arrependimento de
  7 dias (art. 49 do CDC) e remeter as condições da oferta ao checkout da Kiwify.
- Depoimentos de resultado só entram com prova real; o mural de comentários fala da **dor**, não do resultado.
- Seção de sinais de alerta médico é obrigatória e não pode ser removida por estética.

## Arquitetura

Página estática — nenhuma rota de API, nenhuma tabela de banco. Um arquivo de página
(`src/web/pages/index.tsx`) compondo componentes de seção em `src/web/components/sections/`.
Link do checkout centralizado em `src/web/lib/offer.ts`.

## Revisão de conversão — outubro 2026

Fluxo: Hero concreto → situações de identificação (sem perfis/curtidas fictícios) → mecanismo de organização → 8 ações → demonstração real ampliável (página 26 original) → 3 entregáveis → público → oferta → segurança → FAQ → fechamento com próximos passos → footer.
Galeria de mockups com páginas e corpos gerados não compõe a página ativa. Não existe amostra original do checklist disponível: não representar checklist inventado como real.
“24 horas” descreve o roteiro, não prazo de resultado. Nenhuma promessa de emagrecimento. Sem contadores, escassez artificial ou valores inflados de bônus.
