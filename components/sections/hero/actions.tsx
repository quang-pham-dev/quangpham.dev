"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Magnetic } from "@/components/ui/magnetic"
import { RESUME_URL, SITE_URL } from "@/constants"
import { useTranslations } from "@/hooks/use-translation"
import { ANALYTICS_EVENTS } from "@/lib/analytics/events"
import { trackClick } from "@/lib/analytics/track"

export const HeroActions = () => {
	const { t } = useTranslations()

	return (
		<motion.div
			className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start lg:items-end xl:items-center gap-6 pt-4 w-full justify-start lg:justify-end"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
		>
			<Magnetic intensity={0.2}>
				<a
					href={SITE_URL.projects}
					target="_blank"
					rel="noopener noreferrer"
					className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-wide uppercase bg-foreground text-background rounded-full transition-transform hover:scale-[0.98] focus:scale-[0.98] outline-none active:scale-95"
					onClick={() => trackClick(ANALYTICS_EVENTS.CLICK_VIEW_WORK)}
				>
					{t("viewMyWork")}
					<span className="w-8 h-8 rounded-full bg-background text-foreground flex items-center justify-center transition-transform group-hover:rotate-[-45deg] group-hover:bg-accent group-hover:text-white">
						<ArrowRight className="w-4 h-4" strokeWidth={2.5} />
					</span>
				</a>
			</Magnetic>
			<Magnetic intensity={0.1}>
				<a
					href={RESUME_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="group inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors"
					onClick={() => trackClick(ANALYTICS_EVENTS.CLICK_DOWNLOAD_CV)}
				>
					{t("downloadResume")}
					<ArrowUpRight
						className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
						strokeWidth={2}
					/>
				</a>
			</Magnetic>
		</motion.div>
	)
}
