"use client"

import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import { HeaderContactButton } from "./contact-button"
import { HeaderLanguageToggle } from "./language-toggle"
import { HeaderLogo } from "./logo"
import { HeaderNav } from "./nav"
import { HeaderThemeToggle } from "./theme-toggle"

export default function Header() {
	const { scrollY } = useScroll()
	const [hidden, setHidden] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious() ?? 0
		if (latest > 100 && latest > previous) {
			setHidden(true)
		} else {
			setHidden(false)
		}

		if (latest > 50) setScrolled(true)
		else setScrolled(false)
	})

	return (
		<motion.header
			variants={{
				visible: { y: 0, opacity: 1 },
				hidden: { y: "-100%", opacity: 0 },
			}}
			animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.35, ease: "easeInOut" }}
			className="fixed top-0 left-0 right-0 z-50 pt-6 px-6 lg:px-12 flex justify-center w-full"
		>
			<nav
				className={`flex items-center justify-between w-full max-w-[1600px] transition-all duration-300 ${
					scrolled
						? "py-3 px-6 rounded-full glass-panel shadow-sm bg-background/80"
						: "py-2 bg-transparent"
				}`}
			>
				<HeaderLogo />

				<div className="flex items-center gap-6 lg:gap-8">
					<HeaderNav />
					<div className="hidden sm:flex items-center gap-2 border-l border-border/40 pl-6">
						<HeaderLanguageToggle />
						<HeaderThemeToggle />
					</div>
					<HeaderContactButton />
				</div>
			</nav>
		</motion.header>
	)
}
