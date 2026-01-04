"use client"

import { Globe } from "lucide-react"
import { useTranslations } from "@/hooks/use-translation"

export const HeaderLanguageToggle = () => {
	const { changeLanguage, currentLanguage } = useTranslations()

	const toggleLanguage = () => {
		const langs = ["en", "ja"]
		const currentIndex = langs.indexOf(currentLanguage)
		const nextIndex = (currentIndex + 1) % langs.length
		changeLanguage(langs[nextIndex])
	}

	return (
		<button
			type="button"
			onClick={toggleLanguage}
			className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-all duration-200"
			aria-label="Toggle language"
		>
			<Globe className="w-4 h-4" />
			<span className="font-medium">{currentLanguage.toUpperCase()}</span>
		</button>
	)
}
