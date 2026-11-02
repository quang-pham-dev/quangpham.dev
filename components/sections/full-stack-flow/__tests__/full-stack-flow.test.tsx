import { render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import FullStackFlow from "@/components/sections/full-stack-flow"

describe("full-stack engineering flow", () => {
	it("shows ownership from product surface through APIs and platform delivery", () => {
		render(<FullStackFlow />)

		expect(
			screen.getByRole("heading", { name: "Full-stack ownership." })
		).toBeVisible()

		const flow = screen.getByRole("list", { name: "Engineering layers" })
		const layerItems = Array.from(flow.querySelectorAll(":scope > li"))
		expect(layerItems.map((item) => item.textContent)).toEqual([
			expect.stringContaining("Product surface"),
			expect.stringContaining("APIs & data"),
			expect.stringContaining("Platform & delivery"),
			expect.stringContaining("Engineering leadership"),
		])
		expect(within(flow).getByText("Node.js")).toBeVisible()
		expect(within(flow).getByText("AWS")).toBeVisible()
	})
})
