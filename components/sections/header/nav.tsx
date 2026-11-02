"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { RESUME_URL } from "@/constants"
import { useTranslations } from "@/hooks/use-translation"
import { SPRING } from "@/lib/motion/spring"

const navLinks = [
	{ labelKey: "navProjects" as const, href: "#work" },
	{ labelKey: "navExperience" as const, href: "#experience" },
	{ labelKey: "navApproach" as const, href: "#approach" },
	{ labelKey: "navResume" as const, href: RESUME_URL },
]

export const HeaderNav = () => {
	const { t } = useTranslations()
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<div className="hidden sm:flex items-center gap-8">
			{navLinks.map((link, index) => {
				const isExternal = !link.href.startsWith("#")

				return (
					<a
						key={link.labelKey}
						href={link.href}
						target={isExternal ? "_blank" : undefined}
						rel={isExternal ? "noopener noreferrer" : undefined}
						className="relative py-2 text-sm font-medium tracking-wide text-foreground/80 transition-colors duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
						onMouseEnter={() => setHoveredIndex(index)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						{t(link.labelKey)}
						<AnimatePresence>
							{hoveredIndex === index && (
								<motion.span
									layoutId="nav-hover"
									className="absolute left-0 right-0 -bottom-1 h-[2px] bg-accent"
									initial={{ opacity: 0, scaleX: 0 }}
									animate={{ opacity: 1, scaleX: 1 }}
									exit={{ opacity: 0, scaleX: 0 }}
									transition={SPRING.nav}
								/>
							)}
						</AnimatePresence>
					</a>
				)
			})}
		</div>
	)
}
