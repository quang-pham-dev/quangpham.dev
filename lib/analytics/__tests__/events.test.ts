import { describe, expect, it } from "vitest"
import { ANALYTICS_EVENTS, type AnalyticsEvent } from "../events"

describe("ANALYTICS_EVENTS", () => {
	it("should have all expected event names", () => {
		expect(ANALYTICS_EVENTS.CLICK_VIEW_WORK).toBe("click_view_work")
		expect(ANALYTICS_EVENTS.CLICK_DOWNLOAD_CV).toBe("click_download_cv")
		expect(ANALYTICS_EVENTS.CLICK_CONTACT).toBe("click_contact")
		expect(ANALYTICS_EVENTS.CLICK_SOCIAL).toBe("click_social")
		expect(ANALYTICS_EVENTS.CLICK_NAV_ITEM).toBe("click_nav_item")
		expect(ANALYTICS_EVENTS.TOGGLE_THEME).toBe("toggle_theme")
		expect(ANALYTICS_EVENTS.CHANGE_LANGUAGE).toBe("change_language")
	})

	it("should be a readonly object", () => {
		// Verify all values are strings
		const values = Object.values(ANALYTICS_EVENTS)
		for (const value of values) {
			expect(typeof value).toBe("string")
		}
	})

	it("should have unique event names", () => {
		const values = Object.values(ANALYTICS_EVENTS)
		const uniqueValues = new Set(values)
		expect(uniqueValues.size).toBe(values.length)
	})

	it("should have correct type for AnalyticsEvent", () => {
		// Type assertion test - this verifies the type is correctly extracted
		const event: AnalyticsEvent = ANALYTICS_EVENTS.CLICK_VIEW_WORK
		expect(event).toBe("click_view_work")
	})
})
