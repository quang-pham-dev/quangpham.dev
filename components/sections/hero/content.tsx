"use client"

import { motion } from "framer-motion"
import { useTranslations } from "@/hooks/use-translation"

export const HeroContent = () => {
	const { t } = useTranslations()

	return (
		<div className="space-y-4">
			<motion.h1
				className="text-display-sm md:text-display"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.1 }}
			>
				<span className="block text-foreground">Quang Pham</span>
				<span className="block gradient-text">{t("role")}</span>
			</motion.h1>

			<motion.p
				className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.4 }}
			>
				{t("heroDescriptionPart1")}{" "}
				<span className="text-foreground font-medium">
					{t("heroDescriptionHighlight")}
				</span>
				. {t("heroDescriptionPart2")}
			</motion.p>
		</div>
	)
}
