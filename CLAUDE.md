# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev     # next dev (http://localhost:3000)
npm run build   # next build
npm run start   # serve the production build
npm run lint    # eslint (flat config: eslint-config-next core-web-vitals + typescript)
npx tsc --noEmit  # type-check; there is no dedicated script
```

There is no test runner configured. The `@/*` import alias maps to `src/*`.

Next.js 16 with React 19, so per AGENTS.md read the matching guide under `node_modules/next/dist/docs/` before writing Next-specific code. That directory only exists after `npm install`.

## What this is

Marketing site for Monteria Legal Services, a Guatemalan law firm (offices in Ciudad de Guatemala and Antigua). All user-facing copy is in Spanish (`lang="es"`, locale `es_GT`), and so are route names.

## Architecture

App Router under `src/app`, all statically-oriented pages with no database or auth.

- `layout.tsx` wraps every page in `<Navbar />`, `<main>`, `<Footer />` and loads the fonts. It also holds all site-wide SEO metadata (title template `%s – Monteria Legal Services`, Open Graph).
- Routes: `/` (`page.tsx`, composed from `components/sections/*`: Hero, PracticeAreas, Team, WhyUs, CTA), `/servicios`, `/equipo`, `/contacto`, and `POST /api/consulta`.
- `components/layout/` holds Navbar and Footer. `components/sections/` holds the homepage sections.
- `src/data/services.ts` (`practiceAreas`) and `src/data/team.ts` (`team`) are the content source for both the homepage sections and the `/servicios` and `/equipo` pages. Edit content there, not in the components. `services.ts` still contains placeholder entries ("Área de Práctica", "Servicio específico 1").
- `/contacto` is a client component using react-hook-form + zod. Its submit handler currently only fakes a delay and `console.log`s; it does not call `/api/consulta`, and `/api/consulta` itself only logs the JSON body and returns `{ success: true }`. Neither sends email or stores anything yet.

### Styling conventions (not obvious from the config)

- Tailwind v4: there is no `tailwind.config`. Theme tokens live in the `@theme` block in `globals.css` (`--color-primary` #15294a navy, `--color-gold` #b08600).
- Components mostly do **not** use those tokens. They hardcode the hex values in arbitrary classes (`text-[#b08600]`, `text-[#15294a]`) and set headings' font inline via `style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}`. Follow that pattern when editing existing components.
- Fonts (DM Sans, DM Serif Display) come from `next/font/google` in `layout.tsx` and are exposed as `--font-dm-sans` / `--font-dm-serif`. The `--font-serif` / `--font-sans` tokens in `@theme` reference the font *names*, not those variables, so `font-serif` utilities do not use the next/font-loaded files. Use the `var(--font-dm-*)` variables.
- Animations use `framer-motion`, icons use `lucide-react`.

### Other config and assets

- `next.config.ts` sets `images.unoptimized: true` and pins `turbopack.root` to the project directory.
- `public/` serves the logos (`/logo-monteria.png` etc.). `src/data/team.ts` points at `/team/*.jpg`, which is not in `public/` yet.
- `Otros/` holds design reference material (mockup PNGs, source logo, intro video). It is not served or imported by the app.
- `firma/firma.html` is a standalone HTML email signature for a team member. It is unrelated to the Next.js app.
