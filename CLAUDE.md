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

**Deployment target**: Vercel (static output). `vercel.json` sets `Cache-Control: max-age=31536000, immutable` for `/fonts/*`, `/svg/*`, and `/_astro/*`.

**Font strategy**: Critical fonts (Bebas Neue, Montserrat 300/400/700) are stored as stable woff2 files in `public/fonts/` (non-hashed, stable URLs) and declared with `@font-face` + `font-display: swap` in `Layout.astro`. `<link rel="preload">` tags are added directly to `<head>` to break the JS→CSS→font waterfall dependency chain.

**Performance notes**:
- Background canvas (`NetworkBackground.astro`) uses `IntersectionObserver` to pause the `requestAnimationFrame` loop when the hero section is not visible.
- Canvas resolution is downscaled to `0.5x` on mobile (`window.innerWidth < 768`) to reduce GPU fill-rate cost.
- Noise texture overlay uses a tiled base64 PNG (zero CPU) instead of SVG `<feTurbulence>`.
- AOS is bundled locally via npm (`aos` package) — no external CDN requests.
