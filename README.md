# quangpham.dev

My personal portfolio website built with Next.js and TypeScript, featuring a beautiful dark mode UI and smooth animations.

## Tech Stack

### Core

- Next.js 15.1.3
- React 19.0.0
- TypeScript 5
- TailwindCSS 3.4.1

### UI & Animation

- Framer Motion 11.15.0
- Lucide React 0.469.0
- Next Themes 0.4.4
- Radix UI
- Tailwind Merge 2.6.0
- Tailwind Animate 1.0.7

### Analytics & Monitoring

- Vercel Analytics
- Vercel Speed Insights
- React Scan 0.0.54

### Development Tools

- Biome 1.9.4
- Vitest 2.1.8
- Playwright 1.49.1
- Storybook 8.4.7
- Knip 5.41.1
- Lefthook 1.10.1

## Prerequisites

- Node.js
- Bun (recommended)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/quang-pham-dev/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
bun install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

### Development

- `bun dev` - Start development server with Turbopack
- `bun build` - Build for production
- `bun start` - Start production server
- `bun storybook` - Start Storybook development server

### Testing & Code Quality

- `bun test` - Run Vitest tests
- `bun test:ui` - Run Vitest UI
- `bun test:coverage` - Generate test coverage
- `bun e2e` - Run Playwright E2E tests
- `bun e2e:ui` - Run Playwright tests with UI
- `bun lint` - Run ESLint
- `bun check` - Run Biome checks
- `bun check:fix` - Fix Biome issues
- `bun check:unused` - Check for unused exports
- `bun check:unused:fix` - Fix unused exports

## Project Structure

- `app/` - Next.js app router pages and layouts
- `assets` - App assets
- `components/` - Reusable UI components
- `config/` - Application configuration
- `constants/` - Global constants
- `hooks` - Custom hooks
- `lib/` - Utility functions and libraries
- `public/` - Static assets
- `e2e/` - End-to-end tests
- `test/` - Unit tests

## Features

- ⚡️ Next.js 15 with App Router
- 💨 Tailwind CSS for styling
- 🎨 Dark mode support
- 🔍 SEO optimized
- 📱 Fully responsive
- ✨ Modern animations with Framer Motion
- 📊 Performance monitoring
- 🧪 Testing with Vitest and Playwright
- 📚 Component documentation with Storybook
- 🔍 Type checking with TypeScript
- 🧹 Code quality tools (Biome, Knip)

## Author

Quang Pham ([@quangpham_dev](https://twitter.com/quangpham_dev))

## License

MIT License
