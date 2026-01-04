"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

import { SOCIAL_LINKS } from "@/constants"

const { github, linkedin, twitter } = SOCIAL_LINKS

const socialLinks = [
	{
		icon: Github,
		href: github,
		label: "GitHub",
	},
	{
		icon: Linkedin,
		href: linkedin,
		label: "LinkedIn",
	},
	{
		icon: Twitter,
		href: twitter,
		label: "Twitter",
	},
]

export const HeroSocials = () => {
	return (
		<motion.div
			className="flex items-center gap-1 pt-8"
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.6 }}
		>
			{socialLinks.map((link) => (
				<Link
					key={link.label}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200"
					aria-label={link.label}
				>
					<link.icon className="w-5 h-5" />
				</Link>
			))}
		</motion.div>
	)
}
