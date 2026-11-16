# Build Report — Vows by Aariz (Demo Wedding Photographer Website)

- **Built:** 2026-11-15 (overnight demo task); **rebuilt v3** 2026-11-15
  (reference-structure rebuild); **rebuilt v4 FINAL** 2026-11-16
  (see Changelog)
- **Stack:** Astro 5 + Tailwind CSS 3 + GSAP 3 (ScrollTrigger) + Lucide icons
- **Build status:** ✅ `npm run build` passes (1 page, ~9–13s)
- **Output:** `dist/` — 3.9 MB total (fully static, zero server code;
  includes the 1.9 MB demo showreel video)

## Sections built (v4 FINAL)

1. **Header** — fixed, full-width, ~76px desktop / 64px mobile. Transparent
   with `backdrop-blur(5px)` and white text over the hero; after scrolling
   ~95% of viewport height it becomes solid **white** with a hairline bottom
   border and ink text (same height, no shrink). Logo far left. Nav:
   Services⌄, Portfolio, Events⌄, Testimonials, Packages⌄, About Us, Albums,
   Contact. **Three click-to-open mega-menus** (Services / Events /
   Packages): chevron flips, trigger gets a thin underline, a **white**
   full-width panel drops under the header with a small portrait photo left,
   one large serif heading, and 8 ink links in two rows (5 + 3) with rose
   hover underlines. Clicking another dropdown swaps panels; Escape or
   re-clicking closes; body scroll locks while open; 180ms fade/drop;
   aria-expanded, keyboard accessible. Hamburger below `lg` opens a
   full-screen white overlay with the 8 links, the 3 dropdown groups as
   inline accordions, and a rose "Get in Touch" CTA (closes on link click,
   Escape, close button, or resize to desktop).
2. **Hero** — SINGLE static full-bleed **colour** photograph (no slider):
   a Pakistani Muslim couple right of frame with empty muted mountainside
   on the left. Full-viewport (100svh desktop / 92svh mobile), 30% black
   overlay + soft left gradient (+ bottom gradient on mobile). Text
   left-aligned in the empty zone, upper-middle on desktop, lower zone on
   mobile (below the faces): short eyebrow, 3-line serif H1 "Every glance.
   Every tear. Kept forever.", serif sub-line "Packages from PKR 85,000",
   ONE rose pill CTA "Check Packages & Availability →" (#packages). Text
   does NOT animate on load (LCP). Art-directed crops: `hero-main.webp`
   1920×1080 for landscape/large viewports, `hero-main-mobile.webp`
   900×1200 for phones + portrait tablets (orientation-aware `<picture>`
   + matching media preloads — each viewport downloads exactly one crop).
   **No text touches any face at any width** — verified in screenshots at
   360/390/768/834/1024/1112/1440/1920.
3. **Promo pill** — white fully-rounded card straddling the hero's bottom
   edge (centred, max-width 900px, shadow): small circular couple photo
   left, bold serif "Now Booking 2027" + grey sub-line centre, rose pill
   CTA "See Packages →" right. Stacks on mobile. Never overlaps hero text.
4. **3-card image row** — replaces the standalone awards row. Three equal
   cards (rounded 28px, full-bleed verified people photos, white rounded
   arrow-tab top-right with rose diagonal arrow, 2-line label bottom-left
   over a bottom gradient: light-rose eyebrow + white serif title):
   PACKAGES / "Packages & Availability" → #packages; PORTFOLIO / "Our
   Portfolio" → #portfolio; REAL WEDDINGS / "Real Weddings" → #events.
   Whole-card links; subtle image scale (1.03, .3s) on hover. Labels sit
   over lower photo areas, never over faces.
5. **Intro + awards carousel** — centred: rose serif eyebrow "VOWS BY
   AARIZ", large ink serif headline "Joyful, honest, unforgettable."
   (original copy), one short centred grey paragraph, then a carousel of
   the 8 original dummy SVG seals (fictional honours, no real award names):
   4 visible on desktop, 3 on small tablets, 2 on phones; chevron prev/next
   at the edges, steps 1 per click, loops, keyboard accessible (arrow keys
   on the focused track). No autoplay. Below: link "Every wedding, every
   detail — see how we work →" (#services).
6. **The Portfolio** — centred serif heading + small circular outline arrow
   button. Full-width horizontal strip of portrait photos, ~4.5 visible on
   desktop (right edge cropped), 1.5 on mobile, stepped slide 0.5s, infinite
   loop, autoplay 9s pausing on hover/focus/interaction, arrows + long thin
   progress line (rose fill) below. Clicking a photo opens the shared
   lightbox. All 15 gallery photos, eager-loaded so stepping never shows a
   blank tile.
7. **Services showcase** (longest section) — 7 services, in order: Wedding
   Photography, Cinematic Films, Mehndi & Sangeet, Nikkah Ceremony, Rukhsati
   & Baraat, Pre-Wedding Shoots, Family Portraits. Each block: left text
   column sticky (top ~100px) with large serif heading, 2–3 line description
   and "Discover More →" link to the matching Prices row; right: two
   staggered vertical image columns with subtle scroll-linked parallax
   (GSAP yPercent ±6% max, different speeds per column, desktop only). On
   mobile: stacked, text first, no sticky, no parallax. All photos from the
   approved v4 pool.
8. **Meet the Team** — left-aligned rose eyebrow + serif heading "The people
   behind the lens"; two intro paragraphs + working "Read More" expansion
   above the cards; 3 portrait cards in a row (rounded 24px, upper-body
   crops): Aariz Ahmed (Lead Photographer, Lahore), Sana Malik (Films &
   Drone, Karachi), Daniyal Raza (Second Shooter, Islamabad) — small rose
   tag top-left, name (bold sans) + city (grey sans) on a white strip at
   the bottom. No carousel.
9. **Why couples choose Vows** — centred eyebrow + serif title, 5 columns
   (thin rose line icon + bold title + 1–2 line grey description): Honest
   Pricing, 8+ Years, Easy Customisation, Flexible Payments, Award-Winning
   Style. Centred rose pill CTA below ("Check Packages & Availability").
10. **Packages** — left ~25%: serif heading, short intro, pill "See all
    packages" button scrolling to the rows. Right: vertical list of 7
    pill/oval outline rows (ids `svc-1`–`svc-7`): right-arrow, serif title
    ~28px, 2-line description, "from PKR __" at the right end (Photography
    85,000; Films 120,000; Mehndi & Sangeet 45,000; Nikkah 40,000; Rukhsati &
    Baraat 60,000; Pre-Wedding 50,000; Family 35,000). Hover: row fills
    **rose**, text/arrow turn white. Rows link to the contact section.
11. **Events** — "Some of Our Events", serif ~56px left-aligned. Static 3×2
    grid of 6 cards: tall photo (rounded 24px) with a white arrow-tab
    top-right and subtle scale on hover; clicking the photo opens the
    lightbox; 2-line serif title below. Fictional couples: Ayesha & Bilal,
    Mahnoor & Hamza, Zara & Daniyal, Hira & Omar, Sana & Ali, Noor & Hassan.
12. **Reviews** — pale blush band (`#FDF2F4`, rounded 32px container):
    centred eyebrow "REVIEWS" + serif title + "5.0 from 87 demo reviews"
    with rose stars. Split: LEFT large couple photo (rounded 24px), RIGHT
    one large testimonial card (big rose quotation mark, large serif
    pull-quote, rose star row `role="img"`, serif couple name + city) with
    circular chevron prev/next cycling the same 3 approved fictional
    testimonials (Ayesha & Bilal / Mahnoor & Hamza / Zara & Daniyal) +
    counter "n / 3". Keyboard accessible, `aria-live="polite"`. No autoplay.
13. **Albums** — small centred sans strapline, very large centred serif
    "ALBUMS" heading, 16:9 panel with a real `<video controls
    preload="metadata" poster="…">` — 14.5s Pexels wedding clip (hands
    reaching, henna + bangles), re-encoded 1280×720, 1.9 MB. White bg.
14. **Contact** — centred narrow column (~600px): serif "Contact Us"
    heading, stacked fields with labels above (Name, Email Address,
    Message), fully rounded pill inputs (thin outline, white fill), rose
    full-width pill "Send Form" button, mailto fallback (no backend).
    Secondary pill WhatsApp CTA under the form (existing placeholder
    number).
15. **Footer** — white bg. Top strip: small wordmark left + 5 circular
    social icons right (Instagram, YouTube, Facebook, WhatsApp, Mail —
    dark circles filling rose with white glyph on hover). 4 link columns:
    Services (5 links → #services rows), Company (About, Portfolio, Events,
    Reviews, Albums), Explore (Packages, Contact, Book a Call, FAQs →
    #contact), Contact (phone + email links + city line). Bottom bar: thin
    blush strip, centred small text "© 2026 Vows by Aariz — Demo website.
    Fictional content. Photography via Pexels." No dead links anywhere.
16. **Lightbox** — single shared dialog (kept outside any animated wrapper):
    gallery group (15) + events group (6), Escape/arrows, focus trap-ish Tab
    handling, focus restore, fade/scale entrance.

Removed in v3 (reference has none): marquee strip, stats counters, FAQ
accordion, process section, image band, old 4-card services grid, old
3-card packages, dark booking panel. Removed in v4: B&W hero slider,
standalone awards row.

## Animations used (subtle only — GSAP + CSS, no Three.js)

| Animation | Technique |
| --- | --- |
| Awards carousel step | CSS transform transition, 0.5s; loop via clones |
| Reviews carousel fade | CSS keyframe fade-in, 0.35s |
| Gallery step + progress | CSS transform transition, 0.5s; progress fill scaleX |
| Mega-menu open | CSS opacity/translate, 180ms |
| Services parallax | GSAP yPercent ±6% max, scrub, desktop only |
| Section heading fade-up | GSAP `gsap.from` y 16px + opacity, once, ScrollTrigger |
| Header state change | CSS background/color transition, .18s |
| Nav underline sweep | CSS `::after` scaleX 0→1 from left, .18s |
| Pill/circle button fills | CSS background/color transition, .18s |
| Card image scale | CSS scale 1.03, .3s — 3-card row + events cards only |
| Lightbox | Fade/scale GSAP entrance, keyboard + focus management |
| Mobile menu accordions | CSS grid-rows animation + aria-expanded |

No split-text reveals, no counters, no dramatic zoom/clip reveals, no
Lenis smooth scroll (CSS `scroll-behavior: smooth` for anchors), no
marquee, no hero animation. Gallery slider images have NO zoom/overlay on
hover.

**Reduced motion:** `prefers-reduced-motion` disables autoplay (gallery),
parallax, reveals and CSS transitions; content is visible by default because
every initial hidden state is set via JS only (graceful degradation if JS
fails entirely).

## Design — palette & type (v4 FINAL)

Pure white page background `#FFFFFF` (user-specified), surfaces `#FFFFFF`,
soft `#FAFAF8`, blush band `#FDF2F4`, blush pill `#FCF4F6`, ink `#1A1A1A`,
body text `#555555`, hairline `#E8E8E8`, pill outlines `#DADADA`, dark
`#191919` (footer social circles only). Primary rose `#A93A5B` (fills +
text; white on it ≈ 6.1:1), rose-dark `#93324E` (hover), rose-light
`#D96A8A` (decorative only, never small text). Card-label eyebrow tint
`#F2A9BD` (light rose, used only over dark photo gradients for contrast).
**No cream, no grey-main, no gold/bronze anywhere.** Buttons are
fully-rounded pills: primary = rose fill + white sans text + arrow (hover:
rose-dark + arrow nudges right 2px); secondary = white bg + 1.5px ink
outline + ink text (hover: ink fill + white text). No square buttons. All
transitions fast: `.18s ease-in-out`. H1 72px desktop / 56px lg / 48px sm /
34px mobile, EB Garamond at 400 weight, line-height ~1.04.

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

## Images & video — formats, sizes, count (v4 FINAL)

All photos are real wedding photos from **Pexels** (free license), downloaded
and converted locally with PIL. **No hotlinks** — every image is served from
`public/images/`. **Every photo on the site shows Pakistani/South Asian
Muslim wedding people** — verified by the author in a full-site montage
(20 tiles: 15 gallery + about + hero ×2 + poster + OG). Two downloaded
photos (IDs 33986839, 34481895) were excluded per brief (real couples' names
visible in backdrops). Every gallery photo is baked to a native vertical
**3/4 center crop (900×1200, q72)**. The hero is baked from a full-res
original (6720×4480) as 1920×1080 (q70) + 900×1200 (q70) art-directed crops;
both were viewed full-size to verify the right-couple/left-empty composition.

| File | Source | Dimensions | Size |
| --- | --- | --- | --- |
| `hero-main.webp` | Pexels 17657615 (CAMERA TREASURE) — couple right, empty mountainside left | 1920×1080 | 68 KB |
| `hero-main-mobile.webp` | Pexels 17657615 — portrait crop, faces upper-right | 900×1200 | 58 KB |
| `showreel-poster.webp` | Pexels video frame (t=4s) | 1280×720 | 35 KB |
| `about.webp` | Pexels 32060316 — couple, red vest + cream bride (replaces 20708576, see audit note) | 900×1350 | 43 KB |
| `gallery-01.webp` | Pexels 33031841 — The quiet embrace, Nikkah · Lahore | 900×1200 | 81 KB |
| `gallery-02.webp` | Pexels 32044821 — Golden hour vows, Baraat · Islamabad | 900×1200 | 42 KB |
| `gallery-03.webp` | Pexels 39217041 — Pure joy, Walima · Karachi | 900×1200 | 104 KB |
| `gallery-04.webp` | Pexels 16814609 — Hand in hand, Nikkah · Lahore | 900×1200 | 33 KB |
| `gallery-05.webp` | Pexels 7685587 — Colour and joy, Rukhsati · Murree | 900×1200 | 124 KB |
| `gallery-06.webp` | Pexels 20736204 — Henna stories, Mehndi · Lahore | 900×1200 | 109 KB |
| `gallery-07.webp` | Pexels 33180322 — The ritual, Mehndi · Faisalabad | 900×1200 | 84 KB |
| `gallery-08.webp` | Pexels 5401225 — Mehndi joy, Mehndi · Lahore | 900×1200 | 100 KB |
| `gallery-09.webp` | Pexels 32060432 — Together, always, Walima · Islamabad | 900×1200 | 61 KB |
| `gallery-10.webp` | Pexels 28411910 — Her hand in his, Walima · Lahore | 900×1200 | 176 KB |
| `gallery-11.webp` | Pexels 17000472 — Dusk, in gold, Qawwali Night · Lahore | 900×1200 | 52 KB |
| `gallery-12.webp` | Pexels 36523501 — The portrait, Baraat · Lahore | 900×1200 | 53 KB |
| `gallery-13.webp` | Pexels 16156621 — The stage, set, Baraat · Lahore (parent-verification fix 16 Nov: replaced 34603119, which showed sindoor + forehead alpana — Bengali Hindu wedding markers violating the all-Pakistani-Muslim rule; new photo zoom-verified) | 900×1200 | 120 KB |
| `gallery-14.webp` | Pexels 14100160 — Walking together, Baraat · Hunza | 900×1200 | 71 KB |
| `gallery-15.webp` | Pexels 17154866 — The bride, in red, Baraat · Lahore | 900×1200 | 130 KB |
| `og-image.jpg` | New hero center-crop | 1200×630 | 70 KB |
| `videos/showreel.mp4` | Pexels video 33499308 (re-encoded 720p30, CRF 26, faststart) | 1280×720, 14.5s | 1.9 MB |

- Deleted in v4: `hero-slide-1.webp` … `hero-slide-5.webp`,
  `src/components/HeroSlider.astro`, `src/components/AwardsRow.astro`.
- Deleted in v3: `hero.webp`, `hero-sm.webp`, `hero-md.webp`, `band.webp`,
  `cta-bg.webp`, `src/components/Faq.astro`.
- Formats: WebP (q70–72, LANCZOS resize); OG image is JPEG for maximum
  social-crawler compatibility.
- Footer credit is one generic line: "Demo photography via Pexels" (+ link).
  No photographer names are listed.
- Spare downloaded photos not used: 10624425, 15964966, 18354044, 32044754,
  33915851, 33979987 (kept in `~/workspace/wedding-site/photos/raw/`);
  approved-but-unused v4 spares: 15729188, 8489653, 32060457 (kept in
  `~/workspace/wedding-site/photos/raw-v4/`).

### v4 photo audit — verdicts (2026-11-16)

**Replaced (7 gallery + about + hero):** gallery-01 (was 2909501, Western
white gown + tux), gallery-04 (was 32188202, B&W gloved hands/white dress),
gallery-05 (was 2908569, B&W silhouette/white gown), gallery-09 (was
2788488, empty venue), gallery-10 (was 5038747, empty tables), gallery-11
(was 34079358, empty chandelier stage), gallery-14 (was 29137533,
garlands/mukut-style cap — reads Hindu/Bengali ritual). **about.webp was
also replaced although the v4 brief listed it as KEEP:** the v3 photo
(20708576) shows the groom wearing a tall white conical topor (Bengali
Hindu wedding crown) and the bride with red bindi/sindoor — it reads as a
Bengali Hindu wedding and violates the user's "all images Pakistani Muslim
people" rule and the brief's own reject rule for mukut/tilak. The user's
explicit requirement took precedence over the keep-list; flagged in the
handoff. **Hero 17657615 verdict:** APPROVED — groom in white pagri +
sherwani (profile), bride in white/red with nose ring + maang tikka
(standard South Asian bridal jewellery, also worn by Pakistani brides);
no tilak, garlands, text, or Hindu ritual markers; left ~39% of the
original is genuinely empty mountainside/path.
**New-photo verdicts:** 33031841 APPROVED (Lahore couple by window, veil +
cream sherwani); 16814609 APPROVED (groom holding bride's henna hand);
7685587 APPROVED (bride orange/purple + groom red brocade kurta); 32060432
APPROVED (same couple as 32060316, outdoors greenery); 28411910 APPROVED
(bride white/gold lehenga + groom green brocade sherwani, back to camera);
17000472 APPROVED (backlit sunset couple, red veil + turban, faces in
shadow/flare — acceptable); 14100160 APPROVED (couple walking hand-in-hand
under trees, cream/white); 32060316 APPROVED (couple indoors, red vest +
cream bride, plain bg). **Rejected during sourcing:** 31957455, 32499520,
38823745, 27443997, 20738765, 17738223 (Western suits), 12153938, 18361996,
19613670, 20518451, 31798270, 17657614 (Hindu ritual markers / garlands /
tilak / Devanagari text), 15490142 (Sikh dastar), 33614256 (diaspora
autumn-park setting), 13078094 (tight close-up, possible tilak),
17657612/17657613/17657616–17657622 (same-series: centred composition,
blurry foreground, interiors/Western portraits), 15865936, 19191865,
19191943, 20738346, 26990489, 5166591, 5166702, 5902754, 7122162, 9280110,
9585068 (Indonesian/Malay/Arab-looking or B&W), 18633035 (404), 10624425,
15964966, 34767573, 966861, 16664432 (spare rejects: SE-Asian look, Western
send-off/veil, no people, ambiguous). **Kept from v3:** gallery-02, 03, 06,
07, 08, 12, 13, 15, showreel-poster.webp, showreel.mp4 — all re-verified in
the final montage. New originals live in `~/workspace/wedding-site/photos/raw-v4/`;
v3 originals in `photos/raw/` were not touched.

## Speed measures

- Zero-JS-by-default Astro: one bundled client script (GSAP + site logic),
  125 KB / **49 KB gzip**; CSS ~28 KB.
- Hero (LCP): single static photo, media-matched preloads mirroring the
  `<picture>` art direction (`fetchpriority="high"`, eager, explicit dims),
  NOT animated on load; each viewport downloads exactly one hero crop
  (verified via `currentSrc` in QA). No slider JS, no grayscale filter.
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
  (aria-expanded/controls, Escape, focus restore), sliders/carousels
  (buttons + arrow keys + swipe where applicable), lightbox (dialog,
  arrows, Escape, focus trap-ish Tab, focus restore), mobile menu +
  accordions, `role="img"` star ratings, real `<button>` gallery tiles,
  form labels, `aria-live="polite"` on the reviews carousel, sufficient
  contrast (rose `#A93A5B` on white ≈ 6.1:1; white on rose ≈ 6.1:1; body
  `#555555` on white ≈ 7.5:1).

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
- Team: Sana Malik (Films & Drone), Daniyal Raza (Second Shooter) —
  fictional names/roles. (Roles follow the v4 brief's tag order; v3 had
  them swapped.)
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

## Verification performed (v4 FINAL)

- `npm run build` passes; `dist/` contains 1 HTML page, 20 image files,
  1 video, 3 font files, favicon, robots.txt, sitemap.xml (3.9 MB total).
- Grep of src: zero `bg-cream` / `#FEFCEA` / `#585858` / `#D0B8AC` /
  `.btn-pill` / `text-main` references remain (only "cream" matches are
  alt-text colour descriptions); zero Google Fonts refs; zero external
  `src` URLs.
- Headless Chromium QA (Playwright, local `dist/` server on 127.0.0.1 with
  `--no-proxy-server`): **107/107 checks passed**
  (`~/workspace/wedding-site/qa-mobile/qa-v4.js`, final run 2026-11-16):
  hero single static img + correct crop per viewport (`currentSrc`:
  mobile crop at 360/390/768/834 portrait, desktop crop at 1024/1112
  landscape, 1440, 1920) + fetchpriority high + no slider chrome + single
  CTA; promo pill straddles hero edge + clears hero text at all 8 widths;
  header transparent→solid-white switch; all three mega-menus
  (open/swap/Escape/re-click/outside-click, white panel, 8 links, scroll
  lock, focus restore); 3-card labels/tabs/hrefs; awards carousel
  (step/loop/keyboard, 4 visible desktop / 2 mobile, 8 seals); gallery
  step/progress; lightbox from gallery AND events + arrows + Escape +
  close; services sticky column (holds 100px) + 7 blocks + 3 parallax
  screenshots; Read More expand/collapse; team 3 cards + rose tags; why
  row 5 points + CTA; prices 7 rows svc-1..7; reviews cycle/loop/keyboard
  + aria-live + blush band; video metadata (readyState 4, 14.5s); form
  render + rose Send + empty-submit error; footer 5 socials + zero dead
  anchors page-wide + blush bottom bar; all 60 images loaded
  (naturalWidth > 0); fonts loaded; body bg white; zero external requests;
  zero console errors (desktop + mobile); no horizontal overflow at all 8
  widths; mobile menu + accordions + all close paths.
  Screenshots: `~/workspace/wedding-site/qa-mobile/shots/v4-*.png`.
- **Hero face/text verification (manual, mandatory):** all 8 hero
  screenshots (`v4-hero-{360,390,768,834,1024,1112,1440,1920}.png`) were
  inspected by the author: no text block, CTA, or promo pill touches any
  face at any width. Two defects found and fixed during inspection:
  (1) at 390/360 the long eyebrow crossed the bride's face — eyebrow
  shortened (short text on phones, full text ≥640px) and the text block
  tightened/lowered; (2) at 768 portrait the desktop crop filled the frame
  and text grazed the subjects — art direction switched to
  orientation-aware (portrait crop for phones + portrait tablets ≤1024px).
  On phones the text overlaps the couple's dress/clothing (never faces) —
  accepted, gradient keeps it legible. 3-card labels and services
  parallax screenshots also inspected: labels clear of faces, no
  overlap/jitter.
- Two QA-script measurement issues were fixed during QA (not site bugs):
  the sticky check now measures inside the sticking range, and the mobile
  gallery visibility check measures against the track's content width
  (1.6 slides, matching the v3 definition).

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

- **2026-11-16 — v4 FINAL rebuild.** The user asked for a premium final
  version: hero rebuilt so text never covers a face or focal point, original
  colours instead of B&W, ALL images Pakistani Muslim people, the badges
  section replaced, white `#FFFFFF` background, bold/confident changes,
  inspiration (structure/layout only — no copied text, images, names or
  branding) from georgestreetphoto.com. Changes: (1) photo audit + resourcing
  — 7 gallery photos + about.webp + hero replaced with montage-verified
  Pexels originals (see audit verdicts above); hero-slide-1..5 deleted;
  (2) hero rebuilt as a single static full-bleed colour photo with
  art-directed desktop/mobile crops, orientation-aware `<picture>` + media
  preloads, one rose CTA, and a straddling "Now Booking 2027" promo pill —
  verified face-clear in screenshots at 8 widths; (3) standalone awards
  row replaced by a 3-card image row (Packages / Portfolio / Real
  Weddings); (4) new Intro + awards carousel (same 8 dummy SVG seals,
  stepping + loop + keyboard); (5) new "Why couples choose Vows" 5-column
  row; (6) About restyled as "Meet the Team" (3 portrait cards, rose tags);
  (7) testimonials restyled as a blush-band Reviews split carousel (same 3
  fictional testimonials); (8) palette fully replaced with white + rose
  `#A93A5B` (cream/grey-main deleted); header slimmed to 76px with white
  mega-menu panels; footer rebuilt (white, 5 socials, 4 link columns, blush
  bottom bar, zero dead links); buttons fully-rounded rose/ink pills;
  (9) prices hover fill changed to rose; events cards rounded 24px with
  arrow-tabs; contact Send button rose; (10) hero slider JS removed, awards
  + reviews carousel JS added; (11) OG image regenerated from the new hero.
  Deviations from the v4 brief (documented): `<picture>` + media preloads
  instead of one `<img>` srcset (correct pattern for art-directed crops);
  about.webp replaced despite the keep-list (topor/bindi markers — see
  audit note); team roles follow the brief's tag order (Sana = Films &
  Drone, Daniyal = Second Shooter — swapped vs v3); 3-card eyebrow uses
  light-rose `#F2A9BD` over dark gradients (rose-light is decorative-only
  per the palette); on phones the hero text overlaps the couple's
  dress/clothing (never faces) — unavoidable at 360–390px, gradient keeps
  it legible. All content remains original fictional placeholder copy.
  PageSpeed re-check happens after deploy.
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
