# quangpham.dev

My personal portfolio website built with Next.js and TypeScript, featuring a beautiful dark mode UI, smooth animations, and a robust CI/CD pipeline.

## 🚀 Tech Stack

### Core

- **Next.js 16.1.1** (App Router, Turbopack)
- **React 19.2.3**
- **TypeScript 5.x**
- **Bun** (Package Manager & Runtime)

### UI & Animation

- **Tailwind CSS 3.x**
- **Framer Motion 12.x**
- **Radix UI** primitives
- **Lucide React** icons
- **Next Themes** (Dark mode)

### Development & Quality

- **Biome** (Linting & Formatting)
- **Knip** (Dead code elimination)
- **Vitest** (Unit Testing)
- **Playwright** (E2E Testing)
- **Storybook 10** (Component Development)

## 🛠️ CI/CD Pipeline

This project uses **GitHub Actions** for continuous integration and delivery.

### Git Flow Strategy

- `develop`: Main development branch. PRs merge here.
- `main`: Production branch. Deploys to Vercel.

| Workflow | Triggers | Jobs |
|----------|----------|------|
| **CI** | Push/PR to `main`, `develop` | `lint` (Biome + Knip), `typecheck` (TSC), `build` (Next.js) |
| **E2E** | PR to `main`, `develop` | `e2e` (Playwright) |
| **Dependabot** | Weekly (Mon 9AM VN) | Targets `develop` branch for npm updates |

### Git Hooks

- **pre-commit**: Runs `lint-staged` (Biome check & fix) on staged files.
- **pre-push**: Runs `typecheck` and `unit tests` to ensure quality before pushing.

## 🏃‍♂️ Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/quang-pham-dev/quangpham.dev
   cd quangpham.dev
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Environment Setup:**

   ```bash
   cp .env.example .env
   ```

4. **Start Development:**

   ```bash
   bun dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view.

## 📜 Available Scripts

### Development
- `bun dev`: Start dev server with Turbopack
- `bun build`: Build for production
- `bun start`: Start production server
- `bun storybook`: Start Storybook

### Quality Checks
- `bun check`: Run Biome lint & check
- `bun check:fix`: Auto-fix Biome issues
- `bun check:unused`: Find unused code with Knip

### Testing
- `bun test`: Run unit tests (Vitest)
- `bun test:coverage`: Generate coverage report
- `bun e2e`: Run E2E tests (Playwright)

## 📂 Project Structure

```
├── .github/          # GitHub Actions workflows & configuring
├── app/              # Next.js App Router
├── assets/           # Static assets (images, fonts)
├── components/       # React components
├── config/           # App configuration
├── e2e/              # Playwright tests
├── hooks/            # Custom React hooks
├── lib/              # Utilities & libraries
├── public/           # Public static files
└── test/             # Unit tests & setup
```

## 👤 Author

**Quang Pham** ([@quang-pham-dev](https://github.com/quang-pham-dev))

## 📄 License

MIT License
