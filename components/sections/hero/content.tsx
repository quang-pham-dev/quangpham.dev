"use client"

import { useTranslations } from "@/hooks/use-translation"

export const HeroContent = () => {
	const { t } = useTranslations()

	return (
		<div className="space-y-4">
			<h1
				className="text-display-sm md:text-display animate-in"
				style={{ animationDelay: "100ms" }}
			>
				<span className="block text-foreground">Quang Pham</span>
				<span className="block gradient-text">{t("role")}</span>
			</h1>

			<p
				className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-in"
				style={{ animationDelay: "400ms" }}
			>
				{t("heroDescriptionPart1")}{" "}
				<span className="text-foreground font-medium">
					{t("heroDescriptionHighlight")}
				</span>
				. {t("heroDescriptionPart2")}
			</p>
		</div>
	)
}
