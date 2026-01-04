"use client"

import { motion } from "framer-motion"
import { HeaderContactButton } from "./contact-button"
import { HeaderLanguageToggle } from "./language-toggle"
import { HeaderLogo } from "./logo"
import { HeaderNav } from "./nav"
import { HeaderThemeToggle } from "./theme-toggle"

export default function Header() {
	return (
		<motion.header
			className="relative z-10 w-full px-6 lg:px-12 py-6"
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.1 }}
		>
			<nav className="max-w-7xl mx-auto flex items-center justify-between">
				<HeaderLogo />

				<div className="flex items-center gap-8">
					<HeaderNav />
					<HeaderLanguageToggle />
					<HeaderThemeToggle />
					<HeaderContactButton />
				</div>
			</nav>
		</motion.header>
	)
}
