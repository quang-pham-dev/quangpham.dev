"use client"

import { CharReveal, TextReveal } from "@/components/ui/text-reveal"
import { useTranslations } from "@/hooks/use-translation"

export const HeroContent = () => {
	const { t } = useTranslations()

	return (
		<div className="space-y-8 flex flex-col justify-end h-full mt-24">
			<h1 className="font-display font-extrabold text-foreground uppercase tracking-tighter leading-[0.85] text-display whitespace-nowrap">
				<span className="block mb-2">
					<CharReveal text="Quang" delay={1} className="text-edge-outline" />
				</span>
				<span className="block relative -left-[0.05em]">
					<CharReveal text="Pham." delay={4} />
				</span>
			</h1>

			<div className="max-w-[34rem] space-y-6 pt-4 border-l border-border/40 pl-6 lg:pl-8 ml-2">
				<h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight">
					<TextReveal text={t("role")} delay={6} />
				</h2>
				<p className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans">
					{t("heroDescriptionPart1")}{" "}
					<span className="text-foreground font-semibold">
						{t("heroDescriptionHighlight")}
					</span>
					. {t("heroDescriptionPart2")}
				</p>
			</div>
		</div>
	)
}
