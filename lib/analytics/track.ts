import { posthog } from "@/lib/posthog"
import type { AnalyticsEvent } from "./events"

/**
 * Track a custom analytics event with optional properties
 * @param event - Event name from ANALYTICS_EVENTS
 * @param properties - Optional additional properties
 */
export function trackEvent(
	event: AnalyticsEvent,
	properties?: Record<string, unknown>
) {
	if (typeof window === "undefined") return

	posthog.capture(event, properties)
}

/**
 * Track a click event with optional properties
 * Convenience wrapper for trackEvent
 */
export function trackClick(
	event: AnalyticsEvent,
	properties?: Record<string, unknown>
) {
	trackEvent(event, {
		...properties,
		interaction_type: "click",
	})
}
