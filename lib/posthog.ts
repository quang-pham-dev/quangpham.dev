"use client"

import posthog from "posthog-js"

export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? ""
export const POSTHOG_HOST =
	process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com"

/**
 * Initialize PostHog client with optimized settings for portfolio analytics.
 * Disabled: session recording, surveys, heatmaps
 * Enabled: autocapture, pageview, UTM tracking
 */
export function initPostHog() {
	if (typeof window === "undefined" || !POSTHOG_KEY) return

	posthog.init(POSTHOG_KEY, {
		api_host: POSTHOG_HOST,
		// Auto-capture pageviews and basic interactions
		autocapture: true,
		capture_pageview: true,
		capture_pageleave: true,
		// Persist user identity
		persistence: "localStorage",
		// Disable heavy features we don't need
		disable_session_recording: true,
		disable_surveys: true,
		// Enable feature flags
		bootstrap: {
			featureFlags: {},
		},
		// Respect Do Not Track
		respect_dnt: true,
		// Reduce payload size
		property_denylist: [],
		// Debug mode in development
		loaded: (posthogInstance) => {
			if (process.env.NODE_ENV === "development") {
				posthogInstance.debug()
			}
		},
	})
}

export { posthog }
