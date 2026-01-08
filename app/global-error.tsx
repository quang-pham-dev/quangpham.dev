"use client" // Error boundaries must be Client Components

import { Geist } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { useEffect, useState } from "react"
import GlobalErrorContent from "@/components/sections/global-error-content"
import {
	defaultLocale,
	isLocale,
	LOCALE_COOKIE_NAME,
	type Locale,
} from "@/i18n/config"
import en from "@/i18n/messages/en.json"
import ja from "@/i18n/messages/ja.json"
import "@/app/globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
})

const messagesMap: Record<Locale, typeof en> = {
	en,
	ja,
}

interface GlobalErrorProps {
	reset: () => void
}

export default function GlobalError({ reset }: GlobalErrorProps) {
	const [locale, setLocale] = useState<Locale>(defaultLocale)

	useEffect(() => {
		const match = document.cookie
			.split("; ")
			.find((c) => c.startsWith(`${LOCALE_COOKIE_NAME}=`))

		const value = match?.split("=")[1]
		if (isLocale(value)) {
			setLocale(value)
		}
	}, [])

	const messages = messagesMap[locale]

	return (
		<html lang={locale} className={geistSans.variable}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Error - Something went wrong</title>
			</head>
			<body className="antialiased bg-background text-foreground">
				<NextIntlClientProvider locale={locale} messages={messages}>
					<GlobalErrorContent reset={reset} />
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
