"use client"

import { use } from "react"

import { TranslationContext } from "@/components/i18next-provider"

export function useTranslations() {
	const context = use(TranslationContext)
	if (!context) {
		throw new Error("useTranslations must be used within a TranslationProvider")
	}
	return context
}
