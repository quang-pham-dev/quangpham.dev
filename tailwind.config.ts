import type { Config } from "tailwindcss"

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "1.5rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)"],
				mono: ["var(--font-geist-mono)"],
				display: ["var(--font-syne)"],
			},
			fontSize: {
				display: [
					"clamp(3rem, 15vw, 8rem)",
					{ lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "800" },
				],
				"display-sm": [
					"clamp(3rem, 6vw, 5rem)",
					{ lineHeight: "1.0", letterSpacing: "-0.03em", fontWeight: "700" },
				],
				title: [
					"clamp(1.5rem, 4vw, 2.5rem)",
					{ lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" },
				],
			},
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
			},
			animation: {
				"rotate-gradient": "rotate-gradient 3s linear infinite",
				"border-flow": "border-flow 3s infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config
