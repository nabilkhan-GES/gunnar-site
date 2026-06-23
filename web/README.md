# Gunnar Energy Services — Website

Production website for Gunnar Energy Services, built with [Astro](https://astro.build).
It is a faithful, code-based implementation of the Claude Design prototypes in
`../project/site` — same brand, layout and copy, but as a real, maintainable,
SEO-friendly site that builds to static files and deploys anywhere.

## Quick start

```bash
cd web
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # serve the production build locally
```

Requires Node 18.20+, 20.3+, or 22+ (developed on Node 22).

## What's here

```
src/
  layouts/Layout.astro        Page shell — <head>, fonts, SEO meta, brand background
  components/
    SiteHeader.astro          Sticky header + 24/7 emergency bar (shared)
    SiteFooter.astro          CTA band + footer link hub (shared)
  pages/
    index.astro               Home
    services/index.astro      Services hub
    services/[slug].astro     6 service detail pages (data-driven)
    technology.astro          Technology / ranging methods
    case-studies.astro        Case studies
    insights/index.astro      Insights / blog index
    insights/[slug].astro     10 full articles (data-driven)
    videos.astro              Video library (native click-to-play)
    about.astro               About / leadership
    contact.astro             Contact + feasibility-request form
  data/
    services/*.json           Content for each service detail page
    insights/*.json           Full body content for each article
  scripts/
    video-facade.js           Click-to-play YouTube facade (home, articles)
    forms.js                  Feasibility / newsletter form handling
  styles/global.css           Design tokens, fonts, hover + form styles, responsive layer
  lib/links.js                Maps legacy *.dc.html links → clean URLs
public/
  assets/                     Hero, banners, team photos (swap in real photography)
  favicon.svg
```

Pages and articles are **data-driven**: to edit an article's copy, edit its JSON
in `src/data/insights/`. To edit a service page, edit `src/data/services/`. To add
a new article, drop in a new JSON file and a card on the Insights index — the route
is generated automatically.

## URLs

Clean, directory-style URLs (e.g. `/services/relief-wells/`, `/insights/relief-wells-101/`).
The legacy prototype used flat `*.dc.html` filenames; those are mapped to the new
structure and nothing links to a dead path.

## Before launch — checklist

These are placeholders carried over from the design and should be confirmed:

- **Phone number** — `+1 832 555 0100` appears in the header, footer and CTAs. Search
  the repo for `18325550100` and replace with the real 24/7 line.
- **Certifications** — ISO 9001 / API Q1·Q2 / ISNetworld badges are marked
  "confirm/replace" on the Home and About pages.
- **Operator logos** — the home trust bar lists operator names as text placeholders.
- **Team photos & hero/banners** — `public/assets/*.png` are on-brand placeholders.
  Replace each file with real photography using the **same filename** — no code change.
- **Contact form** — see below.
- **Domain** — set the real domain in `astro.config.mjs` (`site:`) for correct
  canonical/OG URLs and a future sitemap.

### Wiring up the contact form

`src/scripts/forms.js` handles the feasibility and newsletter forms. With **no
backend configured**, a submission opens the visitor's email client pre-filled to
`info@gunnarenergyservices.com` — so the form is never a dead end. To send
submissions to a real backend instead, set an endpoint either:

- globally, via `DEFAULT_ENDPOINT` in `src/scripts/forms.js`, or
- per form, via a `data-endpoint="https://…"` attribute on the `<form>`.

It posts standard `FormData`, so it works out of the box with Formspree, Basin,
Netlify Forms, or any URL that accepts a POST.

## Hosting — GitHub Pages (configured)

A GitHub Actions workflow at `.github/workflows/deploy.yml` builds this site and
publishes it to **GitHub Pages** automatically on every push to `main`. The repo
sub-path is detected at build time and injected as `BASE_PATH`, so internal links
work whether the site is served at `https://<user>.github.io/<repo>/` or at a root
domain — no code changes needed.

**One-time setup (on GitHub):**

1. Push this repo to GitHub (see below).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow runs on the next push (or trigger it under the **Actions** tab →
   *Deploy website to GitHub Pages* → *Run workflow*).
4. When it finishes, the live URL appears in the Actions run and on the Pages settings
   page — typically `https://<user>.github.io/<repo>/`.

**Pushing this repo to GitHub for the first time:**

```bash
# create an empty repo on github.com first (no README), then:
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

**Custom domain (when ready):** add your domain under Settings → Pages, set the DNS
records GitHub shows, and the site serves at the root (`/`) automatically.

### Other hosts

The build is plain static output, so it also runs anywhere else:

- **Netlify / Vercel**: base directory `web`, build `npm run build`, publish `web/dist`.
  Both add a built-in handler for the contact form.
- **S3 + CloudFront / any web server**: deploy the contents of `web/dist`; wire the
  contact form to Formspree or similar.

## Recommended next steps (post-review)

- Mobile QA pass — a lightweight responsive layer is included; the design was
  desktop-first, so small-screen layouts are worth a dedicated review.
- Add `@astrojs/sitemap` + `robots.txt` for SEO once the domain is set.
- Add JSON-LD structured data (Organization, FAQPage, Article) to deepen the
  GEO/AI-citability goals from the audit.
