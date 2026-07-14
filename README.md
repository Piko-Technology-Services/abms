# ABMS Limited — Website (Sterial template edition)

A Next.js (App Router, TypeScript) site for **African Brotherhood Mining
Services & General Trading Limited** (ABMS Limited), built directly on
top of the **Sterial** HTML template's markup, classes and structure —
so it looks and behaves like the original template once you drop the
template's asset files in.

## ⚠️ Before it will look right: add the template assets

This project ships **without** the Sterial template's design assets
(fonts, CSS, JS, images) since those belong to the template package you
already have. Copy the following folders/files into `public/` exactly as
named below — no code changes needed, everything is already wired up to
these paths in `app/layout.tsx` and every page:

```
public/
  favicon.png
  css/
    style.css
    tiny-slider.css
    aos.css
    flatpickr.min.css
    glightbox.min.css
  js/
    bootstrap.bundle.min.js
    tiny-slider.js
    aos.js
    navbar.js
    counter.js
    rellax.js
    flatpickr.js
    glightbox.min.js
    custom.js
  fonts/
    icomoon/            (style.css + icon font files)
    flaticon/font/       (flaticon.css + icon font files)
  images/
    hero_1.jpg
    hero_2.jpg
    img_v_1.jpg
    img_v_2.jpg
    img-1.jpg ... img-6.jpg
    gal_1.jpg ... gal_6.jpg
    person_1.jpg, person_2.jpg, person_3.jpg
    svg/01.svg ... 04.svg
```

These are the same paths referenced by the original template's
`index.html` / `about.html` / `services.html` / `contact.html`, so you
can copy the whole `css/`, `js/`, `fonts/` and `images/` folders from the
template package straight into `public/` without renaming anything.

## Pages

- `/` — Home
- `/about` — About Us (who we are, vision & mission, all 8 core values,
  core expertise, target industries, geographical coverage)
- `/services` — all 4 core services in full detail, each with its own
  anchor (`#mining-services`, `#mining-support-services`,
  `#general-trading-supply`, `#logistics-procurement-advisory`)
- `/contact` — contact details and enquiry form

## Getting started

Requires Node.js 18.18+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Deployment

Standard Next.js app — deploy to Vercel (`npx vercel`), Netlify (Next.js
runtime plugin), or any Node host via `npm run build && npm run start`.

## Editing content

All company copy (services, values, contact details, FAQs, etc.) is
centralized in `lib/content.ts` — edit it there and it propagates across
every page. In particular, check/update `businessHours` — exact opening
hours weren't specified in the source company profile, so a placeholder
(`Mon–Fri, 08:00–17:00`) is used.

## Notes on how this differs from a hand-styled rebuild

- **Navigation uses plain `<a>` tags, not `next/link`.** The original
  Sterial template is a static multi-page site whose JS (AOS animations,
  the tiny-slider carousels, the accordion, the mobile menu) initializes
  once per full page load. Using plain anchors preserves that full-page-
  reload behavior so the template's own scripts keep working correctly
  on every page, exactly as in the original template.
- **Template sections were re-purposed, not copy-pasted verbatim**,
  where the original content was tourism-specific (e.g. the "destination"
  carousel with price tags, or "testimonials" from named people, or a
  literal "open positions" job board). Those layouts are reused for
  content that's actually true of ABMS Limited — target industries,
  value-proposition quotes, core values — rather than inventing fake
  prices, people, or job listings.
- A couple of ESLint rules (`no-img-element`, `no-html-link-for-pages`,
  `no-css-tags`, `no-page-custom-font`) are turned off in
  `eslint.config.mjs` since they conflict with the two points above by
  design — see the comment there.
