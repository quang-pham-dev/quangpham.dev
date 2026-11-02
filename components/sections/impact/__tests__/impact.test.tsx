import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import ImpactStrip from "@/components/sections/impact"

describe("impact strip", () => {
	it("leads with Glo platform scale and removes the old mobile metric", () => {
		render(<ImpactStrip />)

		const gloMetric = screen.getByText("Millions").closest("div")
		expect(gloMetric).toHaveAttribute("data-featured", "true")
		expect(gloMetric).toHaveClass("lg:col-span-2")
		expect(screen.getByText("users on the Glo platform")).toBeVisible()
		expect(
			screen.getByText("over one million active subscriptions", {
				exact: false,
			})
		).toBeVisible()
		expect(screen.queryByText(/180\+ MB/)).not.toBeInTheDocument()
	})
})
