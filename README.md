# Tazty - Hyperlocal Food Delivery 🍔🚀

**Tazty** is a modern, hyperlocal food delivery platform built for Madurai, powered by the **ONDC (Open Network for Digital Commerce)** government protocol. We connect foodies with their favorite local restaurants and hidden gems, offering lightning-fast delivery and a seamless user experience.

![Tazty Hero Section](https://github.com/sujansaitej/tazty/assets/placeholder-hero.png)

## 🌟 Features

- **Hyperlocal Focus**: Discover amazing local restaurants and food joints in your immediate neighborhood.
- **ONDC Integration**: Built on the open, interoperable Beckn protocol for fair and transparent commerce.
- **Modern UI/UX**:
  - **Dynamic Hero Section**: Features interactive **Light Rays** (WebGL via OGL) and **Aurora** background effects.
  - **Resizable Navbar**: Smooth scrolling and responsive navigation with glassmorphism.
  - **Dark Mode Aesthetics**: Sleek dark blue and green themes for a premium feel.
  - **Glowing Effects**: Interactive hover states on feature cards.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop experiences.
- **Performance**: Static site generation (SSG) and optimizations with Next.js 16.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: 
  - [Tailwind CSS v4](https://tailwindcss.com/)
  - [Shadcn/UI](https://ui.shadcn.com/) (Component Library)
- **Icons**: [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler-icons.io/)
- **Animations & Effects**:
  - [Motion](https://motion.dev/) (formerly Framer Motion)
  - [OGL](https://github.com/oframe/ogl) (WebGL Light Rays)
  - CSS Modules & Animations
- **Package Manager**: NPM

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js 18.x or higher
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sujansaitej/tazty.git
   cd tazty
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `.next` folder.

## 📂 Project Structure

```
tazty/
├── app/                  # Next.js App Router pages and layout
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with fonts and metadata
│   └── page.tsx          # Main Landing Page
├── components/           # React components
│   ├── ui/               # Reusable UI components (Shadcn, Custom)
│   │   ├── light-rays.tsx # WebGL Light Ray Effect
│   │   ├── resizable-navbar.tsx
│   │   └── ...
│   ├── hero.tsx          # Hero Section
│   ├── features-grid.tsx # Features Section
│   ├── footer.tsx        # Footer Section
│   └── ...
├── public/               # Static assets (images, fonts, icons)
├── package.json          # Project dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration (if present)
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Customizations

- **Fonts**: The project uses **Open Sans** (Google Fonts) and custom fonts like **DnType**.
- **Colors**: The primary brand color is **Tazty Green** (`#00C853`) with Dark Blue/Slate backgrounds (`#0B1120`, `#012010`).

## 📄 License

This project is proprietary software of Tazty. All rights reserved.

---

Built with ❤️ for Valar Madurai by **Sujan Saitej**.


*Automatically synced with your [v0.app](https://v0.app) deployments*
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/sujansaitejs-projects/v0-landing-page-design)

## Deployment
Your project is live at:
**[https://vercel.com/sujansaitejs-projects/v0-landing-page-design](https://vercel.com/sujansaitejs-projects/v0-landing-page-design)**

## Build your app
Continue building your app on:
**[https://v0.app/chat/nRrX7ykJP1Y](https://v0.app/chat/nRrX7ykJP1Y)**

## How It Works
1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
