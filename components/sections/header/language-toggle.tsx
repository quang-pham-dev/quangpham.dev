"use client"

import { Globe } from "lucide-react"
import { useCallback } from "react"
import { useTranslations } from "@/hooks/use-translation"
import { localeLabels, locales } from "@/i18n/config"

export const HeaderLanguageToggle = () => {
	const { changeLanguage, currentLanguage } = useTranslations()

	const toggleLanguage = useCallback(() => {
		const currentIndex = locales.indexOf(currentLanguage)
		const nextIndex = (currentIndex + 1) % locales.length
		changeLanguage(locales[nextIndex])
	}, [currentLanguage, changeLanguage])

	return (
		<button
			type="button"
			onClick={toggleLanguage}
			className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
			aria-label="Toggle language"
		>
			<Globe className="w-4 h-4" />
			<span className="font-medium">{localeLabels[currentLanguage]}</span>
		</button>
	)
}
