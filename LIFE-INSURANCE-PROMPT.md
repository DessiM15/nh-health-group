# Life Insurance Landing Page — Build Prompt

## Overview

Build a single-page landing page for **New Horizons Benefits Group** focused on **life insurance for Texas teachers**. This should be built from scratch as a new Next.js project. I have an existing health insurance landing page for the same business — this life insurance page should match the same design system, component architecture, and quality level but with content tailored to life insurance.

---

## Tech Stack (match exactly)

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript 5**
- **Tailwind CSS 3.4**
- **Lucide React** for icons
- **PostCSS 8**

Initialize the project with `npx create-next-app@14` with TypeScript, Tailwind, ESLint, App Router, and no `src/` directory.

Install `lucide-react` as a dependency.

---

## Fonts (Google Fonts — import in globals.css)

- **Plus Jakarta Sans** (weights: 400, 500, 600, 700, 800) — display + body font
- **Lora** (weight: 400, normal + italic) — serif accent font (used in quotes/testimonials)
- **IBM Plex Mono** (weights: 400, 500) — monospace font (used in stat values)

---

## Design System — Colors

Use these EXACT color values in both the Tailwind config and CSS custom properties:

### Primary Blues (DARKER than the health insurance page — use these adjusted values)
```
--color-blue: #144F8F          (primary blue — darker than health page)
--color-blue-dark: #0A2D5A     (dark blue — deeper navy)
--color-blue-mid: #1A5FAF      (mid blue)
--color-blue-light: #E8F0FA    (light blue background)
```

### Gold Accent (same as health page)
```
--color-gold: #C9A040
--color-gold-light: #E8C97A
--color-gold-dark: #A07C20
```

### Neutrals
```
--color-white: #FFFFFF
--color-off-white: #F8FAFD
--color-light-gray: #F1F5F9
--color-slate: #334155
--color-muted: #64748B
--color-border: #CBD5E1
```

### Gradients
```
--gradient-hero: linear-gradient(135deg, #0A2D5A 0%, #0E3A6E 50%, #144F8F 100%)   ← DARKER navy tint
--gradient-gold: linear-gradient(135deg, #C9A040 0%, #E8C97A 100%)
```

---

## Tailwind Config

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#144F8F',
          dark: '#0A2D5A',
          mid: '#1A5FAF',
          light: '#E8F0FA',
        },
        gold: {
          DEFAULT: '#C9A040',
          light: '#E8C97A',
          dark: '#A07C20',
        },
        'off-white': '#F8FAFD',
        slate: '#334155',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Global CSS (app/globals.css)

Include:
- Google Fonts import for Plus Jakarta Sans (400-800), Lora (400/italic), IBM Plex Mono (400,500)
- Tailwind directives (@tailwind base, components, utilities)
- CSS custom properties for all colors, gradients, fonts, spacing, shadows
- `html { scroll-behavior: smooth; }`
- `*, *::before, *::after { box-sizing: border-box; }`
- Body: off-white background, body font, slate color
- Headings: display font, blue-dark color
- Reveal animation class:
  ```css
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  ```
- FadeUp keyframes for hero animations
- Card shadow: `0 2px 20px rgba(20, 79, 143, 0.08)`
- Card hover shadow: `0 8px 32px rgba(20, 79, 143, 0.18)`
- Card border-radius: 16px
- Button border-radius: 10px

---

## File/Folder Structure

```
app/
  layout.tsx          (root layout with fonts and metadata)
  page.tsx            (main page composing all sections)
  globals.css
components/
  layout/
    Navbar.tsx
    Footer.tsx
  sections/
    Hero.tsx
    StatsBar.tsx
    [other life insurance sections — see below]
    LeadForm.tsx
hooks/
  useScrollReveal.ts  (IntersectionObserver hook for reveal animations)
public/
  logo.png            (I will provide this — same logo as health page)
  life-insurance-hero.mp4   (I will provide this hero video)
```

---

## Logo

Use the **exact same logo** — `logo.png` in the `/public` directory. I will copy it over manually. The logo is circular with "NEW HORIZONS" arced on top and "BENEFITS GROUP" on bottom in gold text, with blue/gray/gold wave design in center.

Reference it as:
- Navbar: 64px height
- Footer: 56px height
- Company name: "New Horizons Benefits Group"

---

## useScrollReveal Hook

Create a custom hook (`hooks/useScrollReveal.ts`) using IntersectionObserver:
- Threshold: 0.15
- When element is 15% visible, add `visible` class
- Apply to elements with `reveal` class
- Call this hook once in the main page component

---

## Component Specifications

### 1. Navbar (`components/layout/Navbar.tsx`)

**Identical behavior to the health page:**
- Fixed position, z-50, full width
- Left: Logo (64px) + "New Horizons Benefits Group" text
- Center (desktop only, hidden < md): Navigation links
- Right: CTA button + mobile hamburger toggle
- **Scroll behavior**: transparent background → white background with shadow after 50px scroll
- Logo gets a white background wrapper with padding/rounded/shadow on scroll
- Text transitions from white to dark blue on scroll
- Mobile menu: hamburger icon toggles dropdown with all links + CTA
- All transitions: 300ms

**Navigation Links** (adjust for life insurance — I will provide final anchor names, use these placeholders):
- Coverage → `#coverage`
- How It Works → `#how-it-works`
- Reviews → `#testimonials`

**CTA Button**: Gold background (#C9A040), dark blue text, rounded-lg, hover to #A07C20
- Text: "Check My Life Insurance Options" (placeholder — I'll update)
- Links to: `#lead-form`

---

### 2. Hero (`components/sections/Hero.tsx`)

**Structure (same as health page but with darker overlay):**
- Full viewport height (`min-h-screen`)
- HTML5 video background: `/life-insurance-hero.mp4` (autoplay, loop, muted, playsInline, object-cover, absolute positioning)
- **Gradient overlay — DARKER navy blue tint:**
  ```
  linear-gradient(135deg, rgba(10,45,90,0.92) 0%, rgba(14,58,110,0.90) 50%, rgba(20,79,143,0.87) 100%)
  ```
  *(Notice the higher opacity values and darker blue base — this is intentionally darker than the health page)*
- SVG wave texture overlays (3 subtle wave paths at 4% white opacity — same technique as health page)
- Bottom SVG wave transition to the next section

**Hero Content (centered, staggered fadeUp animations with 0.1s increments):**
1. Icon (lucide-react Shield or similar — 56px, gold with drop shadow)
2. Headline (placeholder — I will provide final copy)
3. Gold accent bar (3px height, 80px width)
4. Subheadline (placeholder — I will provide)
5. CTA button: Gold background, dark blue text, large, rounded-xl → links to `#lead-form`
6. Trust strip: 3 items separated by dots (placeholder trust items — I will provide)

Use `clamp(2.2rem, 5vw, 3.5rem)` for headline font size.

**Use placeholder text for now — I will replace with my own copy.**

---

### 3. StatsBar (`components/sections/StatsBar.tsx`)

- Full-width gold gradient background
- 3 stats in a row (flex-col on mobile, flex-row on md+)
- Vertical dividers between stats on desktop
- Stat values: IBM Plex Mono font, 2.25rem
- Stat labels: display font, 0.8rem, uppercase, tracking-wider

**Use placeholder stats — I will provide final numbers and labels.**

---

### 4–8. Middle Sections

Build the following sections with the same card/grid patterns as the health insurance page. Use the same styling approach (reveal animations, card shadows, hover effects, gold accents, icon colors) but with **placeholder content for life insurance**. I will provide the final copy for each.

**Suggested sections (flexible — adjust as makes sense for life insurance):**

- **Coverage Options** — grid of 3-6 cards showing life insurance plan types (Term Life, Whole Life, etc.). Same card style: white bg, rounded-2xl, shadow, top-border hover effect, lucide icon, heading, description.

- **Why Life Insurance** or **Features Section** — 2-column card grid highlighting key benefits. Gold top border (4px), gold icons, white cards.

- **Who Is It For** — 3-card grid showing audience segments (Individual Teachers, Teachers with Families, Teachers Nearing Retirement). Same left-border-gold style, hover lift effect.

- **How It Works** — 3-step process with gold step circles (56px), dashed connector line on desktop, staggered reveals.

- **Testimonials** — 3-card grid with 5-star gold ratings, decorative quote mark (Lora serif, 5rem, gold 20% opacity), quote in Lora italic, horizontal divider, author avatar (from `https://ui-avatars.com/api/` with `background=14508F&color=C9A040&bold=true&size=80`), name, role.

Each section should have:
- A small uppercase label text (gold or blue)
- A large heading (display font, bold)
- Appropriate background alternation (white → off-white → light blue → white, etc.)
- `id` attribute for anchor linking with `scroll-mt-20`
- Reveal animations with staggered delays

---

### 9. Lead Form (`components/sections/LeadForm.tsx`)

**Same structure as health page:**
- Background: dark blue (#0A2D5A)
- ID: `lead-form` with `scroll-mt-20`
- White form card: max-w-2xl, rounded-2xl, p-8 md:p-12, shadow-2xl
- Heading + subheading above form fields

**Form Fields:**
1. First Name (text) — half width on md
2. Last Name (text) — half width on md
3. Email (email) — full width
4. Phone (tel) — full width
5. **Coverage Situation** (select dropdown — placeholder options for life insurance, I will update):
   - I don't have life insurance yet
   - I have a policy but want to compare
   - I need coverage for my family
   - I'm interested in retirement planning
   - My employer offers group life — is it enough?
   - Just exploring my options
6. Zip Code (text) — full width

**Input Styling:**
```
border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm
focus:outline-none focus:ring-2 focus:ring-[#14508F]/30 focus:border-[#14508F] transition
```

**Labels:** text-xs font-semibold uppercase tracking-wide text-[#0A2D5A]

**Submit Button:**
- Full width, gold bg, dark blue text, bold, text-lg, py-4, rounded-xl
- Hover: #A07C20
- Loading state: spinner SVG + "Checking your options..."
- Text: "Get My Free Coverage Review →" (placeholder)

**Success State:**
- CheckCircle2 icon (48px, gold)
- "You're All Set!" heading
- "We'll reach out within 1 business day with your personalized life insurance options." (placeholder)

**Form Submission:** POST to `https://formspree.io/f/PLACEHOLDER` (I will update the endpoint)

**Fine Print:** "Free review. No obligation. No spam. New Horizons Benefits Group | (469) 831-2672 | robert@newhorizonsbenefits.com"

---

### 10. Footer (`components/layout/Footer.tsx`)

**Identical structure to health page:**
- Background: very dark blue (#071E40 — slightly darker than health page to match the darker theme)
- Gold top border (1px)
- 3-column grid (1 col mobile, 3 md)

**Left Column:**
- Logo (56px)
- "New Horizons Benefits Group" (white, bold)
- "Rigo Cuellar | Independent Agent" (white/60)
- "202 S. Coleman Suite 200, Prosper, TX 75078" (white/50)
- "(469) 831-2672" (white/50)
- "robert@newhorizonsbenefits.com" (white/50)

**Center Column:**
- "Connect" label (uppercase, gold/80, tracking-widest)
- 4 social SVG icons: Facebook, LinkedIn, Instagram, X/Twitter
- Icons: white/60 → gold on hover

**Right Column:**
- Licensing badge: "Licensed in TX · LA · OK · CA" (gold border, gold text, rounded-full)
- "Affiliated with Teachers Pension" (white/60)
- "Serving Texas Educators" (white/50)

**Bottom Bar:**
- Copyright: "© 2026 New Horizons Benefits Group. All rights reserved." (white/40)
- Legal disclaimer about independent agency (white/30)

---

## Next.js Config

```js
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ui-avatars.com" },
    ],
  },
};
export default nextConfig;
```

---

## Key Design Differences from the Health Insurance Page

1. **Darker navy blues throughout** — the hero overlay is more opaque and uses deeper navy tones
2. **Blues shifted darker** — primary blue is #14508F instead of #1A5FAF, dark blue is #0A2D5A instead of #0F3F7A
3. **Same gold accents** — gold stays identical for brand consistency
4. **Same logo, fonts, spacing, card styles, animations** — everything else matches
5. **Different hero video** — `life-insurance-hero.mp4` instead of `health-insurance-hero.mp4`
6. **Life insurance content** — all copy, stats, form options, and section headings are about life insurance (I will provide the final content)

---

## Important Notes

- Use placeholder content throughout. Label placeholders clearly so I can find and replace them with my actual copy.
- Make sure the page is fully responsive (mobile-first with Tailwind breakpoints: sm, md, lg)
- All CTA buttons should anchor-link to `#lead-form`
- Use the reveal scroll animation on all section content (cards, text blocks)
- Use staggered animation delays (0.1s increments) on card grids
- The hero should have staggered fadeUp animations (0.1s–0.6s)
- No external animation libraries — CSS only
- Ensure the video autoplay works on mobile (muted + playsInline are required)
- Keep the code clean, typed, and well-organized with the same file structure pattern

Build the entire project. Start with the setup, then build each component, then compose them in the main page.
