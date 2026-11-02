"use client"

import { motion } from "framer-motion"
import { useTranslations } from "@/hooks/use-translation"
import { impactMetrics } from "@/lib/content/portfolio"
import { ENTRANCE, SPRING } from "@/lib/motion/spring"

export const HeroStatusBadge = () => {
	const { t } = useTranslations()
	const gloScale = impactMetrics.find(
		(metric) => metric.label === "users on the Glo platform"
	)

	return (
		<motion.aside
			aria-label="Current platform leadership role"
			initial={{ opacity: 0, scale: 0.9, x: 20 }}
			animate={{ opacity: 1, scale: 1, x: 0 }}
			transition={{ ...SPRING.snappy, delay: ENTRANCE.badge }}
			className="w-full max-w-md border-y border-border/40 py-6 lg:max-w-sm"
		>
			<div className="flex items-center justify-between gap-4">
				<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
					Current platform
				</p>
				<div className="inline-flex items-center gap-2 rounded-full border border-border/50 px-3 py-1.5">
					<span className="relative flex h-2 w-2" aria-hidden="true">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
						<span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
					</span>
					<span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
						{t("availableForWork")}
					</span>
				</div>
			</div>
			<div className="mt-6">
				<div className="flex items-baseline gap-3">
					<p className="font-display text-4xl font-bold tracking-tight text-foreground">
						{gloScale?.value}
					</p>
					<p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
						users
					</p>
				</div>
				<p className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground">
					Glo
				</p>
				<p className="mt-2 text-sm font-medium text-foreground">
					Web Platform Leader
				</p>
				<p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
					{gloScale?.detail}
				</p>
			</div>
		</motion.aside>
	)
}
