# Build Report — Vows by Aariz (Demo Wedding Photographer Website)

- **Built:** 2026-11-15 (overnight demo task)
- **Stack:** Astro 5 + Tailwind CSS 3 + GSAP 3 (ScrollTrigger) + Lucide icons
- **Build status:** ✅ `npm run build` passes (1 page, ~9s)
- **Output:** `dist/` — 3.1 MB total (fully static, zero server code)

## Sections built

1. **Header** — fixed minimal top bar: logo + 5 anchor links (desktop) + "Book a Call" CTA. Transparent over hero, frosted ivory + shadow on scroll.
2. **Hero** — full-height asymmetric layout: oversized split serif headline ("Your shaadi, told beautifully."), subline, dual CTAs, 5.0 rating row, arch-framed hero photo with gold offset ring, floating "250+ weddings" badge and "Now booking 2027" pill, scroll cue.
3. **Marquee strip** — dark espresso band, infinite CSS loop of event words (Mehndi ✦ Baraat ✦ Nikkah ✦ Rukhsati ✦ Walima ✦ Qawwali Night ✦ Dholki ✦ Engagement), pauses on hover.
4. **Stats** — 250+ weddings, 8 years, 40+ cities, 5.0 rating; animated counters.
5. **About** — "01 — The photographer": arch photo with pull-quote card, story copy, 3 differentiators, signature.
6. **Image band** — full-width parallax photo with the brand promise quote overlay.
7. **Portfolio** — "02 — Portfolio": 14-photo editorial grid (varied spans), filter chips (All / Ceremony / Candid / Details), hover zoom + caption reveal, full keyboard-operable lightbox (arrows, Esc, focus trap).
8. **Services** — 4 numbered cards: Photography, Cinematic Films, Pre-wedding Shoots, Albums & Prints; hover lift + gold accent.
9. **Packages** — 3 pricing cards (Essential 85k / Signature 150k featured + raised / Royal 250k), feature checklists, per-card CTAs, custom-quote line.
10. **Process** — 4-step timeline: Book a call → Plan your story → The big day → Gallery & film delivery.
11. **Testimonials** — 3 fictional review cards with 5-star ratings and initials avatars.
12. **FAQ** — 6-question accordion (booking advance, travel, delivery time, raw files, payment, drone), first item open by default.
13. **Booking / Contact** — dark panel over string-lights photo: phone, email, location, response-time rows, WhatsApp CTA button, and a booking form (names, contact, date, city, package, message) with mailto fallback — no backend.
14. **Footer** — nav, photographer credits with Pexels link, visible demo-content notice, copyright.

## Animations used (GSAP + advanced CSS, no Three.js)

| Animation | Technique |
| --- | --- |
| Hero split-text reveal | JS word-splitting + `gsap.from` yPercent stagger (plain text if JS fails) |
| Clip-path image reveals | GSAP `clipPath: inset()` on hero + about photos, ScrollTrigger |
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
| Grain overlay | Fixed CSS SVG-noise layer, 3.5% opacity |

**Reduced motion:** `prefers-reduced-motion` disables all GSAP motion and CSS
animation; content is visible by default because every initial hidden state is
set via JS only (graceful degradation if JS fails entirely).

## Images — formats, sizes, count

All photos are real wedding photos from **Pexels** (free license), downloaded
and converted locally with PIL. **No hotlinks** — every image is served from
`public/images/`. Two downloaded photos (IDs 33986839, 34481895) were excluded
per brief (real couples' names visible in backdrops).

| File | Source | Dimensions | Size |
| --- | --- | --- | --- |
| `hero.webp` | Pexels 32999859 | 1920×2569 | 276 KB |
| `band.webp` | Pexels 34767573 | 1920×1280 | 52 KB |
| `about.webp` | Pexels 20708576 | 1200×1800 | 232 KB |
| `cta-bg.webp` | Pexels 966861 | 1920×1280 | 64 KB |
| `gallery-01.webp` | Pexels 2909501 | 1200×1500 | 68 KB |
| `gallery-02.webp` | Pexels 32044821 | 1200×1800 | 92 KB |
| `gallery-03.webp` | Pexels 39217041 | 1200×1800 | 204 KB |
| `gallery-04.webp` | Pexels 32188202 | 1200×2134 | 92 KB |
| `gallery-05.webp` | Pexels 2908569 | 1200×1500 | 32 KB |
| `gallery-06.webp` | Pexels 20736204 | 1200×800 | 144 KB |
| `gallery-07.webp` | Pexels 33180322 | 1200×1500 | 136 KB |
| `gallery-08.webp` | Pexels 15964966 | 1200×801 | 108 KB |
| `gallery-09.webp` | Pexels 2788488 | 1200×1480 | 220 KB |
| `gallery-10.webp` | Pexels 5038747 | 1200×1798 | 240 KB |
| `gallery-11.webp` | Pexels 34079358 | 1200×800 | 100 KB |
| `gallery-12.webp` | Pexels 36523501 | 1200×1800 | 108 KB |
| `gallery-13.webp` | Pexels 34603119 | 1200×1800 | 232 KB |
| `gallery-14.webp` | Pexels 29137533 | 1200×1799 | 308 KB |
| `og-image.jpg` | Hero center-crop | 1200×630 | 108 KB |
| **Total** | **18 photos + OG** | | **~2.8 MB** |

- Formats: WebP (q78–80, LANCZOS resize); OG image is JPEG for maximum
  social-crawler compatibility.
- Photographer credits in the footer (one line + Pexels link): IN STORY,
  Danik Prihodko, Stephen Leonardi, Sabir Khan Shourov, Agung Pandit Wiguna,
  Habib Hosseini, kabita Darlami, Rina Islam, Buse Çolak, Pk Photography,
  Arto Suraj, Samet Tecimen, The Visionary Vows, Fliqa India, khezez,
  the Amritdev, Leeloo The First, Magda Ehlers.
- 4 spare downloaded photos were not used: 10624425, 18354044, 33915851,
  33979987 (kept in `~/workspace/wedding-site/photos/raw/`).

## Speed measures

- Zero-JS-by-default Astro: one bundled client script (GSAP + site logic),
  122 KB / **48 KB gzip**; CSS 28 KB.
- Hero image: `fetchpriority="high"`, eager; all other images lazy + async
  decoding; explicit `width`/`height` on every image (no layout shift).
- Fonts: Google Fonts with `preconnect` + `display=swap`, only the weights used.
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
  focus-visible styles, keyboard-operable lightbox + FAQ + filters,
  sufficient contrast (espresso on ivory, gold used for accents/large text).

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
- All 18 photos are demo stock (Pexels) — replace with the client's real work;
  footer demo notice + credits line to be removed/updated.
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
- `npm run build` passes; `dist/` contains 1 HTML page, 19 image files,
  favicon, robots.txt, sitemap.xml.
- Grep of built HTML: **zero external image URLs**; only external refs are
  Google Fonts, schema.org, self canonical/OG URLs, the `wa.me` CTA and the
  Pexels credit link.
- HTML validated well-formed (tag balance check); client JS syntax-checked.
- Lucide icons render as inline SVG (100 `<svg>` nodes in built HTML).
