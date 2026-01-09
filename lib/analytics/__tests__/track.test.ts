import { beforeEach, describe, expect, it, vi } from "vitest"
import { ANALYTICS_EVENTS } from "../events"
import { trackClick, trackEvent } from "../track"

// Mock posthog
vi.mock("@/lib/posthog", () => ({
	posthog: {
		capture: vi.fn(),
	},
}))

// Get the mocked posthog
import { posthog } from "@/lib/posthog"

describe("trackEvent", () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	it("should call posthog.capture with event name", () => {
		trackEvent(ANALYTICS_EVENTS.CLICK_VIEW_WORK)

		expect(posthog.capture).toHaveBeenCalledWith("click_view_work", undefined)
	})

	it("should call posthog.capture with event and properties", () => {
		const properties = { platform: "GitHub" }
		trackEvent(ANALYTICS_EVENTS.CLICK_SOCIAL, properties)

		expect(posthog.capture).toHaveBeenCalledWith("click_social", properties)
	})

	it("should not throw when called with valid event", () => {
		expect(() => trackEvent(ANALYTICS_EVENTS.CLICK_CONTACT)).not.toThrow()
	})
})

describe("trackClick", () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	it("should call posthog.capture with interaction_type click", () => {
		trackClick(ANALYTICS_EVENTS.CLICK_DOWNLOAD_CV)

		expect(posthog.capture).toHaveBeenCalledWith("click_download_cv", {
			interaction_type: "click",
		})
	})

	it("should merge properties with interaction_type", () => {
		const properties = { platform: "LinkedIn" }
		trackClick(ANALYTICS_EVENTS.CLICK_SOCIAL, properties)

		expect(posthog.capture).toHaveBeenCalledWith("click_social", {
			platform: "LinkedIn",
			interaction_type: "click",
		})
	})

	it("should preserve existing properties when adding interaction_type", () => {
		const properties = { source: "header", section: "nav" }
		trackClick(ANALYTICS_EVENTS.CLICK_NAV_ITEM, properties)

		expect(posthog.capture).toHaveBeenCalledWith("click_nav_item", {
			source: "header",
			section: "nav",
			interaction_type: "click",
		})
	})
})
