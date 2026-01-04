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
			className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-all duration-200"
			aria-label="Toggle theme"
		>
			{isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
		</button>
	)
}
