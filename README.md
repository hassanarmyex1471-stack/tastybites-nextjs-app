# TastyBites - Next.js (App Router) & Tailwind CSS

A production-grade, gourmet food ordering platform designed with **Warm Culinary Modern** aesthetics, featuring seamless cart drawers, coupon codes, culinary categories, and instant ordering.

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- Node.js 18.18+ or 20+
- npm, pnpm, or bun

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚢 Deploying to Vercel

### Method A: Deploy with Vercel CLI (Fastest)
1. Install Vercel CLI globally (if not already installed):
   ```bash
   npm i -g vercel
   ```
2. Run `vercel` in the project root:
   ```bash
   vercel
   ```
3. Follow the CLI prompts. For production deployment:
   ```bash
   vercel --prod
   ```

### Method B: Deploy via GitHub + Vercel Dashboard
1. Initialize a Git repo and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of TastyBites Next.js app"
   git remote add origin https://github.com/<your-username>/tastybites.git
   git push -u origin main
   ```
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import your **tastybites** repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**!

## 📁 Project Architecture (App Router)
```
├── app/
│   ├── api/
│   │   ├── checkout/route.ts  # Order submission API
│   │   └── dishes/route.ts    # Dishes & menu API
│   ├── globals.css            # Custom scrollbars & Tailwind base
│   ├── layout.tsx             # Root layout with Plus Jakarta Sans & Cart Provider
│   └── page.tsx               # Homepage with Hero, Dishes, Reviews, Contact
├── components/
│   ├── Navbar.tsx             # Sticky header with cart trigger & order CTA
│   ├── Hero.tsx               # High-impact culinary hero with floating badges
│   ├── Categories.tsx         # Cuisine collection carousel
│   ├── DishGrid.tsx           # Category tabs, live dish cards & quick add
│   ├── CartDrawer.tsx         # Slide-over order cart with promo coupon & checkout
│   ├── WhyUs.tsx              # 3 key value pillars
│   ├── Testimonials.tsx       # Food critic and customer reviews
│   ├── ContactSection.tsx     # Contact details & newsletter signup
│   └── Footer.tsx             # Brand footer & links
├── context/
│   └── CartContext.tsx        # React Context for items, pricing & coupons
├── lib/
│   ├── data.ts                # Authentic dishes and photography
│   └── types.ts               # Shared TypeScript models
├── next.config.ts             # Remote image configuration
├── tailwind.config.ts         # Culinary design tokens & warm elevation shadows
└── package.json
```

## 🎨 Design System
- **Font**: Plus Jakarta Sans
- **Primary Color**: `#ff5722` (Flame Orange)
- **Neutral Surface**: `#fbf8ff` (Warm Off-White)
- **Promo Coupon**: Use `HOTBITES` for Free Delivery!
