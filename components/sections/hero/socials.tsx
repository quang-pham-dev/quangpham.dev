"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Magnetic } from "@/components/ui/magnetic"
import { SOCIAL_LINKS } from "@/constants"
import { useTranslations } from "@/hooks/use-translation"
import { ANALYTICS_EVENTS } from "@/lib/analytics/events"
import { trackClick } from "@/lib/analytics/track"
import { ENTRANCE, SPRING, STAGGER } from "@/lib/motion/spring"

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

	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: STAGGER.block,
				delayChildren: ENTRANCE.socials,
			},
		},
	}

	const item = {
		hidden: { opacity: 0, y: 16, scale: 0.9 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: SPRING.bouncy,
		},
	}

	return (
		<motion.div
			className="flex items-center justify-end gap-5 pt-8 w-full border-t border-border/20 mt-8"
			variants={container}
			initial="hidden"
			animate="visible"
		>
			{socialLinks.map(({ id, icon: Icon, href }) => (
				<motion.div
					key={id}
					variants={item}
					style={{ willChange: "transform" }}
				>
					<Magnetic intensity={0.3}>
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="group rounded-full border border-border/30 p-3 text-muted-foreground transition-[transform,color,background-color,border-color] duration-300 hover:scale-110 hover:border-foreground/20 hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background active:scale-95 glass-panel"
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
				</motion.div>
			))}
		</motion.div>
	)
}
