"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { RESUME_URL, SITE_URL } from "@/constants"
import { useTranslations } from "@/hooks/use-translation"
import { ANALYTICS_EVENTS, trackClick } from "@/lib/analytics"

export const HeroActions = () => {
	const { t } = useTranslations()

	return (
		<motion.div
			className="flex flex-wrap items-center gap-4 pt-4"
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.5 }}
		>
			<Link
				href={SITE_URL.projects}
				target="_blank"
				rel="noopener noreferrer"
				className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full gradient-border bg-secondary hover:bg-muted transition-colors link-shine"
				onClick={() => trackClick(ANALYTICS_EVENTS.CLICK_VIEW_WORK)}
			>
				{t("viewMyWork")}
				<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
			</Link>
			<Link
				href={RESUME_URL}
				target="_blank"
				rel="noopener noreferrer"
				className="group inline-flex items-center gap-2 px-6 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
				onClick={() => trackClick(ANALYTICS_EVENTS.CLICK_DOWNLOAD_CV)}
			>
				{t("downloadResume")}
				<ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
			</Link>
		</motion.div>
	)
}
