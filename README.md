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
| Brand name, photographer name, tagline | `src/components/Header.astro`, `src/components/Footer.astro`, `src/components/Hero.astro`, `src/layouts/BaseLayout.astro` |
| Phone / email / WhatsApp number | `src/components/Footer.astro`, `src/pages/index.astro` (contact section), `src/scripts/site.js` (mailto target), `src/layouts/BaseLayout.astro` (JSON-LD) |
| Services, prices, event couples, mega-menu links | `src/data/site.ts` (single source of truth) |
| Testimonials (Reviews carousel) | `src/components/Testimonials.astro` |
| About story + team names/roles | `src/components/AboutSection.astro` |
| Award badges (carousel seals) | `src/components/IntroAwards.astro` (original dummy SVG seals) |
| Photos / hero crops | Replace files in `public/images/` (keep names, or update `src/data/site.ts` and `src/components/Hero.astro`) |
| Showreel video + poster | `public/videos/showreel.mp4`, `public/images/showreel-poster.webp`, `src/components/AlbumsSection.astro` |
| Site URL / canonical / OG | `astro.config.mjs` (`site`), `src/layouts/BaseLayout.astro`, `public/robots.txt`, `public/sitemap.xml` |
| Footer credits + demo notice | `src/components/Footer.astro` — remove the demo notice for a real client |
| Palette / fonts | `tailwind.config.mjs`, `src/styles/global.css`, `public/fonts/` |

## Project structure

```text
public/
  images/            19 WebP photos + og-image.jpg (all local, no hotlinks)
  videos/            showreel.mp4 (demo Pexels clip, 720p, 1.9 MB)
  fonts/             EB Garamond + Inter, self-hosted variable woff2
  favicon.svg        Custom aperture monogram (white/rose on near-black)
  robots.txt         sitemap.xml
src/
  data/site.ts                 Services, gallery, events, mega-menus (shared)
  layouts/BaseLayout.astro     SEO head, fonts, hero preload, JSON-LD
  pages/index.astro            Page assembly + contact section
  components/                  Header (+mega-menus, mobile menu), Hero
                               (+promo pill), FeatureCards (3-card row),
                               IntroAwards (intro + seals carousel), Gallery
                               (slider), ServicesShowcase, AboutSection
                               (team), WhyRow, PricesList, EventsGrid,
                               Testimonials (reviews carousel),
                               AlbumsSection, ContactForm, Footer, Lightbox
  scripts/site.js              Header state, menus, sliders, lightbox,
                               GSAP reveals/parallax, form
  styles/global.css            Tokens, @font-face, hover language, sliders,
                               mega-menus, reduced-motion
```

## Credits

Demo photography and showreel footage via
[Pexels](https://www.pexels.com/) (free license). Fonts: EB Garamond + Inter
(self-hosted variable woff2, OFL). Icons: Lucide.
