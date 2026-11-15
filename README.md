# Vows by Aariz — Wedding Photographer Website (DEMO)

A premium single-page website for a fictional wedding photographer brand,
built with **Astro 5 + Tailwind CSS 3 + GSAP**. All business content is
**fictional placeholder** — replace it with the real client's details before
publishing for a client. See `BUILD-REPORT.md` for the full placeholder
inventory.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Deploy (Vercel)

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project → Import** the repository.
3. Framework preset: **Astro** (auto-detected). Leave build command
   (`npm run build`) and output directory (`dist/`) at their defaults.
4. Deploy. Every push to the main branch redeploys automatically.

No environment variables, no database, no server code — the site is 100%
static and also works on Netlify or any static host (upload `dist/`).

## Replace placeholders for a real client

| What | Where |
| --- | --- |
| Brand name, photographer name, tagline | `src/pages/index.astro`, `src/layouts/BaseLayout.astro` |
| Phone / email / WhatsApp number | `src/pages/index.astro` (contact section, footer), `src/components/ContactForm.astro` (mailto target in `src/scripts/site.js`) |
| Packages & prices | `src/pages/index.astro` (`packages` array) |
| Testimonials | `src/components/Testimonials.astro` |
| Stats (weddings / years / cities / rating) | `src/pages/index.astro` (stats section) + JSON-LD in `src/layouts/BaseLayout.astro` |
| Photos | Replace files in `public/images/` (keep names, or update the arrays in `src/pages/index.astro` and `src/components/Gallery.astro`) |
| Site URL / canonical / OG | `astro.config.mjs` (`site`), `src/layouts/BaseLayout.astro`, `public/robots.txt`, `public/sitemap.xml` |
| FAQ answers | `src/components/Faq.astro` |
| Footer credits + demo notice | `src/pages/index.astro` (footer) — remove the demo notice for a real client |

## Project structure

```text
public/
  images/            18 WebP photos + og-image.jpg (all local, no hotlinks)
  favicon.svg        Custom aperture/V monogram
  robots.txt         sitemap.xml
src/
  layouts/BaseLayout.astro   SEO head, fonts, JSON-LD
  pages/index.astro          All sections, content arrays
  components/                Gallery (+lightbox), Faq, Testimonials, ContactForm
  scripts/site.js            GSAP motion, filters, lightbox, FAQ, form
  styles/global.css          Tokens, marquee, grain, accordion, reduced-motion
```

## Credits

Demo photography by the artists named in the site footer, via
[Pexels](https://www.pexels.com/) (free license). Fonts: Fraunces + Manrope
(Google Fonts, OFL). Icons: Lucide.
