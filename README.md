# Pluglie

Marketing site for Pluglie — a service provider that builds functional ecommerce stores (with every payment plugin) and custom CRM systems for growing companies.

## Stack

- React 18
- Vite 5
- lucide-react (icons)
- Plain CSS (custom-property based design tokens)

## Brand

| Token       | Value     | Usage                  |
| ----------- | --------- | ---------------------- |
| Primary     | `#0A1931` | Text, dark sections    |
| Accent      | `#B3CFE5` | Highlights, accents    |
| Background  | `#F6FAFD` | Page background        |

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

## Branding & assets

Drop these files into the `public/` folder. Only `logo.png` is required — the rest are optional but recommended.

| File              | Used for                                          | Notes                                    |
| ----------------- | ------------------------------------------------- | ---------------------------------------- |
| `logo.png`        | Navbar + footer brand, favicon, OG/Twitter image  | **Required.** Your full logo (icon + wordmark). |
| `logo-light.png`  | Footer logo on dark navy background               | Optional. A light/white version. If absent, the footer falls back to `logo.png` on a white pill. |
| `og-image.png`    | Social link previews (1200×630)                   | Optional. Wider banner. If absent, `logo.png` is used. To enable, edit `index.html` and change the OG/Twitter `image` tags. |
| `favicon.ico`     | Older browsers                                    | Optional. Modern browsers use `logo.png` from the link tag. |

## Contact form (Formspree)

The contact form posts to [Formspree](https://formspree.io). To enable real submissions:

1. Sign up at https://formspree.io and create a new form.
2. Copy the form ID from your endpoint URL — for `https://formspree.io/f/xnnzlevp`, the ID is `xnnzlevp`.
3. Copy `.env.example` to `.env.local` and paste the ID:
   ```
   VITE_FORMSPREE_ID=xnnzlevp
   ```
4. Restart `npm run dev` so Vite picks up the new env var.

Without an ID set, the form runs in demo mode — it validates and shows a success state but doesn't actually send anything (and logs a warning to the console). Anti-spam honeypot field is included.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
pluglie/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Services.jsx
        ├── Features.jsx
        ├── Pricing.jsx
        ├── Testimonials.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Sections

- **Hero** — headline, CTAs, key stats, animated dashboard preview
- **Services** — Ecommerce websites and Custom CRM systems
- **Features** — Why Pluglie (6 reasons)
- **Pricing** — Starter / Growth / Enterprise tiers
- **Testimonials** — Client quotes
- **Contact** — Validated UI-only contact form (no backend wired up)

The contact form validates on the client and shows a success state. Wire it up to your provider of choice (Formspree, Resend, your own API, etc.) when ready.
