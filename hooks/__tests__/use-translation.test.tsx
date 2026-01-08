import { renderHook } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { LanguageContext } from "@/components/translation-provider"
import { useTranslations } from "../use-translation"

// Mock next-intl's useTranslations
vi.mock("next-intl", () => ({
	useTranslations: () => (key: string) => `translated:${key}`,
}))

const mockContextValue = {
	changeLanguage: vi.fn(),
	currentLanguage: "en" as const,
}

describe("useTranslations", () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	it("should return translation context when used within provider", () => {
		const wrapper = ({ children }: { children: React.ReactNode }) => (
			<LanguageContext.Provider value={mockContextValue}>
				{children}
			</LanguageContext.Provider>
		)

		const { result } = renderHook(() => useTranslations(), { wrapper })

		expect(result.current.currentLanguage).toBe("en")
		expect(result.current.changeLanguage).toBe(mockContextValue.changeLanguage)
		expect(typeof result.current.t).toBe("function")
	})

	it("should provide t function from next-intl", () => {
		const wrapper = ({ children }: { children: React.ReactNode }) => (
			<LanguageContext.Provider value={mockContextValue}>
				{children}
			</LanguageContext.Provider>
		)

		const { result } = renderHook(() => useTranslations(), { wrapper })

		// Verify t function works (mocked to return "translated:<key>")
		expect(result.current.t("greeting")).toBe("translated:greeting")
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
