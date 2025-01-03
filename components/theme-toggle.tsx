"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export const ThemeToggle = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof Button>
>((_props, ref) => {
	const { setTheme, theme } = useTheme()

	return (
		<Button
			ref={ref}
			variant="ghost"
			size="icon"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			<motion.div
				initial={false}
				animate={{ rotate: theme === "light" ? 0 : 180 }}
				transition={{ duration: 0.3 }}
			>
				{theme === "light" ? (
					<Sun className="h-auto w-auto" />
				) : (
					<Moon className="h-auto w-auto" />
				)}
			</motion.div>
		</Button>
	)
})

ThemeToggle.displayName = "ThemeToggle"
