"use client"

import { createContext, useEffect, useState } from "react"
import { I18nextProvider } from "react-i18next"

import { LANG_STORAGE_KEY } from "@/constants/lang"
import i18n from "@/i18n/config"
import type { TranslationKey } from "@/i18n/type"
import { Loading } from "./loading"

type TranslationContextType = {
	t: (key: TranslationKey) => string
	changeLanguage: (lang: string) => Promise<void>
	currentLanguage: string
}

export const TranslationContext = createContext<TranslationContextType | null>(
	null
)

export function TranslationProvider({
	children,
}: { children: React.ReactNode }) {
	const [isInitialized, setIsInitialized] = useState(false)
	const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "en")

	useEffect(() => {
		const init = async () => {
			const savedLang = localStorage.getItem(LANG_STORAGE_KEY)
			if (savedLang) {
				await i18n.changeLanguage(savedLang)
				setCurrentLanguage(savedLang)
			}
			setIsInitialized(true)
		}
		init()
	}, [])

	if (!isInitialized) {
		return <Loading />
	}

	const changeLanguage = async (lang: string) => {
		try {
			await i18n.changeLanguage(lang)
			localStorage.setItem(LANG_STORAGE_KEY, lang)
			setCurrentLanguage(lang)
		} catch (error) {
			// biome-ignore lint/suspicious/noConsole: <explanation>
			console.error("Failed to change language:", error)
		}
	}

	const value = {
		t: (key: TranslationKey) => i18n.t(key),
		changeLanguage,
		currentLanguage,
	}

	return (
		<TranslationContext.Provider value={value}>
			<I18nextProvider i18n={i18n}>{children}</I18nextProvider>
		</TranslationContext.Provider>
	)
}
