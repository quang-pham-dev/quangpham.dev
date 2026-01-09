import { beforeEach, describe, expect, it, vi } from "vitest"

// Mock posthog-js before importing posthog module
vi.mock("posthog-js", () => ({
	default: {
		init: vi.fn(),
		debug: vi.fn(),
	},
}))

describe("posthog", () => {
	beforeEach(() => {
		vi.clearAllMocks()
		vi.resetModules()
		// Reset environment variables - use undefined to test default fallback behavior
		vi.stubEnv("NEXT_PUBLIC_POSTHOG_KEY", "")
	})

	describe("POSTHOG_KEY", () => {
		it("should default to empty string when env var not set", async () => {
			const { POSTHOG_KEY } = await import("../posthog")
			expect(POSTHOG_KEY).toBe("")
		})
	})

	describe("POSTHOG_HOST", () => {
		it("should default to us.i.posthog.com when env var not set", async () => {
			const { POSTHOG_HOST } = await import("../posthog")
			expect(POSTHOG_HOST).toBe("https://us.i.posthog.com")
		})
	})

	describe("initPostHog", () => {
		it("should not initialize when POSTHOG_KEY is empty", async () => {
			const posthogModule = await import("posthog-js")
			const { initPostHog } = await import("../posthog")

			initPostHog()

			expect(posthogModule.default.init).not.toHaveBeenCalled()
		})

		it("should export posthog instance", async () => {
			const { posthog } = await import("../posthog")
			expect(posthog).toBeDefined()
		})
	})
})
