# Gaia Site — TODO

## 🔴 Before going live (blockers)

- [ ] Replace `https://gaia-agent.com/install.sh` with the real install command for `github.com/Sho0pi/gaia`
- [ ] Enable HTTPS once GitHub Pages certificate finishes provisioning

## 🟡 Content (needs Itay to provide)

- [ ] **Real hero image** — current one is AI-generated placeholder. A real screenshot or demo recording would convert better
- [ ] **Demo GIF/video** — 10–15 second screen recording of Gaia doing something real (delegating a task, WhatsApp conversation, etc.) — single highest-impact addition
- [ ] **Social proof** — 1-3 quotes from early testers/users. Even informal ones ("I showed this to X and they said...") — fake empty space kills trust
- [ ] **Discord server** — if you create one, add to nav and footer
- [ ] **Docs URL** — once you have a README or docs site, wire up the "Docs" nav link (currently `#`)
- [ ] **Real email** — `hello@gaia-agent.com` is a placeholder. Set up the mailbox or replace with a contact form

## 🟠 Nice to have (can build now)

- [ ] **"Built with" / tech stack section** — brief mention of what Gaia is built on (Python? Node? LangChain?)
- [ ] **Changelog page** — `/changelog` showing version history. Shows the project is alive. Even just v0.1 entry

## 🟢 Polish

- [ ] **Mobile hero layout** — hero image stacks below text on mobile, could look better with a tighter crop
- [x] **OG image** — generated 1200×630 per-page via astro-og-canvas (`/og/index.png`, `/og/why-gaia.png`), brand colors + logo. Replaces hero photo
- [ ] **Twitter/X meta tags** — `twitter:site` handle once you have one (card/title/image already wired via astro-seo)
- [x] **sitemap.xml** — `@astrojs/sitemap` → `/sitemap-index.xml`, linked in `<head>` + robots
- [x] **robots.txt** — added, points at sitemap

## ✅ Done

- [x] Hero section with Gaia/Γαῖα glitch animation
- [x] Verb cycle (forge → delegate → teach → build)
- [x] Real terminal install block with copy button
- [x] Soul smith worked example diagram
- [x] 5 feature cards (tools, memory, self-learning, skills+MCP, connectors)
- [x] "How it works" 3-step visual
- [x] FAQ accordion (5 questions)
- [x] Stats bar (∞ souls, 200+ LLMs, MIT, 0 walled gardens)
- [x] Comparison table (Gaia vs OpenClaw vs Hermes)
- [x] Separate "Why Gaia" page
- [x] Contact → github.com/sho0pi
- [x] Real GitHub links → github.com/sho0pi/gaia
- [x] Favicon (Gaia icon)
- [x] Icon in nav header
- [x] OG meta tags
- [x] Mobile hamburger nav
- [x] 404 page ("Soul not found")
- [x] Default dark mode + localStorage persistence
- [x] Gaia/Γαῖα 20% larger than surrounding text
- [x] "it" instead of "she" throughout
- [x] Domain placeholders set to gaia-agent.com
- [x] Deployed at love.altshuler.xyz/gaia/v6/
- [x] Make GitHub repo public → `github.com/Sho0pi/gaia`
- [x] Deploy site to GitHub Pages from `master` via GitHub Actions
- [x] Point `gaia-agent.com` DNS to GitHub Pages
- [x] Add `public/CNAME` for `gaia-agent.com`
- [x] Scroll animations — fade/slide sections in as user scrolls
- [x] Star count badge — live GitHub star counter in the hero
- [x] Smooth scroll — clicking nav links smooth-scrolls to sections
- [x] Back to top button — appears after scrolling down
