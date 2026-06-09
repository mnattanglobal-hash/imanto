# Imanto

**Pare de perseguir. Vire o ímã.** / *Stop chasing. Become the magnet.*
Agência de marketing AI-first para B2B — *AI-first marketing agency for B2B*.

Preview (até o DNS apontar): https://mnattanglobal-hash.github.io/imanto/
Domínio final: **https://imanto.com.br**

Landing single-file (`index.html`, sem build, sem dependências): bilíngue **PT/EN** (PT padrão), tema **claro editorial** com acento cobre, motivo de campo magnético. Deploy via GitHub Pages.

## Estrutura
- `index.html` — site completo (HTML + CSS + JS inline; textos PT/EN no objeto `DICT`).
- `assets/` — logo (drop-in; o site usa um motivo magnético em SVG/CSS enquanto não houver arquivos).
- `sitemap.xml`, `robots.txt`, `.nojekyll`.

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
