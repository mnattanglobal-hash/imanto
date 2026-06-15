# Imanto

**Crescimento para quem faz alto padrão.**
Parceira de crescimento para o ecossistema de construção e reforma.

Preview (até o DNS apontar): https://mnattanglobal-hash.github.io/imanto/
Domínio final: **https://imanto.com.br**

Site estático em **português do Brasil**, sem build e sem dependências. Tema claro com seções navy de impacto, gradiente azul/roxo/magenta, Space Grotesk + Inter, motivo de campo magnético. Deploy via GitHub Pages.

## Estrutura
- `index.html`: home institucional (oferta-mãe + ecossistema de 9 verticais).
- `servicos/`: o Motor de Receita Imanto (Núcleo + Captação, Conversão, Expansão).
- `planejados/`, `hvac/`, `vidracaria/`: landings por vertical (fase 1). As demais (`solar`, `marmoraria`, `arquitetura`, `construtora`, `automacao`, `piscinas`) estão especificadas em `../site/estrutura-site-imanto.md`.
- `assets/site.css`, `assets/site.js`: sistema visual e reveal-on-scroll compartilhados.
- `assets/`, `logo-kit/`, `brandbook/`: favicons, ilustrações, logos e o brandbook.
- `sitemap.xml`, `robots.txt`, `.nojekyll`.

> Fonte da verdade verbal: `brand-book.md`. Estilo: português do Brasil, sem travessão como muleta, sem "não é X, é Y", sem etimologia "irmanar".

## Logo (drop-in)
Gere o símbolo com o prompt do projeto e coloque em `assets/`:
`imanto-emblem-dark.png`, `imanto-emblem-light.png`, `imanto-emblem-mono.png`, `imanto-favicon.png` (referenciado no `<head>`). Sem mudar código — o site detecta. Até lá, o ímã em SVG do hero faz o papel.

## Apontar o domínio imanto.com.br (no registro.br)
Adicione no painel de DNS do `imanto.com.br`:

**Apex (`imanto.com.br`) — 4 registros A (GitHub Pages):**
```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```
**(opcional, IPv6 — AAAA):** `2606:50c0:8000::153`, `…8001::153`, `…8002::153`, `…8003::153`
**www:** `CNAME   www   mnattanglobal-hash.github.io`

Depois do DNS propagar, ativar o domínio no repo (Settings → Pages → Custom domain = `imanto.com.br`, Enforce HTTPS) — ou me avisar que eu adiciono o arquivo `CNAME` e ligo. **imanto.online:** apontar como redirect 301 pro `imanto.com.br` no registrador.

## Ativação da marca (checklist)
- [ ] Apontar DNS (acima) e ativar custom domain + HTTPS.
- [ ] Reservar handles **@imanto** (Instagram, LinkedIn, X, GitHub).
- [ ] E-mail `contato@imanto.com.br` (a CTA aponta pra lá).
- [ ] **Trademark:** registrar no INPI **classe 35 (+42)**, versão **mista (nome + logo)** pra reforçar o fosso. *Pré-triagem indicativa, não jurídica — advogado antes de gastar.*
