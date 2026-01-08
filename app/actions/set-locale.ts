"use server"

import { cookies } from "next/headers"
import {
	defaultLocale,
	isLocale,
	LOCALE_COOKIE_NAME,
	type Locale,
} from "@/i18n/config"

const ONE_YEAR = 60 * 60 * 24 * 365

export async function setUserLocale(locale: Locale | string) {
	const nextLocale: Locale = isLocale(locale) ? locale : defaultLocale

	const cookieStore = await cookies()
	cookieStore.set(LOCALE_COOKIE_NAME, nextLocale, {
		path: "/",
		maxAge: ONE_YEAR,
		sameSite: "lax",
		// secure: process.env.NODE_ENV === "production",
	})

	return nextLocale
}
