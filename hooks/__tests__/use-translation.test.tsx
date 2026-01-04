import { renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { TranslationContext } from "@/components/i18next-provider"
import { useTranslations } from "../use-translation"

const mockContextValue = {
	t: vi.fn(),
	changeLanguage: vi.fn(),
	currentLanguage: "en",
}

describe("useTranslations", () => {
	it("should return translation context when used within provider", () => {
		const wrapper = ({ children }: { children: React.ReactNode }) => (
			<TranslationContext.Provider value={mockContextValue}>
				{children}
			</TranslationContext.Provider>
		)

		const { result } = renderHook(() => useTranslations(), { wrapper })
		expect(result.current).toBe(mockContextValue)
	})

	it("should throw error when used outside provider", () => {
		// suppress console.error for this test as React logs the error
		const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {})

		expect(() => renderHook(() => useTranslations())).toThrow(
			"useTranslations must be used within a TranslationProvider"
		)

		consoleSpy.mockRestore()
	})
})
