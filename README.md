# CodeMasheen - Full-Stack Digital Agency Website

A stunning, interactive website built with Next.js 14, featuring Three.js 3D graphics, Framer Motion animations, and a modern glassmorphism design.

![CodeMasheen](./public/og-image.jpg)

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D Graphics:** Three.js with React Three Fiber
- **Animations:** Framer Motion
- **Icons:** Lucide React & Heroicons
- **Deployment:** Vercel-ready

## ✨ Features

### Interactive UI
- 🌟 3D animated hero section with floating geometries
- 🎨 Custom cursor glow effect
- 💫 Smooth scroll animations and parallax effects
- 🎭 Glassmorphism design with gradient borders
- 📱 Fully responsive design

### Sections
- **Hero:** 3D background with particle effects and floating shapes
- **Services:** Full-stack offerings (UI/UX, Frontend, Backend, Cloud, Mobile, DevOps, GPU/AI)
- **About:** Company story with animated timeline
- **Process:** Step-by-step workflow visualization
- **Portfolio:** Filterable project showcase with hover effects
- **Clients:** Infinite scrolling logo carousel
- **Tech Stack:** Interactive technology badges
- **Testimonials:** Carousel with client reviews
- **Contact:** Animated form with validation

### Performance & SEO
- ⚡ Optimized for Core Web Vitals
- 🔍 Complete SEO metadata and OpenGraph
- 📊 Structured data (JSON-LD)
- 🌐 Semantic HTML
- ♿ Accessibility-focused

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/codemasheen/website.git

# Navigate to the project
cd codemasheen

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
codemasheen/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & Tailwind
│   │   ├── layout.tsx       # Root layout with SEO
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── 3d/              # Three.js components
│   │   │   ├── Scene.tsx
│   │   │   ├── FloatingGeometry.tsx
│   │   │   └── ParticleField.tsx
│   │   ├── layout/          # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/        # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Works.tsx
│   │   │   ├── Clients.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/              # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── GlassCard.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── AnimatedText.tsx
│   │       ├── CursorGlow.tsx
│   │       ├── CountUp.tsx
│   │       └── ...
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                   # Static assets
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  primary: { /* Blue shades */ },
  accent: { /* Purple shades */ },
  neon: { /* Neon highlights */ },
  dark: { /* Dark mode colors */ },
}
```

### Fonts
The site uses custom fonts:
- **Clash Display** - Headlines
- **Satoshi** - Body text
- **JetBrains Mono** - Code/monospace

### 3D Scene
Modify `src/components/3d/Scene.tsx` to customize:
- Floating geometries
- Particle count and colors
- Camera position and controls

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

## 📝 Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=https://codemasheen.in
```

## 📄 License

MIT License - feel free to use this template for your own projects!

## 🤝 Contact

- **Website:** [codemasheen.in](https://codemasheen.in)
- **Email:** hello@codemasheen.in
- **Twitter:** [@codemasheen](https://twitter.com/codemasheen)

---

Built with ❤️ by CodeMasheen
