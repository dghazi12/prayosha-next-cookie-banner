# Prayosha Threading & Wax Bar — Website

A modern, SEO-optimized website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** DM Serif Display + DM Sans (Google Fonts)
- **SEO:** JSON-LD structured data, dynamic metadata, sitemap.xml, robots.txt

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (header, footer, SEO metadata, JSON-LD)
│   ├── page.tsx            # Homepage (hero slider, services preview, stats)
│   ├── globals.css         # Tailwind directives + custom animations
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   ├── robots.ts           # Auto-generated robots.txt
│   ├── not-found.tsx       # Custom 404 page
│   ├── services/
│   │   └── page.tsx        # Services & pricing (tabbed interface)
│   ├── locations/
│   │   ├── page.tsx        # All locations listing
│   │   └── [id]/
│   │       └── page.tsx    # Individual location detail + Google Maps
│   ├── points/
│   │   └── page.tsx        # Prayosha Points rewards program
│   └── careers/
│       └── page.tsx        # Careers page with application form
├── components/
│   ├── Header.tsx          # Sticky header with responsive nav
│   ├── Footer.tsx          # Site footer with locations & contact
│   ├── HeroSlider.tsx      # Auto-rotating hero banner
│   ├── StatsBar.tsx        # Statistics bar (locations, clients, rating)
│   ├── ServicesTabs.tsx    # Tabbed services/pricing component
│   └── CareersForm.tsx     # Job application form with reCAPTCHA
└── data/
    ├── locations.ts        # Location data (addresses, hours, coords)
    └── services.ts         # Service categories & pricing
```

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero slider, service cards, promo banner, stats |
| `/services` | Tabbed pricing tables for Waxing, Threading, Tinting, Facials |
| `/locations` | 5 location cards with addresses, phone, hours |
| `/locations/[id]` | Individual location with hours, map, contact, description |
| `/points` | Prayosha Points loyalty program with tier breakdown |
| `/careers` | Job listings, requirements, application form with reCAPTCHA |

## Things to Customize

### Book Now Links
All "Book now" and "Book This Location" buttons have empty `href=""`. Replace with your booking system URL.

### Google Maps API Key
The location detail pages use a Google Maps Embed API key. Replace `AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8` in `src/app/locations/[id]/page.tsx` with your own key for production.

### Service Pricing
All pricing in `src/data/services.ts` is placeholder. Update with real prices from the client.

### reCAPTCHA
The careers form has a visual reCAPTCHA placeholder. For production, integrate the real Google reCAPTCHA v2/v3:
1. Get keys from https://www.google.com/recaptcha
2. Install `react-google-recaptcha` package
3. Replace the checkbox in `CareersForm.tsx`

### Domain / URLs
Update the domain in these files for production:
- `src/app/layout.tsx` (metadata canonical, openGraph url)
- `src/app/sitemap.ts` (baseUrl)
- `src/app/robots.ts` (sitemap url)

## SEO Features

- ✅ JSON-LD structured data (BeautySalon schema)
- ✅ Dynamic page-level `<title>` and `<meta description>`
- ✅ Open Graph & Twitter card metadata per page
- ✅ Auto-generated `sitemap.xml`
- ✅ Auto-generated `robots.txt`
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Canonical URLs
- ✅ `generateStaticParams` for pre-rendered location pages

## Accessibility

- ✅ Skip-to-content link
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigable (tab, enter)
- ✅ Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`)
- ✅ Screen reader-only table headers
- ✅ Color contrast meets WCAG AA
- ✅ Focus-visible styles
- ✅ Responsive mobile menu with aria-expanded
