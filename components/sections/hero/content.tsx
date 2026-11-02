"use client"

import { motion } from "framer-motion"
import { CharReveal, TextReveal } from "@/components/ui/text-reveal"
import { useTranslations } from "@/hooks/use-translation"
import { ENTRANCE, SPRING } from "@/lib/motion/spring"

export const HeroContent = () => {
	const { t } = useTranslations()
	const heroHeading = t("heroHeading")
	const currentRole = `${t("role")} · ${t("heroCurrentRole")}`

	return (
		<div className="flex flex-col justify-end gap-8">
			<p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
				{t("heroEyebrow")}
			</p>
			<h1 className="max-w-[13ch] font-display font-bold text-foreground tracking-[-0.055em] leading-[0.98] text-[clamp(3.5rem,6.5vw,7rem)] text-balance">
				<CharReveal key={heroHeading} text={heroHeading} delay={1} />
			</h1>
			<div className="ml-1 max-w-[42rem] space-y-6 border-l border-border/40 pl-5 lg:pl-7">
				<h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight">
					<TextReveal key={currentRole} text={currentRole} delay={6} />
				</h2>
				<motion.p
					className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ...SPRING.smooth, delay: ENTRANCE.description }}
				>
					{t("heroDescription")}
				</motion.p>
			</div>
		</div>
	)
}
