import { act, renderHook } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { useScrollToTop } from "../use-scroll-top"

describe("useScrollToTop", () => {
	beforeEach(() => {
		// Mock window properties
		Object.defineProperty(window, "scrollY", {
			value: 0,
			writable: true,
		})
		window.scrollTo = vi.fn()
	})

	afterEach(() => {
		vi.clearAllMocks()
	})

	it("should initiate as invisible", () => {
		const { result } = renderHook(() => useScrollToTop())
		expect(result.current.isVisible).toBe(false)
	})

	it("should become visible after scrolling past threshold", () => {
		const { result } = renderHook(() => useScrollToTop())

		act(() => {
			Object.defineProperty(window, "scrollY", { value: 50 })
			window.dispatchEvent(new Event("scroll"))
		})

		expect(result.current.isVisible).toBe(true)
	})

	it("should become hidden when scrolling back to top", () => {
		const { result } = renderHook(() => useScrollToTop())

		// Scroll down
		act(() => {
			Object.defineProperty(window, "scrollY", { value: 50 })
			window.dispatchEvent(new Event("scroll"))
		})
		expect(result.current.isVisible).toBe(true)

		// Scroll up
		act(() => {
			Object.defineProperty(window, "scrollY", { value: 0 })
			window.dispatchEvent(new Event("scroll"))
		})
		expect(result.current.isVisible).toBe(false)
	})

	it("should scroll to top when scrollToTop is called", () => {
		const { result } = renderHook(() => useScrollToTop())

		act(() => {
			result.current.scrollToTop()
		})

		expect(window.scrollTo).toHaveBeenCalledWith({
			top: 0,
			behavior: "smooth",
		})
	})
})
