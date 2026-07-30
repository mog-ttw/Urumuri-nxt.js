# Urumuri — Rwanda's Intelligent Mobility Ecosystem

A multi page marketing website for **Urumuri**, a next generation mobility platform serving Kigali and nearby districts in Rwanda. The site covers transport, food delivery, courier services, merchant tools, driver programs, safety, FAQs and contact — built with **Next.js** (App Router + TypeScript).

---

## Quick start

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

To produce the static export used for deployment:

```bash
npm run build
```

This generates a fully static site in `out/`, ready to be served from any static host (the project deploys to GitHub Pages via `.github/workflows/static.yml`).

---

## Site map

| Page | Route | What to show |
|------|-------|--------------|
| Home | `/` | Brand story, three core services, stats, ecosystem overview |
| Transport | `/transport` | Electric rides, safety gear, student discounts |
| Food | `/food` | Restaurant & grocery delivery |
| Courier | `/courier` | Package delivery, same-day options |
| Merchants | `/merchants` | Business analytics and partnership tools |
| Drivers | `/drivers` | Driver recruitment, training, electric fleet |
| About | `/about` | Mission, vision, values |
| Safety | `/safety` | Safety standards and emergency support |
| Contact | `/contact` | Office, phone, email, WhatsApp |
| Reviews | `/reviews` | Customer review form |
| FAQs | `/faqs` | Frequently asked questions |

---

## Key features

1. **Homepage hero** — headline, stats (24/7, 200+ fleet, trusted across Kigali), and animated service panels.
2. **Service cards** — click through Transport, Food, and Courier pages.
3. **Dark / light mode** — toggle in the top-right header (moon/sun icon), persisted to `localStorage`.
4. **Language switcher** — English, Français, 中文, Kinyarwanda.
5. **Scroll animations** — scroll down on any page to show staggered card entrances.
6. **Mobile layout** — resize the browser or use DevTools device mode to show the hamburger menu.
7. **Contact & social** — WhatsApp link, Instagram, X, Facebook in the footer.
8. **Review form** — interactive star rating system with client-side validation and `localStorage` persistence.

---

## Brand & design

| Element | Value |
|---------|-------|
| Primary navy | `#0B1F3A` |
| Royal blue | `#1f4f92` |
| Gold accent | `#ffd700` / `#D4AF37` |
| Headings font | Bricolage Grotesque |
| Body font | DM Sans |
| Style | Human, playful motion — bounce entrances, slight card tilt, no heavy glass/AI effects |

---

## Tech stack

- **Next.js** (App Router, TypeScript) — statically exported (`output: 'export'`), no server required
- **React Context** — theme (light/dark) and language (en/fr/zh/rw) state, persisted to `localStorage`
- **next/font** — self-hosted Bricolage Grotesque and DM Sans
- **Hand-written CSS** — custom properties, responsive grid, scroll/hover animations (ported from the original static site)

---

## Project structure

```
Urumuri/
├── app/
│   ├── layout.tsx           # Root layout: fonts, theme/language providers, header/footer
│   ├── globals.css          # Global styles and animations
│   ├── page.tsx             # Homepage
│   ├── transport/           # Transport service page
│   ├── food/                # Food delivery page
│   ├── courier/              # Courier service page
│   ├── merchants/            # Merchant partnerships
│   ├── drivers/              # Driver program
│   ├── about/                # Mission, vision, values
│   ├── safety/                # Safety information
│   ├── contact/                # Contact details
│   ├── reviews/                 # Customer review form
│   └── faqs/                    # Frequently asked questions
├── components/               # Header, Footer, HeroVisual, shared UI
├── lib/                      # Translations, theme/language contexts, scroll-reveal hook
└── public/                   # Static assets
```

---

## Contact (from the site)

- **Phone:** +250 793 155 154
- **Email:** info@urumuri.rw
- **Office:** Kigali Innovation District, Kigali, Rwanda
- **WhatsApp:** [+250 793 155 154](https://api.whatsapp.com/send/?phone=%2B250793155154)

---

## License

© 2026 Urumuri. All rights reserved.
