# Build Report — Vows by Aariz (Demo Wedding Photographer Website)

- **Built:** 2026-11-15 (overnight demo task); **rebuilt v3** 2026-11-15
  (reference-structure rebuild — see Changelog)
- **Stack:** Astro 5 + Tailwind CSS 3 + GSAP 3 (ScrollTrigger) + Lucide icons
- **Build status:** ✅ `npm run build` passes (1 page, ~12s)
- **Output:** `dist/` — 4.4 MB total (fully static, zero server code;
  includes the 1.9 MB demo showreel video)

## Sections built (v3)

1. **Header** — fixed, full-width, ~95px desktop / 72px mobile. Transparent
   with `backdrop-blur(5px)` and white text over the hero; after scrolling
   ~95% of viewport height it becomes solid cream with a hairline bottom
   border and dark text (same height, no shrink). Logo far left. Nav:
   Services⌄, Portfolio, Events⌄, Testimonials, Packages⌄, About Us, Albums,
   Contact. No header CTA button on desktop. **Three click-to-open
   mega-menus** (Services / Events / Packages): chevron flips, trigger gets a
   thin underline, a near-black full-width panel (~358px) drops under the
   header with a small portrait photo left, one large serif heading, and 8
   white links in two rows (5 + 3). Clicking another dropdown swaps panels;
   Escape or re-clicking closes; body scroll locks while open; 180ms
   fade/drop; aria-expanded, keyboard accessible. Hamburger below `lg` opens
   a full-screen cream overlay with the 8 links, the 3 dropdown groups as
   inline accordions, and a Contact CTA (closes on link click, Escape, close
   button, or resize to desktop).
2. **Hero** — full-viewport (100svh) full-bleed black-and-white photo
   slider, 5 slides (CSS grayscale), crossfade 666ms, autoplay 5s, loop,
   keyboard + swipe + prev/next controls. Controls bottom-centre: long thin
   line-arrow, fraction counter "1 / 5", long thin line-arrow. Large white
   serif heading bottom-left (3 lines), pill outline "Get in Touch" button
   (white outline, hover = translucent wash), small-caps sans strapline
   bottom-right. Heading/CTA do NOT animate on load (LCP).
3. **Awards row** — one static row of 8 original dummy rosette badges
   (inline SVG seals with circular text, fictional demo honours — no real
   award body names/artwork), evenly spaced, ~158px on desktop. Wraps to
   4-across on small tablets, 2-across on phones (~120px).
4. **The Portfolio** — centred serif heading + small circular outline arrow
   button. Full-width horizontal strip of portrait photos, ~4.5 visible on
   desktop (right edge cropped), 1.5 on mobile, stepped slide 0.5s, infinite
   loop, autoplay 9s pausing on hover/focus/interaction, arrows + long thin
   progress line below. Clicking a photo opens the shared lightbox. All 15
   gallery photos, eager-loaded so stepping never shows a blank tile.
5. **Services showcase** (longest section) — 7 services, in order: Wedding
   Photography, Cinematic Films, Mehndi & Sangeet, Nikkah Ceremony, Rukhsati
   & Baraat, Pre-Wedding Shoots, Family Portraits. Each block: left text
   column sticky (top ~120px) with large serif heading, 2–3 line description
   and "Discover More →" link to the matching Prices row; right: two
   staggered vertical image columns with subtle scroll-linked parallax
   (GSAP yPercent ±6% max, different speeds per column, desktop only). On
   mobile: stacked, text first, no sticky, no parallax.
6. **About** — left ~40%: serif heading (3 lines), two short paragraphs,
   pill "Read More About Us" button that expands two more paragraphs inline
   (real function). Right ~60%: three staggered portrait photos with
   fictional team names/roles above: Aariz Ahmed (Lead Photographer), Sana
   Malik (Second Shooter), Daniyal Raza (Films & Drone).
7. **Packages** — left ~25%: serif heading, short intro, pill "See all
   packages" button scrolling to the rows. Right: vertical list of 7
   pill/oval outline rows (ids `svc-1`–`svc-7`): right-arrow, serif title
   ~28px, 2-line description, "from PKR __" at the right end (Photography
   85,000; Films 120,000; Mehndi & Sangeet 45,000; Nikkah 40,000; Rukhsati &
   Baraat 60,000; Pre-Wedding 50,000; Family 35,000). Hover: row fills dark,
   text/arrow turn cream. Rows link to the contact section.
8. **Events** — "Some of Our Events", serif ~56px left-aligned. Static 3×2
   grid of 6 cards: tall photo + 2-line serif title + small circular outline
   arrow button (opens the lightbox with that photo; the photo itself is
   clickable too). Fictional couples: Ayesha & Bilal, Mahnoor & Hamza, Zara
   & Daniyal, Hira & Omar, Sana & Ali, Noor & Hassan.
9. **Testimonials** — slim band on near-white: 3 static columns, serif
   quotes with 5-star ratings (`role="img"` pattern), same 3 approved
   fictional testimonials. No slider.
10. **Albums** — small centred sans strapline, very large centred serif
    "ALBUMS" heading, 16:9 panel with a real `<video controls
    preload="metadata" poster="…">` — 14.5s Pexels wedding clip (hands
    reaching, henna + bangles), re-encoded 1280×720, 1.9 MB.
11. **Contact** — centred narrow column (~600px): serif "Contact Us"
    heading, stacked fields with labels above (Name, Email Address,
    Message), fully rounded pill inputs (thin dark outline, cream fill),
    full-width pill "Send Form" button, mailto fallback (no backend).
    Secondary pill WhatsApp CTA under the form (existing placeholder
    number).
12. **Footer** — SAME cream background (not black), hairline top border.
    Top row, 3 zones: logo left; centre nav in two rows (Home, Services,
    Portfolio, Events, Testimonials / Packages, About Us, Albums, Contact);
    right: 3 circular outline social icons (Instagram, YouTube, Facebook)
    that fill dark with white glyph on hover. Bottom bar: "© 2026 Vows by
    Aariz" left, phone + email centre, demo notice right ("Demo website —
    fictional content. Photography via Pexels.").
13. **Lightbox** — single shared dialog (kept outside any animated wrapper):
    gallery group (15) + events group (6), Escape/arrows, focus trap-ish Tab
    handling, focus restore, fade/scale entrance.

Removed in v3 (reference has none): marquee strip, stats counters, FAQ
accordion, process section, image band, old 4-card services grid, old
3-card packages, dark booking panel.

## Animations used (subtle only — GSAP + CSS, no Three.js)

| Animation | Technique |
| --- | --- |
| Hero crossfade | CSS opacity transition, 666ms |
| Gallery step + progress | CSS transform transition, 0.5s; progress fill scaleX |
| Mega-menu open | CSS opacity/translate, 180ms |
| Services parallax | GSAP yPercent ±6% max, scrub, desktop only |
| Section heading fade-up | GSAP `gsap.from` y 16px + opacity, once, ScrollTrigger |
| Header state change | CSS background/color transition, .18s |
| Nav underline sweep | CSS `::after` scaleX 0→1 from left, .18s |
| Pill/circle button fills | CSS background/color transition, .18s |
| Lightbox | Fade/scale GSAP entrance, keyboard + focus management |
| Mobile menu accordions | CSS grid-rows animation + aria-expanded |

No split-text reveals, no counters, no dramatic zoom/clip reveals, no
Lenis smooth scroll (CSS `scroll-behavior: smooth` for anchors), no
marquee. Gallery/event images have NO zoom/overlay on hover.

**Reduced motion:** `prefers-reduced-motion` disables autoplay (hero +
gallery), parallax, reveals and CSS transitions; content is visible by
default because every initial hidden state is set via JS only (graceful
degradation if JS fails entirely).

## Design — palette & type (v3, reference tokens)

Warm cream page background `#FEFCEA` (user-specified), near-white surfaces
`#FBFBFB`, ink `#222222`, body text `#333333`, main grey `#585858` (text
accents, borders, buttons), hairlines `rgba(88,88,88,0.48)`, near-black
`#191919` (mega-menu panels, lightbox), muted pink `#D0B8AC` (tiny accents
only, e.g. favicon). **No gold/bronze anywhere.** Buttons are pills
(`border-radius: 1.5em`), 1.2px outline in `#585858`, serif font,
transparent fill; hover fills solid `#585858` with cream text. All
transitions fast: `.18s ease-in-out`. Section gaps ~90px. H1 ~3em, H2
~2.625em, body ~1.125em; EB Garamond headings at 400 weight, line-height
~1.05.

- **Display font:** EB Garamond (400/500 + italics), self-hosted variable
  font, latin subset — `public/fonts/eb-garamond.woff2` (44 KB, wght 400–800)
  + `eb-garamond-italic.woff2` (48 KB, wght 400–800).
- **Sans font:** Inter (400–700), self-hosted variable font, latin subset —
  `public/fonts/inter.woff2` (48 KB, wght 100–900). Stand-in for the
  reference's grotesque sans.
- Total font payload: **140 KB** for all weights/styles. `font-display: swap`
  with `unicode-range` latin; the two critical files (EB Garamond + Inter)
  are preloaded in `<head>`. **No Google Fonts requests** — zero external
  font CSS or files.

## Images & video — formats, sizes, count

All photos are real wedding photos from **Pexels** (free license), downloaded
and converted locally with PIL. **No hotlinks** — every image is served from
`public/images/`. Two downloaded photos (IDs 33986839, 34481895) were excluded
per brief (real couples' names visible in backdrops). Every gallery photo is
baked to a native vertical **3/4 center crop (900×1200)**. Hero slides are
baked 16:9 center crops (1920×1080, q70); all 5 were verified in a grayscale
montage (faces framed, no decapitated subjects).

| File | Source | Dimensions | Size |
| --- | --- | --- | --- |
| `hero-slide-1.webp` | Pexels 32999859 | 1920×1080 | 65 KB |
| `hero-slide-2.webp` | Pexels 32044821 | 1920×1080 | 70 KB |
| `hero-slide-3.webp` | Pexels 36523501 | 1920×1080 | 75 KB |
| `hero-slide-4.webp` | Pexels 29137533 | 1920×1080 | 229 KB |
| `hero-slide-5.webp` | Pexels 34079358 | 1920×1080 | 135 KB |
| `showreel-poster.webp` | Pexels video frame (t=4s) | 1280×720 | 35 KB |
| `about.webp` | Pexels 20708576 | 900×1350 | 121 KB |
| `gallery-01.webp` | Pexels 2909501 — The quiet embrace, Nikkah · Lahore | 900×1200 | 36 KB |
| `gallery-02.webp` | Pexels 32044821 — Golden hour vows, Baraat · Islamabad | 900×1200 | 42 KB |
| `gallery-03.webp` | Pexels 39217041 — Pure joy, Walima · Karachi | 900×1200 | 104 KB |
| `gallery-04.webp` | Pexels 32188202 — Hand in hand (B&W), Nikkah · Lahore | 900×1200 | 44 KB |
| `gallery-05.webp` | Pexels 2908569 — Silhouette at dusk, Rukhsati · Murree | 900×1200 | 21 KB |
| `gallery-06.webp` | Pexels 20736204 — Henna stories, Mehndi · Lahore | 900×1200 | 109 KB |
| `gallery-07.webp` | Pexels 33180322 — The ritual, Mehndi · Faisalabad | 900×1200 | 84 KB |
| `gallery-08.webp` | Pexels 5401225 — Mehndi joy, Mehndi · Lahore | 900×1200 | 100 KB |
| `gallery-09.webp` | Pexels 2788488 — The setting, Walima · Islamabad | 900×1200 | 124 KB |
| `gallery-10.webp` | Pexels 5038747 — Table for two hundred, Walima · Lahore | 900×1200 | 122 KB |
| `gallery-11.webp` | Pexels 34079358 — A thousand lights, Qawwali Night · Lahore | 900×1200 | 93 KB |
| `gallery-12.webp` | Pexels 36523501 — The portrait, Baraat · Lahore | 900×1200 | 53 KB |
| `gallery-13.webp` | Pexels 34603119 — Laughter, kept, Nikkah · Karachi | 900×1200 | 120 KB |
| `gallery-14.webp` | Pexels 29137533 — Walking together, Baraat · Hunza | 900×1200 | 128 KB |
| `gallery-15.webp` | Pexels 17154866 — The bride, in red, Baraat · Lahore | 900×1200 | 130 KB |
| `og-image.jpg` | Hero center-crop | 1200×630 | 74 KB |
| `videos/showreel.mp4` | Pexels video 33499308 (re-encoded 720p30, CRF 26, faststart) | 1280×720, 14.5s | 1.9 MB |

- Deleted in v3: `hero.webp`, `hero-sm.webp`, `hero-md.webp`, `band.webp`,
  `cta-bg.webp`, `src/components/Faq.astro`.
- Formats: WebP (q70–72, LANCZOS resize); OG image is JPEG for maximum
  social-crawler compatibility.
- Footer credit is one generic line: "Demo photography via Pexels" (+ link).
  No photographer names are listed.
- Spare downloaded photos not used: 10624425, 15964966, 18354044, 32044754,
  33915851, 33979987 (kept in `~/workspace/wedding-site/photos/raw/`).

## Speed measures

- Zero-JS-by-default Astro: one bundled client script (GSAP + site logic),
  125 KB / **49 KB gzip**; CSS ~28 KB.
- Hero (LCP): slide 1 preloaded (`imagesrcset`/`imagesizes`,
  `fetchpriority="high"`, eager, explicit 1920×1080 dims) and NOT animated
  on load; slides 2–5 load via `data-src` swapped in by JS after page load
  (never preloaded). Grayscale is a CSS filter, not a second image set.
- Gallery slider images are eager (not lazy): lazy images inside a
  translated track can stay unloaded until stepped to, causing blank tiles;
  eager loading guarantees every step is filled. All other below-fold
  images: lazy + async decoding + explicit dims.
- Fonts: self-hosted variable woff2 (140 KB total), 2 files preloaded, no
  render-blocking third-party CSS.
- Zero external requests on the page itself (verified in headless QA): the
  only third-party URLs are `href` links (`wa.me`, Pexels, social profiles),
  none fetched on load.
- No jQuery, no Three.js, no Swiper, no image CDN, no tracking scripts.
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
  focus-visible styles (2px, currentColor), keyboard-operable mega-menus
  (aria-expanded/controls, Escape, focus restore), sliders (buttons +
  arrow keys + swipe), lightbox (dialog, arrows, Escape, focus trap-ish Tab,
  focus restore), mobile menu + accordions, `role="img"` star ratings, real
  `<button>` gallery tiles, form labels, sufficient contrast (`#585858` on
  `#FEFCEA` ≈ 7:1).

## Placeholder inventory (every fictional item to replace)

- Brand: "Vows by Aariz"; photographer persona "Aariz Ahmed".
- Phone: **+92 300 0000000** (visibly placeholder) — `tel:` link, WhatsApp
  `wa.me/923000000000` link, JSON-LD.
- Email: **hello@vowsbyaariz.com** (placeholder) — `mailto:` links, form
  fallback target in `src/scripts/site.js`, JSON-LD.
- Stats in copy: 250+ weddings, 8 years, 5.0 rating, "87 reviews".
- Prices: per-service "from PKR" rows (35,000–120,000) in
  `src/data/site.ts`; JSON-LD price range matches.
- Testimonials: Ayesha & Bilal (Lahore), Mahnoor & Hamza (Karachi),
  Zara & Daniyal (Islamabad) — all fictional quotes.
- Event couples: 6 fictional pairs in `src/data/site.ts`.
- Team: Sana Malik, Daniyal Raza — fictional names/roles.
- Award badges: 8 original dummy SVG rosettes with fictional honours.
- About story, service descriptions, footer social profile URLs
  (fictional handles).
- All photos + showreel are demo stock (Pexels) — replace with the client's
  real work; footer demo notice + Pexels credit line to be removed/updated.
- Site URL: `https://vows-by-aariz.vercel.app/` (canonical, OG, sitemap,
  robots, `astro.config.mjs`).

## Deploy steps (Vercel)

1. Push this project to GitHub (repo: `vows-by-aariz`).
2. Vercel → Add New → Project → Import repository.
3. Framework: **Astro** (auto-detected). Build command `npm run build`,
   output directory `dist/` — defaults, no changes needed.
4. Deploy. No environment variables required.

## Verification performed (v3)

- `npm run build` passes; `dist/` contains 1 HTML page, 22 image files,
  1 video, 3 font files, favicon, robots.txt, sitemap.xml (4.4 MB total).
- Grep of built HTML/CSS: **zero bronze/gold tokens**, zero Google Fonts
  refs, zero external `src` URLs; only external refs are `href` links
  (schema.org, self canonical/OG URLs, `wa.me`, Pexels, social profiles).
  Hero slide-1 preload + 2 font preloads present in `<head>`.
- Headless Chromium QA (Playwright, local `dist/` server on 127.0.0.1 with
  `--no-proxy-server` — VM egress proxy does not work for Chromium):
  **41/41 checks passed** (`~/workspace/wedding-site/qa-mobile/qa-v3.js`):
  hero autoplay/prev/next/keyboard; header transparent→cream switch; all
  three mega-menus (open/swap/Escape/re-click/outside-click, scroll lock,
  focus restore); awards 8-in-one-row desktop / 2-col wrap mobile; all 59
  images loaded incl. 5 hero slides + 15 gallery; gallery step/loop/wrap
  + progress line; lightbox from gallery AND event cards + arrows + Escape;
  services sticky column (sticks at 120px, inside block bounds) + parallax
  screenshots at 3 scroll positions; About Read More expands; 7 price rows
  with svc ids; video metadata loads (readyState 4, 14.5s); contact form +
  3 footer socials + cream footer; zero external requests; zero console
  errors; no horizontal overflow at 360/390/768/1024/1440/1920; mobile menu
  + accordions + close paths; mobile gallery 1.5 slides visible.
  Screenshots: `~/workspace/wedding-site/qa-mobile/shots/v3-*.png`.
- Two defects found and fixed during QA: (1) awards row wrapped 6+2 on
  desktop — rebuilt as a responsive grid (8/4/2 columns); (2) lazy gallery
  images inside the translated track could stay unloaded — slider images
  are now eager.

## Changelog

- **2026-11-15 — v3 reference-structure rebuild.** The v2 clean-white design
  did not match the reference site's structure closely enough, and the user
  asked for the reference's exact layout/interactions with its colors and
  fonts, no gold. Changes: (1) palette rebuilt to cream `#FEFCEA` /
  `#FBFBFB` / `#222222` / `#333333` / `#585858` / hairline
  `rgba(88,88,88,.48)` / `#191919` / blush `#D0B8AC`; all bronze tokens and
  usages removed; favicon recoloured; (2) header rebuilt: glassmorphism
  transparent→cream switch + 3 click mega-menus + mobile accordion menu;
  (3) hero rebuilt as full-viewport B&W 5-slide slider with line-arrow
  controls + fraction counter; (4) awards row of 8 original SVG rosettes;
  (5) portfolio rebuilt as infinite horizontal slider with progress line;
  (6) services rebuilt as 7 sticky-text + staggered-parallax showcase
  blocks; (7) About rebuilt with Read More expansion + team stagger;
  (8) packages rebuilt as 7 pill rows with from-prices; (9) Events 3×2
  grid; (10) slim testimonials band; (11) Albums with real Pexels showreel
  video; (12) centred pill-input contact form; (13) cream footer with
  2-row nav + fill-on-hover socials; (14) marquee, stats, FAQ, process,
  image band and dark booking panel removed. All content remains original
  fictional placeholder copy — no text, images, logo or badge artwork
  copied from the reference. No copy, phone, email, testimonials or
  fictional prices changed except the package presentation (from-prices per
  service). PageSpeed re-check happens after deploy.
- **2026-11-15 — Clean-white redesign + performance rebuild (v2).**
  PageSpeed mobile was 83 (LCP 3.9s, render-blocking Google Fonts, CLS
  0.125). Changes: all 15 gallery photos re-cropped to baked 3/4 verticals
  (900×1200) incl. 2 new photos (5401225, 17154866); hero rebuilt as
  responsive 640/960/1200w srcset with preload, clip-path reveal removed
  from the hero; fonts self-hosted (EB Garamond + Inter variable woff2,
  latin subset, 140 KB total), Google Fonts links removed; palette rebuilt
  to clean white `#FFFFFF` / `#FAFAF8` / ink `#1A1A1A` / bronze micro-accents,
  film-grain overlay removed; accessible mobile menu added; filter-chip
  color transitions removed. dist/ shrank 3.1 MB → 2.3 MB. PageSpeed
  mobile re-checks: Performance 100 / 99 (run variance), Accessibility 100,
  Best Practices 100, SEO 100 (after a11y fixes: real button gallery
  tiles, role=img star ratings, darker bronze).
