import type { Config } from "tailwindcss"

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"rotate-gradient": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				"border-flow": {
					"0%": {
						"background-position": "100% 0, 100% 100%, 0 100%, 100% 100%",
					},
					"25%": { "background-position": "0 0, 100% 0, 0 100%, 100% 100%" },
					"50%": { "background-position": "0 0, 0 0, 0 0, 100% 0" },
					"75%": { "background-position": "100% 0, 0 0, 0 0, 0 0" },
					"100%": {
						"background-position": "100% 0, 100% 100%, 0 100%, 100% 100%",
					},
				},
				shine: {
					"0%": { "background-position": "200% center" },
					"100%": { "background-position": "-200% center" },
				},
				"border-rotate": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
			animation: {
				"rotate-gradient": "rotate-gradient 3s linear infinite",
				"border-flow": "border-flow 3s infinite",
				shine: "shine 3s linear infinite",
				"border-rotate": "border-rotate 3s linear infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config
