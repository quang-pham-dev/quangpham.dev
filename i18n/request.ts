import { cookies } from "next/headers"
import { getRequestConfig } from "next-intl/server"
import {
	defaultLocale,
	isLocale,
	LOCALE_COOKIE_NAME,
	type Locale,
} from "./config"

// Re-export shared config for convenience
export {
	defaultLocale,
	isLocale,
	LOCALE_COOKIE_NAME,
	type Locale,
	localeLabels,
} from "./config"

export default getRequestConfig(async () => {
	// Try to get locale from cookie first (for user preference persistence)
	const cookieStore = await cookies()
	const cookieLocale = cookieStore.get(LOCALE_COOKIE_NAME)?.value
	const locale: Locale = isLocale(cookieLocale) ? cookieLocale : defaultLocale

	return {
		locale,
		messages: (await import(`./messages/${locale}.json`)).default,
	}
})
