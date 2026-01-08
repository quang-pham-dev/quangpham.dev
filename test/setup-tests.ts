import "@testing-library/jest-dom"
import { cleanup } from "@testing-library/react"
import { afterEach, beforeEach, vi } from "vitest"

// Mock window properties globally
Object.defineProperty(globalThis, "scrollTo", {
	value: vi.fn(),
	writable: true,
})

Object.defineProperty(globalThis, "scrollY", {
	value: 0,
	writable: true,
})

beforeEach(() => {
	vi.resetAllMocks()

	// Reset window.scrollY to 0 before each test
	Object.defineProperty(globalThis, "scrollY", {
		value: 0,
		writable: true,
	})

	vi.mock("next/font/local", () => ({
		__esModule: true,
		default: () => ({
			style: { fontFamily: "mocked" },
		}),
	}))
})

afterEach(() => {
	cleanup()
})
