"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Magnetic } from "@/components/ui/magnetic"
import { SOCIAL_LINKS } from "@/constants"
import { useTranslations } from "@/hooks/use-translation"
import { ANALYTICS_EVENTS } from "@/lib/analytics/events"
import { trackClick } from "@/lib/analytics/track"

const socialLinks = [
	{
		id: "github",
		icon: Github,
		href: SOCIAL_LINKS.github,
	},
	{
		id: "linkedin",
		icon: Linkedin,
		href: SOCIAL_LINKS.linkedin,
	},
	{
		id: "twitter",
		icon: Twitter,
		href: SOCIAL_LINKS.twitter,
	},
]

export const HeroSocials = () => {
	const { t } = useTranslations()

	return (
		<motion.div
			className="flex items-center justify-end gap-5 pt-8 w-full border-t border-border/20 mt-8"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1.2, duration: 0.8 }}
		>
			{socialLinks.map(({ id, icon: Icon, href }) => (
				<Magnetic key={id} intensity={0.3}>
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="group p-3 rounded-full border border-border/30 hover:border-foreground/20 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300 glass-panel hover:scale-110 active:scale-95"
						aria-label={t(`social.${id}.title`)}
						title={t(`social.${id}.title`)}
						onClick={() =>
							trackClick(ANALYTICS_EVENTS.CLICK_SOCIAL, { platform: id })
						}
					>
						<Icon className="w-[1.2rem] h-[1.2rem] transition-colors group-hover:text-accent" />
						<span className="sr-only">{t(`social.${id}.title`)}</span>
					</a>
				</Magnetic>
			))}
		</motion.div>
	)
}
