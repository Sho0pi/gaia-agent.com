# Gaia marketing site

This repo is the marketing/landing site for **Gaia** - an open-source AI agent
that forges specialist sub-agents ("souls"), remembers you, and runs on
Telegram, WhatsApp, or your terminal.
It is a static [Astro](https://astro.build) site deployed to GitHub Pages at
[gaia-agent.com](https://gaia-agent.com).

This file is the context a remote agent needs to work on the site without
breaking its look, voice, or accuracy.
The product itself lives in a separate repo (`github.com/Sho0pi/gaia`); this repo
is **only the website**.

## Stack

- **Astro 5** (static output) + **Tailwind 3** for layout/spacing utilities.
- **Bun** is the package manager and runner (not npm/pnpm). The deploy action
  uses `bun@latest`.
- `astro-icon` with `@iconify-json/lucide` (UI glyphs) and
  `@iconify-json/simple-icons` (brand logos).
- `astro-seo` for meta tags, `astro-og-canvas` for build-time OG cards,
  `@astrojs/sitemap` for the sitemap.

## Commands

```sh
bun install        # install deps
bun run dev         # local dev server
bun run build       # static build into dist/ (run this before opening a PR)
bun run preview     # serve the built site
```

Always run `bun run build` before pushing - it is the same build the deploy
action runs, and it catches broken `<Icon>` names, OG generation failures, and
Astro template errors.

## Deploy

`.github/workflows/deploy.yml` builds with Bun and deploys to GitHub Pages on
every push to `master`. `public/CNAME` points the Pages site at
`gaia-agent.com`. Do not push directly to `master`; open a PR.

## Structure

```
src/
  layouts/Layout.astro     # the ONLY layout: global CSS, design tokens, nav, footer, scripts
  pages/
    index.astro            # homepage
    why-gaia.astro
    how-it-works.astro
    demo.astro
    integrations.astro     # what Gaia plugs into
    security.astro         # security & privacy model
    404.astro
    og/[...route].ts       # build-time 1200x630 OG card per page
public/                    # static assets (images, CNAME, install.sh, gaia-icon.png)
```

There are **no content collections, no `src/data`, no markdown content, and no
shared components**. Every page is a single self-contained `.astro` file. Page
data (lists of cards, examples) is defined as a plain array in the page's
frontmatter and rendered with `.map()` - match that pattern, do not introduce a
CMS layer for one consumer.

## Design system

All design tokens are **CSS variables** defined in `Layout.astro`'s global
`<style>`, themed via `[data-theme="dark"]` (dark is the default, persisted in
`localStorage` under `gaia-theme`). Tailwind's config is intentionally empty -
colors come from the CSS vars, not Tailwind.

Key tokens: `--bg`, `--bg-deep`, `--surface`, `--rule` (borders), `--ink`
(text), `--ink-soft` (muted), `--moss` (primary accent), `--sea`, `--kelp`,
`--glow`, `--gold`. Reference them as `var(--moss)` or
`border-[color:var(--rule)]`.

Fonts (loaded in `<head>`): **Fraunces** (serif display, `.display`), **Cinzel**
(eyebrows/brand, `.eyebrow`/`.brand`), **Inter** (body), **JetBrains Mono**
(code/labels, `.mono`).

Reusable global classes (all in `Layout.astro`): `.display`, `.eyebrow`,
`.muted`, `.mono`, `.brand`, `.btn`/`.btn-primary`/`.btn-ghost`, `.hr-script`
(section divider), `.reveal` (auto scroll-in). The homepage `.card` (hover lift +
moss border) is the standard tile - copy its rule into a page's local `<style>`
when you need cards.

Conventions:
- **Sharp corners everywhere** (`border-radius:0`). The only rounded thing is
  the floating glass nav header.
- Section shell: `<section class="relative z-10 max-w-5xl mx-auto px-6 py-24">`,
  with `<hr class="hr-script max-w-5xl mx-auto" />` between sections.
- Sections are introduced by an `.eyebrow` kicker, often with a Roman numeral
  (`I ·`, `II ·` ...).
- The Greek/soul theme is load-bearing - "souls", `Γαῖα`, mother-of-all
  language. Keep that voice.
- Zero-gap bordered card grids: `grid md:grid-cols-3` with per-card
  `border-r-0`/`border-b-0` to collapse double borders.

## Adding a page

See the `new-page` skill in `.claude/skills/`. In short:
1. Create `src/pages/<slug>.astro` using `<Layout active="<slug>">`.
2. Add the nav link in **both** the desktop and mobile `<nav>` in
   `Layout.astro` (desktop uses the `active === '<slug>'` ternary for the moss
   highlight).
3. For a dedicated OG card: add an entry to the `pages` map in
   `src/pages/og/[...route].ts` **and** add the slug to the `ogSlug` whitelist in
   `Layout.astro` (otherwise it falls back to the index card).
4. Internal links **must** end with a trailing slash (`/integrations/`) -
   `astro.config.mjs` sets `trailingSlash: 'always'`.

## Accuracy rule (important)

The marketing copy on the homepage historically **overclaimed** Gaia's real
capabilities (it has listed Discord, Mistral, OpenRouter, "200+ LLMs" that are
not shipping). When writing anything factual about what Gaia integrates with or
supports, **verify against the docs**, not the landing copy:

- `https://docs.gaia-agent.com/llms-full.txt` - full machine-readable docs
- `https://docs.gaia-agent.com/llms.txt` - index

Ground truth as of this writing: channels are Terminal/Telegram/WhatsApp; model
providers are Gemini (default) and OpenAI/ChatGPT; runtime is Google ADK; memory
is mem0 over a local Chroma store; the browser default is Camoufox with
playwright-mcp opt-in. Mark anything not yet shipping as "coming soon" rather
than stating it as fact.

## House style

- Never use the em dash. Use a plain dash `-`.
- Do **not** add an agent name as a commit co-author.
- Do not edit auto-generated files or `CHANGELOG.md` by hand.
- In long Markdown, put each sentence on its own line.
- Be picky about pixel-level polish; if something looks off, fix it even if it
  is not what you were asked to change.
</content>
