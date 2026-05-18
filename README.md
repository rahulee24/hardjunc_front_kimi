# HardJunc

A premium, animation-rich landing page for HardJunc — the intelligent workspace for hardware creators. Built with React, TypeScript, Vite, Tailwind CSS, GSAP, and Framer Motion.

![HardJunc Preview](public/images/capability-1.jpg)

## Features

- **Custom Cursor** — Interactive particle-trail cursor with green glow effects
- **Digital Rain Background** — Canvas-based falling code characters with ripple physics (green themed)
- **Grid Background** — Animated grid with pulsing intersection dots
- **Scroll Animations** — GSAP-powered scroll-triggered reveals throughout
- **Framer Motion** — Smooth entrance animations and hover interactions
- **AI Demo Section** — Typewriter-style code editor with chat interface
- **Capability Detail Pages** — Sub-routes for each feature with rich content
- **Responsive Design** — Fully responsive across all device sizes
- **Premium Typography** — EB Garamond + GeistMono + Inter font stack
- **Liquid Glass Button** — Custom SVG-filter glassmorphism CTA buttons

## Tech Stack

- React 19 + TypeScript
- Vite (build tool)
- Tailwind CSS 3.4
- shadcn/ui components
- GSAP (scroll animations)
- Framer Motion (entrance animations)
- React Router (client-side routing)
- HTML5 Canvas (custom effects)

## Project Structure

```
my-app/
├── public/
│   ├── images/              # Generated assets (circuit boards, hardware imagery)
│   └── videos/              # Cinematic background video (optional)
├── src/
│   ├── components/
│   │   ├── CustomCursor.tsx    # Particle trail cursor effect
│   │   ├── GridBackground.tsx  # Animated grid with dots
│   │   └── LiquidGlassButton.tsx # Glassmorphism button
│   ├── sections/
│   │   ├── Hero.tsx            # Hero with digital rain + badge
│   │   ├── Problems.tsx        # Problem cards section
│   │   ├── Curriculum.tsx      # Capabilities hover-reveal
│   │   ├── CinematicVision.tsx # Infrastructure section
│   │   ├── AiDemo.tsx          # AI assistant demo
│   │   ├── AlumniArchives.tsx  # Platform grid
│   │   ├── Footer.tsx          # Footer with branding
│   │   ├── Navigation.tsx      # Fixed nav bar
│   │   ├── AmberCascades.tsx  # Canvas digital rain effect
│   │   └── CapabilityDetail.tsx # Detail page template
│   ├── config.ts             # All content configuration
│   ├── App.tsx               # Main app with routing
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles + animations
├── vercel.json              # Vercel deployment config
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```
   Output will be in `dist/` directory.

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project root**
   ```bash
   cd my-app
   vercel --prod
   ```

### Option 2: Deploy via GitHub + Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hardjunc.git
   git push -u origin main
   ```

2. **Connect on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click **"Add New Project"**
   - Import your GitHub repository
   - Framework Preset: **Vite**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Click **Deploy**

3. **Vercel Settings**
   The `vercel.json` file in this project already handles:
   - SPA routing (all routes → index.html)
   - Static asset caching headers

### Option 3: Deploy via Vercel Dashboard (Drag & Drop)

1. Build the project locally:
   ```bash
   npm run build
   ```

2. Go to [vercel.com](https://vercel.com)

3. Drag and drop the `dist/` folder onto the dashboard

4. Your site is live instantly

## Customization

All content is configurable in `src/config.ts`:

- `siteConfig` — Brand name
- `navigationConfig` — Nav links and CTA
- `heroConfig` — Hero badge, title, subtitle, CTA
- `capabilitiesConfig` — Problem/solution cards
- `architectureConfig` — Infrastructure section
- `researchConfig` — Platform grid items
- `footerConfig` — Footer content

## Animations Overview

| Section | Animation | Tech |
|---------|-----------|------|
| Hero | Digital rain canvas + grid + badge entrance | Canvas + Framer Motion |
| Problems | Staggered card reveals + hover lift | GSAP + CSS |
| Capabilities | Scroll-triggered fade-in + hover image reveal | GSAP + CSS |
| Infrastructure | Scale-in placeholder + text reveal | Framer Motion + GSAP |
| AI Demo | Typewriter code reveal on scroll | IntersectionObserver + CSS |
| Platform Grid | Staggered grid entrance + image hover | GSAP + CSS |
| Footer | Heading + text fade-in | Framer Motion |
| Cursor | Particle trail + pulse ring + click burst | Canvas 2D |
| Nav | Scroll-triggered glass background | React state + CSS |

## License

© 2026 HardJunc. All rights reserved.
