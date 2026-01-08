"use client"

import { useTranslations as useNextIntlTranslations } from "next-intl"
import { use } from "react"
import { LanguageContext } from "@/components/translation-provider"

/**
 * Combined hook providing translations from next-intl and language control
 *
 * @example
 * const { t, changeLanguage, currentLanguage } = useTranslations()
 * return <span>{t("greeting")}</span>
 */
export function useTranslations() {
	const context = use(LanguageContext)
	if (!context) {
		throw new Error("useTranslations must be used within a TranslationProvider")
	}

	// Get the translation function from next-intl
	const t = useNextIntlTranslations()
	const { changeLanguage, currentLanguage } = context

	return {
		t,
		changeLanguage,
		currentLanguage,
	}
}
