"use client"

import { Github, Linkedin, Twitter } from "lucide-react"

import { SOCIAL_LINKS } from "@/constants"
import { ANALYTICS_EVENTS } from "@/lib/analytics/events"
import { trackClick } from "@/lib/analytics/track"

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
		<div
			className="flex items-center gap-1 pt-8 animate-in"
			style={{ animationDelay: "600ms" }}
		>
			{socialLinks.map((link) => (
				<a
					key={link.label}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200"
					aria-label={link.label}
					onClick={() =>
						trackClick(ANALYTICS_EVENTS.CLICK_SOCIAL, { platform: link.label })
					}
				>
					<link.icon className="w-5 h-5" />
				</a>
			))}
		</div>
	)
}
