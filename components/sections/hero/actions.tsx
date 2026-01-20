"use client"

import { ArrowRight, ArrowUpRight } from "lucide-react"
import { RESUME_URL, SITE_URL } from "@/constants"
import { useTranslations } from "@/hooks/use-translation"
import { ANALYTICS_EVENTS } from "@/lib/analytics/events"
import { trackClick } from "@/lib/analytics/track"

export const HeroActions = () => {
	const { t } = useTranslations()

	return (
		<div
			className="flex flex-wrap items-center gap-4 pt-4 animate-in"
			style={{ animationDelay: "500ms" }}
		>
			<a
				href={SITE_URL.projects}
				target="_blank"
				rel="noopener noreferrer"
				className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full gradient-border bg-secondary hover:bg-muted transition-colors link-shine"
				onClick={() => trackClick(ANALYTICS_EVENTS.CLICK_VIEW_WORK)}
			>
				{t("viewMyWork")}
				<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
			</a>
			<a
				href={RESUME_URL}
				target="_blank"
				rel="noopener noreferrer"
				className="group inline-flex items-center gap-2 px-6 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
				onClick={() => trackClick(ANALYTICS_EVENTS.CLICK_DOWNLOAD_CV)}
			>
				{t("downloadResume")}
				<ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
			</a>
		</div>
	)
}
