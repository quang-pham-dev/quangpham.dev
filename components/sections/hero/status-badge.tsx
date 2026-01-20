"use client"

import { useTranslations } from "@/hooks/use-translation"

export const HeroStatusBadge = () => {
	const { t } = useTranslations()

	return (
		<div
			className="inline-flex items-center gap-2 animate-in"
			style={{ animationDelay: "200ms" }}
		>
			<span className="relative flex h-2 w-2">
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
				<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
			</span>
			<span className="text-sm text-muted-foreground">
				{t("availableForWork")}
			</span>
		</div>
	)
}
