/**
 * Analytics event name constants
 * Use these when tracking custom events to ensure consistency
 */
export const ANALYTICS_EVENTS = {
	// Hero section actions
	CLICK_VIEW_WORK: "click_view_work",
	CLICK_DOWNLOAD_CV: "click_download_cv",

	// Contact actions
	CLICK_CONTACT: "click_contact",

	// Social links
	CLICK_SOCIAL: "click_social",

	// Navigation
	CLICK_NAV_ITEM: "click_nav_item",

	// Theme/Language
	TOGGLE_THEME: "toggle_theme",
	CHANGE_LANGUAGE: "change_language",
} as const

export type AnalyticsEvent =
	(typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS]
