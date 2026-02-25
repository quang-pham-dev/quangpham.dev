"use client"

import { motion } from "framer-motion"
import { useTranslations } from "@/hooks/use-translation"

export const HeroStatusBadge = () => {
	const { t } = useTranslations()

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
			className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border/50 glass-panel shadow-sm w-max self-end lg:mb-12"
		>
			<span className="relative flex h-2.5 w-2.5">
				<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
				<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent shadow-[0_0_10px_rgba(var(--accent),0.8)]"></span>
			</span>
			<span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">
				{t("availableForWork")}
			</span>
		</motion.div>
	)
}
