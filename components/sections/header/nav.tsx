"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { RESUME_URL, SITE_URL } from "@/constants"
import { useTranslations } from "@/hooks/use-translation"

const { projects, blogs } = SITE_URL

const navLinks = [
	{
		labelKey: "navProjects" as const,
		href: projects,
	},
	{
		labelKey: "navResume" as const,
		href: RESUME_URL,
	},
	{
		labelKey: "navBlog" as const,
		href: blogs,
	},
]

export const HeaderNav = () => {
	const { t } = useTranslations()
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<div className="hidden sm:flex items-center gap-8">
			{navLinks.map((link, index) => (
				<a
					key={link.labelKey}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					className="relative text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-200 py-2 uppercase"
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					{t(link.labelKey)}
					{hoveredIndex === index && (
						<motion.span
							layoutId="nav-hover"
							className="absolute left-0 right-0 -bottom-1 h-[2px] bg-accent"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ type: "spring", stiffness: 300, damping: 20 }}
						/>
					)}
				</a>
			))}
		</div>
	)
}
