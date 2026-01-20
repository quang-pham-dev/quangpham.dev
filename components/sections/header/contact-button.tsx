"use client"

import { Mail } from "lucide-react"
import { SOCIAL_LINKS } from "@/constants"
import { useTranslations } from "@/hooks/use-translation"
import { ANALYTICS_EVENTS } from "@/lib/analytics/events"
import { trackClick } from "@/lib/analytics/track"

export const HeaderContactButton = () => {
	const { t } = useTranslations()

	return (
		<a
			href={SOCIAL_LINKS.email}
			aria-label="Email me"
			className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
			onClick={() => trackClick(ANALYTICS_EVENTS.CLICK_CONTACT)}
		>
			<Mail className="w-4 h-4" />
			<span className="hidden sm:inline">{t("navContact")}</span>
		</a>
	)
}
