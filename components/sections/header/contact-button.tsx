"use client"

import { Mail } from "lucide-react"
import { Magnetic } from "@/components/ui/magnetic"
import { SOCIAL_LINKS } from "@/constants"
import { useTranslations } from "@/hooks/use-translation"
import { ANALYTICS_EVENTS } from "@/lib/analytics/events"
import { trackClick } from "@/lib/analytics/track"

export const HeaderContactButton = () => {
	const { t } = useTranslations()

	return (
		<Magnetic intensity={0.15}>
			<a
				href={SOCIAL_LINKS.email}
				aria-label="Email me"
				className="group flex items-center gap-2 px-5 py-2.5 text-sm font-bold tracking-wide uppercase rounded-full bg-foreground text-background hover:bg-accent hover:text-white transition-all duration-300"
				onClick={() => trackClick(ANALYTICS_EVENTS.CLICK_CONTACT)}
			>
				<Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
				<span className="hidden sm:inline">{t("navContact")}</span>
			</a>
		</Magnetic>
	)
}
