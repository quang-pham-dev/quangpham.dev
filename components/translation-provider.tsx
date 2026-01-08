"use client"

import { useRouter } from "next/navigation"
import { createContext, useCallback, useState, useTransition } from "react"
import { setUserLocale } from "@/app/actions/set-locale"
import { defaultLocale, type Locale } from "@/i18n/config"

type LanguageContextType = {
	changeLanguage: (lang: Locale) => void
	currentLanguage: Locale
	isPending: boolean
}

export const LanguageContext = createContext<LanguageContextType | null>(null)

export function TranslationProvider({
	children,
	initialLocale = defaultLocale,
}: {
	children: React.ReactNode
	initialLocale?: Locale
}) {
	const [currentLanguage, setCurrentLanguage] = useState<Locale>(initialLocale)
	const [isPending, startTransition] = useTransition()
	const router = useRouter()

	const changeLanguage = useCallback(
		(lang: Locale) => {
			if (lang === currentLanguage) return

			startTransition(() => {
				void setUserLocale(lang).then((next) => {
					setCurrentLanguage(next)
					router.refresh()
				})
			})
		},
		[router, currentLanguage]
	)

	const value = {
		changeLanguage,
		currentLanguage,
		isPending,
	}

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	)
}
