import { describe, expect, it } from "vitest"
import en from "@/i18n/messages/en.json"
import { impactMetrics } from "@/lib/content/portfolio"

describe("hero copy", () => {
	it("presents a location-free global platform leadership position", () => {
		expect(en.heroEyebrow).toBe("Full-stack product engineering")
		expect(en.heroEyebrow).not.toContain("Da Nang")
		expect(en.heroCurrentRole).toBe("Full-stack & Platform Engineering")
		expect(JSON.stringify(impactMetrics)).toContain(
			"over one million active subscriptions"
		)
	})

	it("keeps both primary hero actions pointed at real destinations", () => {
		expect(en.viewSelectedWork).toBe("View selected work")
		expect(en.downloadResume).toBe("Download Resume")
	})
})
