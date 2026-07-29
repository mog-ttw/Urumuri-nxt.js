# Urumuri — Rwanda's Intelligent Mobility Ecosystem

A multi page marketing website for **Urumuri**, a next generation mobility platform serving Kigali and nearby districts in Rwanda. The site covers transport, food delivery, courier services, merchant tools, driver programs, safety, and contact   built with pure HTML, CSS, and JavaScript.

---

## Quick start

### Launch local server

```bash
cd /Users/Daniel/Desktop/Urumuri
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## Site map

| Page | File | What to show |
|------|------|--------------|
| Home | `index.html` | Brand story, three core services, stats, ecosystem overview |
| Transport | `transport.html` | Electric rides, safety gear, student discounts |
| Food | `food.html` | Restaurant & grocery delivery |
| Courier | `courier.html` | Package delivery, same-day options |
| Merchants | `merchants.html` | Business analytics and partnership tools |
| Drivers | `drivers.html` | Driver recruitment, training, electric fleet |
| About | `about.html` | Mission, vision, values |
| Safety | `safety.html` | Safety standards and emergency support |
| Contact | `contact.html` | Office, phone, email, WhatsApp |
| Reviews | `reviews.html` | Customer review form |

---

## Key features

1. **Homepage hero** — headline, stats (24/7, 200+ fleet, trusted across Kigali), and animated service panels.
2. **Service cards** — click through Transport, Food, and Courier pages.
3. **Dark / light mode** — toggle in the top-right header (moon/sun icon).
4. **Language switcher** — English, Français, 中文, Kinyarwanda (auto injected by `script.js`).
5. **Scroll animations** — scroll down on any page to show staggered card entrances.
6. **Mobile layout** — resize the browser or use DevTools device mode to show the hamburger menu.
7. **Contact & social** — WhatsApp link, Instagram, X, Facebook in the footer.
8. **Review form** — Interactive star rating system with form validation.

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

- **HTML5** — semantic, multi page structure
- **CSS3** — custom properties, responsive grid, scroll/hover animations
- **JavaScript (vanilla)** — navigation, theme toggle, i18n, scroll observer, parallax, review form
- **No build step** — open or serve the folder directly

---

## Project structure

### Essential files (for deployment)

```
Urumuri/
├── index.html              # Homepage
├── transport.html          # Transport service page
├── food.html               # Food delivery page
├── courier.html            # Courier service page
├── merchants.html          # Merchant partnerships
├── drivers.html            # Driver program
├── about.html              # Mission, vision, values
├── safety.html             # Safety information
├── contact.html            # Contact details
├── reviews.html            # Customer review form
├── styles.css              # Global styles and animations
├── script.js               # Interactivity, i18n, theme
└── assets/                 # Images and media assets
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
