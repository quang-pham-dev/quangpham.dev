/**
 * Shared i18n configuration constants
 * This file can be imported by both client and server components
 */
export const locales = ["en", "ja"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"
export const LOCALE_COOKIE_NAME = "NEXT_LOCALE"

export function isLocale(value: unknown): value is Locale {
	return (
		typeof value === "string" && (locales as readonly string[]).includes(value)
	)
}

export const localeLabels: Record<Locale, string> = {
	en: "EN",
	ja: "日本語",
}
