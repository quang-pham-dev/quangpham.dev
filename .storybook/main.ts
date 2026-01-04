import type { StorybookConfig } from "@storybook/nextjs-vite"

const config: StorybookConfig = {
	stories: ["../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-docs",
		"@storybook/addon-a11y",
	],
	framework: "@storybook/nextjs-vite",
}

export default config
