# Build Report — Vows by Aariz (Demo Wedding Photographer Website)

- **Built:** 2026-11-15 (overnight demo task); **redesigned** 2026-11-15 (clean-white premium redesign + performance rebuild, see Changelog)
- **Stack:** Astro 5 + Tailwind CSS 3 + GSAP 3 (ScrollTrigger) + Lucide icons
- **Build status:** ✅ `npm run build` passes (1 page, ~12s)
- **Output:** `dist/` — 2.3 MB total (fully static, zero server code)

## Sections built

1. **Header** — fixed minimal top bar: logo + 5 anchor links (desktop) + "Book a Call" CTA + hamburger button (below `lg`) opening a full-screen mobile menu overlay (5 links + CTA; closes on link click, Escape, close button, or resize to desktop). Transparent over hero, frosted white + shadow on scroll.
2. **Hero** — full-height asymmetric layout: oversized split serif headline ("Your shaadi, told beautifully."), subline, dual CTAs, 5.0 rating row, arch-framed hero photo with bronze offset ring, floating "250+ weddings" badge and "Now booking 2027" pill, scroll cue.
3. **Marquee strip** — dark ink band, infinite CSS loop of event words (Mehndi ✦ Baraat ✦ Nikkah ✦ Rukhsati ✦ Walima ✦ Qawwali Night ✦ Dholki ✦ Engagement), pauses on hover.
4. **Stats** — 250+ weddings, 8 years, 40+ cities, 5.0 rating; animated counters.
5. **About** — "01 — The photographer": arch photo with pull-quote card, story copy, 3 differentiators, signature.
6. **Image band** — full-width parallax photo with the brand promise quote overlay.
7. **Portfolio** — "02 — Portfolio": 15-photo uniform 3/4 grid, filter chips (All / Ceremony / Candid / Details), hover zoom + caption reveal, full keyboard-operable lightbox (arrows, Esc, focus trap).
8. **Services** — 4 numbered cards: Photography, Cinematic Films, Pre-wedding Shoots, Albums & Prints; hover lift + bronze accent.
9. **Packages** — 3 pricing cards (Essential 85k / Signature 150k featured + raised / Royal 250k), feature checklists, per-card CTAs, custom-quote line.
10. **Process** — 4-step timeline: Book a call → Plan your story → The big day → Gallery & film delivery.
11. **Testimonials** — 3 fictional review cards with 5-star ratings and initials avatars.
12. **FAQ** — 6-question accordion (booking advance, travel, delivery time, raw files, payment, drone), first item open by default.
13. **Booking / Contact** — dark panel over string-lights photo: phone, email, location, response-time rows, WhatsApp CTA button, and a booking form (names, contact, date, city, package, message) with mailto fallback — no backend.
14. **Footer** — nav, generic "Demo photography via Pexels" credit line, visible demo-content notice, copyright.

## Animations used (GSAP + advanced CSS, no Three.js)

| Animation | Technique |
| --- | --- |
| Hero split-text reveal | JS word-splitting + `gsap.from` yPercent stagger (plain text if JS fails) |
| Clip-path image reveal | GSAP `clipPath: inset()` on the about photo only (hero excluded so the LCP element paints immediately), ScrollTrigger |
| Scroll entrances | `reveal-up/left/right` with ScrollTrigger, alternating directions |
| Parallax | Hero image + wide band, scrubbed, subtle range, scale-guarded edges |
| Animated counters | GSAP tween with ScrollTrigger, decimals for 5.0 |
| Marquee loop | Pure CSS keyframes, pause on hover |
| Button shine sweep | CSS `::after` gradient sweep on hover |
| Magnetic buttons | GSAP mousemove translate, fine pointers only, elastic release |
| Gallery hover zoom + caption | CSS transform/opacity transitions |
| FAQ accordion | CSS grid-rows animation + aria-expanded |
| Lightbox | Fade/scale GSAP entrance, keyboard + focus management |
| Header state | Scroll-driven frosted background |
| Mobile menu | Fixed overlay panel, instant open/close, no document reflow |

**Reduced motion:** `prefers-reduced-motion` disables all GSAP motion and CSS
animation; content is visible by default because every initial hidden state is
set via JS only (graceful degradation if JS fails entirely).

## Design — palette & type (redesign, 2026-11-15)

Clean-white premium look modelled on restrained monochrome portfolio sites
(reference: vsalex-a.webflow.io). Background pure white `#FFFFFF`, soft
sections `#FAFAF8`, ink `#1A1A1A`, muted text `#666666`, hairline borders
`#E7E7E2`. A restrained bronze `#96784A` is used ONLY for micro-labels, thin
rules, small icons and italic accent words — no large gold areas. Buttons are
near-black with white text; cards are white with hairline borders and very
soft shadows. Generous vertical spacing (`py-24`/`py-32` section scale). The
black marquee band, dark quote band and dark booking panel are kept for
contrast. The film-grain overlay was removed.

- **Display font:** EB Garamond (400/500 + italics), self-hosted variable
  font, latin subset — `public/fonts/eb-garamond.woff2` (44 KB, wght 400–800)
  + `eb-garamond-italic.woff2` (48 KB, wght 400–800).
- **Sans font:** Inter (400–700), self-hosted variable font, latin subset —
  `public/fonts/inter.woff2` (48 KB, wght 100–900).
- Total font payload: **140 KB** for all weights/styles. `font-display: swap`
  with `unicode-range` latin; the two critical files (EB Garamond + Inter)
  are preloaded in `<head>`. **No Google Fonts requests** — zero external
  font CSS or files.

## Images — formats, sizes, count

All photos are real wedding photos from **Pexels** (free license), downloaded
and converted locally with PIL. **No hotlinks** — every image is served from
`public/images/`. Two downloaded photos (IDs 33986839, 34481895) were excluded
per brief (real couples' names visible in backdrops). Every gallery photo is
baked to a native vertical **3/4 center crop (900×1200)** — no horizontal
source is ever stretched or letterboxed by CSS. All 15 crops were verified in
a montage (no decapitated subjects, no visible names).

| File | Source | Dimensions | Size |
| --- | --- | --- | --- |
| `hero.webp` | Pexels 32999859 | 1200×1600 | 116 KB |
| `hero-md.webp` | Pexels 32999859 | 960×1280 | 84 KB |
| `hero-sm.webp` | Pexels 32999859 | 640×853 | 45 KB |
| `band.webp` | Pexels 34767573 | 1600×1067 | 30 KB |
| `about.webp` | Pexels 20708576 | 900×1350 | 121 KB |
| `cta-bg.webp` | Pexels 966861 | 1600×1067 | 41 KB |
| `gallery-01.webp` | Pexels 2909501 — The quiet embrace, Nikkah · Lahore, candid | 900×1200 | 36 KB |
| `gallery-02.webp` | Pexels 32044821 — Golden hour vows, Baraat · Islamabad, ceremony | 900×1200 | 42 KB |
| `gallery-03.webp` | Pexels 39217041 — Pure joy, Walima · Karachi, ceremony | 900×1200 | 104 KB |
| `gallery-04.webp` | Pexels 32188202 — Hand in hand (B&W), Nikkah · Lahore, details | 900×1200 | 44 KB |
| `gallery-05.webp` | Pexels 2908569 — Silhouette at dusk, Rukhsati · Murree, candid | 900×1200 | 21 KB |
| `gallery-06.webp` | Pexels 20736204 — Henna stories, Mehndi · Lahore, details | 900×1200 | 109 KB |
| `gallery-07.webp` | Pexels 33180322 — The ritual, Mehndi · Faisalabad, details | 900×1200 | 84 KB |
| `gallery-08.webp` | Pexels 5401225 — Mehndi joy (NEW), Mehndi · Lahore, candid | 900×1200 | 100 KB |
| `gallery-09.webp` | Pexels 2788488 — The setting, Walima · Islamabad, details | 900×1200 | 124 KB |
| `gallery-10.webp` | Pexels 5038747 — Table for two hundred, Walima · Lahore, details | 900×1200 | 122 KB |
| `gallery-11.webp` | Pexels 34079358 — A thousand lights, Qawwali Night · Lahore, details | 900×1200 | 93 KB |
| `gallery-12.webp` | Pexels 36523501 — The portrait, Baraat · Lahore, ceremony | 900×1200 | 53 KB |
| `gallery-13.webp` | Pexels 34603119 — Laughter, kept, Nikkah · Karachi, ceremony | 900×1200 | 120 KB |
| `gallery-14.webp` | Pexels 29137533 — Walking together, Baraat · Hunza, ceremony | 900×1200 | 128 KB |
| `gallery-15.webp` | Pexels 17154866 — The bride, in red (NEW), Baraat · Lahore, ceremony | 900×1200 | 130 KB |
| `og-image.jpg` | Hero center-crop | 1200×630 | 74 KB |
| **Total** | **19 photos + 2 hero variants + OG** | | **~1.9 MB** |

- Formats: WebP (q70–72, LANCZOS resize, center 3/4 crop baked in); OG image
  is JPEG for maximum social-crawler compatibility.
- Footer credit is one generic line: "Demo photography via Pexels" (+ link).
  No photographer names are listed.
- Pipeline script: `~/workspace/wedding-site/photos/process_images_v2.py`;
  montage QA: `~/workspace/wedding-site/photos/montage-v2.jpg`.
- Spare downloaded photos not used: 10624425, 15964966, 18354044, 32044754,
  33915851, 33979987 (kept in `~/workspace/wedding-site/photos/raw/`).

## Speed measures

- Zero-JS-by-default Astro: one bundled client script (GSAP + site logic),
  120 KB / **48 KB gzip**; CSS 28 KB.
- Hero (LCP): responsive `srcset` (640w/960w/1200w) + `sizes`, image
  `preload` with matching `imagesrcset`/`imagesizes`, `fetchpriority="high"`,
  eager loading, explicit 1200×1600 dims, and NO animation on the hero image
  wrapper (clip-path reveal removed) so it paints immediately. Mobile
  (390px) serves the 45 KB `hero-sm.webp`; desktop DPR 1 serves 640w too.
- Fonts: self-hosted variable woff2 (140 KB total), 2 files preloaded, no
  render-blocking third-party CSS. This removed the 750 ms Google Fonts
  render-blocking chain and the font-swap CLS on the hero CTA.
- All below-fold images: lazy + async decoding + explicit dims (no layout
  shift). Filter chips have no color/border transitions (instant state
  change, no non-composited animations).
- Zero external requests on the page itself (verified in headless QA): the
  only third-party URLs are the `wa.me` CTA link and the Pexels credit link,
  neither fetched on load.
- No jQuery, no Three.js, no image CDN, no tracking scripts.
- Static output: 1 HTML page + hashed assets; serves from any static host.

## SEO included

- Title, meta description, canonical, robots meta, author.
- Open Graph + Twitter large-card tags with 1200×630 OG image.
- JSON-LD `LocalBusiness` schema (name, phone, email, price range, area
  served, founder, aggregate rating, hours).
- Semantic HTML5 (`header/main/section/footer`, one `h1`, heading hierarchy),
  descriptive alt text on every content image (decorative images use empty alt
  + `aria-hidden`).
- `robots.txt` + `sitemap.xml` in `public/`.
- Accessibility: skip link, aria labels on icon buttons/controls,
  focus-visible styles, keyboard-operable lightbox + FAQ + filters + mobile
  menu (aria-expanded/controls, Escape to close),
  sufficient contrast (ink on white, bronze used for accents/large text).

## Placeholder inventory (every fictional item to replace)

- Brand: "Vows by Aariz"; photographer persona "Aariz Ahmed".
- Phone: **+92 300 0000000** (visibly placeholder) — `tel:` link, WhatsApp
  `wa.me/923000000000` link, JSON-LD.
- Email: **hello@vowsbyaariz.com** (placeholder) — `mailto:` links, form
  fallback target in `src/scripts/site.js`, JSON-LD.
- Stats: 250+ weddings, 8 years, 40+ cities, 5.0 rating, "87 reviews".
- Packages: Essential PKR 85,000 / Signature PKR 150,000 / Royal PKR 250,000
  and all feature lists.
- Testimonials: Ayesha & Bilal (Lahore), Mahnoor & Hamza (Karachi),
  Zara & Daniyal (Islamabad) — all fictional quotes.
- About story, process copy, FAQ answers, service descriptions.
- All 19 photos are demo stock (Pexels) — replace with the client's real work;
  footer demo notice + Pexels credit line to be removed/updated.
- Site URL: `https://vows-by-aariz.vercel.app/` (canonical, OG, sitemap,
  robots, `astro.config.mjs`).
- "Now booking 2027" badge; "’19—’26" portfolio year range.

## Deploy steps (Vercel)

1. Push this project to GitHub (repo: `vows-by-aariz`).
2. Vercel → Add New → Project → Import repository.
3. Framework: **Astro** (auto-detected). Build command `npm run build`,
   output directory `dist/` — defaults, no changes needed.
4. Deploy. No environment variables required.

## Verification performed

- `npm install` clean (351 packages; only deprecation warnings).
- `npm run build` passes; `dist/` contains 1 HTML page, 22 image files,
  3 font files, favicon, robots.txt, sitemap.xml (2.3 MB total).
- Grep of built HTML: **zero external image URLs and zero Google Fonts
  refs**; only external refs are schema.org, self canonical/OG URLs, the
  `wa.me` CTA and the Pexels credit link. Hero image preload + 2 font
  preloads present in `<head>`.
- Headless Chromium QA (Playwright, local `dist/` server — VM egress proxy
  does not work for Chromium): desktop 1440 + mobile 390 — all 15 gallery
  tiles filled, filter Details→All sequence clean, lightbox full-viewport
  at opacity 1, no horizontal overflow at 360/390/768/1024/1440/1920,
  mobile menu opens/closes (Escape, close button, link click) with no
  layout shift, EB Garamond + Inter confirmed applied, zero external
  requests. Scripts: `~/workspace/wedding-site/qa-mobile/qa.js` + `qa2.js`.
- HTML validated well-formed (tag balance check); client JS syntax-checked.
- Lucide icons render as inline SVG (100 `<svg>` nodes in built HTML).

## Changelog

- **2026-11-15 — Clean-white redesign + performance rebuild.** PageSpeed
  mobile was 83 (LCP 3.9s, render-blocking Google Fonts, CLS 0.125).
  Changes: (1) all 15 gallery photos re-cropped to baked 3/4 verticals
  (900×1200) incl. 2 new photos (5401225, 17154866); hero rebuilt as
  responsive 640/960/1200w srcset with preload, clip-path reveal removed
  from the hero; (2) fonts self-hosted (EB Garamond + Inter variable woff2,
  latin subset, 140 KB total), Google Fonts links removed; (3) palette
  rebuilt to clean white `#FFFFFF` / `#FAFAF8` / ink `#1A1A1A` / bronze
  `#96784A` micro-accents, film-grain overlay removed, generous spacing;
  (4) accessible mobile menu added; (5) filter-chip color transitions
  removed; correct dims on all images. No copy, prices, testimonials, FAQ
  answers, form behavior, SEO tags or URLs changed. dist/ shrank
  3.1 MB → 2.3 MB. Fixes verified in local headless QA; PageSpeed re-check
  happens after deploy.
