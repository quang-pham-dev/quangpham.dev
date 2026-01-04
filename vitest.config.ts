/// <reference types="vitest" />
import react from "@vitejs/plugin-react"
import viteTsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"

export default defineConfig({
	plugins: [react(), viteTsconfigPaths()],
	test: {
		include: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
		coverage: {
			reportsDirectory: "vitest-report",
			include: ["app/**/*", "components/**/*", "lib/**/*"],
			exclude: [
				"node_modules",
				"**/index.ts",
				"app/layout.tsx",
				"app/page.tsx",
				"constants/*",
				"lib/providers/*",
				"**/*.stories.tsx",
				"e2e/*",
				"**/*.tsx",
				"**/.DS_Store",
				"app/**/robot.ts",
				"app/**/sitemap.ts",
				"app/**/opengraph-image.tsx",
			],
			thresholds: {
				statements: 80,
				branches: 75,
				functions: 80,
				lines: 80,
			},
		},
		css: true,
		environment: "happy-dom",
		exclude: ["node_modules", "e2e/*", "dist/*", ".next/*"],
		globals: true,
		reporters: ["default", "html"],
		setupFiles: "./test/setup-tests.ts",
	},
})
