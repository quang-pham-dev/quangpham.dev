"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const HeaderThemeToggle = () => {
	const { setTheme, theme } = useTheme()
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) return null

	const isDark = theme === "dark"

	return (
		<button
			type="button"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className="rounded-full p-2.5 text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
			aria-label="Toggle theme"
		>
			{isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
		</button>
	)
}
