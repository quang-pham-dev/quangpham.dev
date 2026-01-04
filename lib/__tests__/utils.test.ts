import { describe, expect, it } from "vitest"
import { cn } from "../utils"

describe("cn", () => {
	it("should merge class names correctly", () => {
		expect(cn("w-4", "h-4")).toBe("w-4 h-4")
	})

	it("should handle conditional classes", () => {
		const isTrue = true
		const isFalse = false
		expect(cn("w-4", isTrue && "h-4", isFalse && "bg-red-500")).toBe("w-4 h-4")
	})

	it("should merge tailwind classes properly", () => {
		expect(cn("p-4", "p-2")).toBe("p-2")
		expect(cn("w-full", "w-1/2")).toBe("w-1/2")
	})

	it("should handle undefined and null inputs", () => {
		expect(cn("w-4", undefined, null, "h-4")).toBe("w-4 h-4")
	})
})
