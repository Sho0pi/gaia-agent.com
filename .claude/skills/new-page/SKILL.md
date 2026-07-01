---
name: new-page
description: Scaffold a new page on the Gaia marketing site (Astro) that matches the existing visual language - design tokens, nav wiring, OG card, trailing-slash links. Use when asked to add a page, tab, or section route to the gaia-agent.com site.
---

# Add a page to the Gaia site

Use this when adding a new top-level page/tab (e.g. `/pricing/`, `/blog/`) to the
Astro marketing site. The goal is a page indistinguishable in style from
`index.astro`, `integrations.astro`, and `security.astro`.

Read the project `CLAUDE.md` first for the full design system. This skill is the
checklist.

## Steps

1. **Create `src/pages/<slug>.astro`.** Start from this shell:

   ```astro
   ---
   import Layout from '../layouts/Layout.astro';
   import { Icon } from 'astro-icon/components';

   // Page data as a frontmatter array, rendered with .map() below.
   const items = [ /* ... */ ];
   ---
   <Layout
     title="<Title> · Gaia"
     description="<one-sentence description for SEO and the OG card>"
     active="<slug>"
   >
     <main class="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
       <p class="eyebrow">Γαῖα · <kicker></p>
       <h1 class="display mt-6 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight">
         <Headline> <span class="italic" style="color:var(--moss);">accent.</span>
       </h1>
     </main>

     <hr class="hr-script max-w-5xl mx-auto" />

     <section class="relative z-10 max-w-5xl mx-auto px-6 py-24">
       <p class="eyebrow">I · <Section></p>
       <!-- content -->
     </section>
   </Layout>
   ```

   - Use the CSS-var tokens (`var(--moss)`, `var(--ink)`, `border-[color:var(--rule)]`), never hard-coded colors.
   - Sharp corners (`border-radius:0`). Section shell + `.hr-script` dividers between sections.
   - For cards, copy the `.card` rule (hover lift + moss border) into a local `<style is:global>` - see `integrations.astro`.
   - Brand logos: `<Icon name="simple-icons:..." />`. UI glyphs: `<Icon name="lucide:..." />`. Both tint via `color:` (currentColor).

2. **Wire the nav in `src/layouts/Layout.astro`** (two places):
   - Desktop `<nav class="hidden md:flex ...">`: add the active-state ternary
     ```astro
     {active === '<slug>'
       ? <a href="/<slug>/" class="font-semibold" style="color:var(--moss);"><Label></a>
       : <a href="/<slug>/" class="hover:text-[color:var(--ink)]"><Label></a>}
     ```
   - Mobile `<nav id="mobileNav">`: add `<a href="/<slug>/"><Label></a>`.

3. **OG card (optional but standard).** In `src/pages/og/[...route].ts` add a
   `<slug>: { title, description }` entry to the `pages` map, and add `'<slug>'`
   to the `ogSlug` whitelist in `Layout.astro` line ~14. Skip and it falls back
   to the index card.

4. **Trailing slashes.** All internal hrefs end with `/` (config sets
   `trailingSlash: 'always'`). `/blog/`, not `/blog`.

5. **Verify.** Run `bun run build`. It must pass and emit
   `/<slug>/index.html` (+ the OG png if you added one). Then `bun run dev` and
   eyeball both light and dark themes and mobile width.

## Accuracy

If the page states anything factual about Gaia's capabilities, verify against
`https://docs.gaia-agent.com/llms-full.txt` - do not trust the homepage copy,
which has overclaimed. Mark not-yet-shipping things as "coming soon".

## Don'ts

- No em dashes in copy (plain `-`).
- No new shared-component or content-collection layer for a single page.
- No agent name as commit co-author.
</content>
