"use client"

import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import * as React from "react"
import { Button } from "@/components/ui/button"

export const ThemeToggle = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof Button>
>((_props, ref) => {
	const { setTheme, theme } = useTheme()
	const [isMounted, setIsMounted] = React.useState(false)
	const prefersReducedMotion = React.useRef(
		typeof window !== "undefined"
			? window.matchMedia("(prefers-reduced-motion: reduce)").matches
			: false
	).current

	React.useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null
	}

	const isDark = theme === "dark"
	const label = isDark ? "Switch to light theme" : "Switch to dark theme"

	return (
		<Button
			ref={ref}
			variant="ghost"
			size="icon"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			aria-label={label}
			aria-pressed={isDark}
			className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
		>
			<motion.div
				initial={false}
				animate={prefersReducedMotion ? {} : { rotate: isDark ? 180 : 0 }}
				transition={{ duration: 0.3 }}
			>
				{isDark ? (
					<Moon className="h-full w-full" aria-hidden="true" />
				) : (
					<Sun className="h-full w-full" aria-hidden="true" />
				)}
			</motion.div>
			<span className="sr-only">{label}</span>
		</Button>
	)
})

ThemeToggle.displayName = "ThemeToggle"
