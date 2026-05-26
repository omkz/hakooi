# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (localhost:4321)
npm run build     # production build to dist/
npm run preview   # preview production build locally
```

No test suite is configured. TypeScript checking uses `astro check` (available via `npx astro check`).

## Architecture

Single-page marketing site for **Hakooi** (an Ecommerce Growth Studio). Built with **Astro 6** + **Tailwind CSS v4** (via `@tailwindcss/vite` Vite plugin — no `tailwind.config.*` file; config lives in `astro.config.mjs`).

**Page composition** (`src/pages/index.astro`): one route that composes all section components in order: `Navbar → Hero → Services → Work → Process → Team → TechStack → Footer`.

**Layout** (`src/layouts/Layout.astro`): wraps every page with the `<head>` (SEO tags, Google Fonts — Bebas Neue + Montserrat, AOS animation library from CDN), a full-screen noise texture overlay (`z-[9999]`), and global CSS variables (`--hakooi-blue: #3341FF`, `--deep-black: #0a0a0a`).

**Background animation** (`src/components/NetworkBackground.astro`): canvas-based animated liquid silk effect using `SilkBlob` objects that orbit slowly and react to mouse/touch position. Used only inside the `Hero` section. Uses `ctx.globalCompositeOperation = 'screen'` for the glow blend.

**Hero interactions** (`src/components/Hero.astro`): includes a text scramble effect on the headline, magnetic button physics on CTA buttons, and a mouse parallax effect on the hero content.

**Styling conventions**:
- Font utility classes: `.font-heading` (Bebas Neue), `.font-paragraph` (Montserrat) — defined as global styles in `Layout.astro`, not Tailwind utilities
- Brand blue `#3341FF` used directly as Tailwind arbitrary values (`bg-[#3341FF]`, `text-[#3341FF]`) throughout components
- Dark background `#0a0a0a` (`--deep-black`) is the base; all sections use subtle `bg-white/[0.02]` or `bg-white/[0.03]` to differentiate
- Section animations use AOS (`data-aos="fade-up"`) initialized in `Layout.astro`

**Deployment target**: Cloudflare Workers (evidenced by `dist/server/wrangler.json`).
