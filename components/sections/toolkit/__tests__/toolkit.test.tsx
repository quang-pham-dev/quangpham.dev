import { render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Toolkit from "@/components/sections/toolkit"

describe("engineering toolkit", () => {
	it("gives backend and platform capabilities equal visual space", () => {
		render(<Toolkit />)

		for (const label of [
			"Frontend & product engineering",
			"Backend & APIs",
			"Platform & delivery",
			"Engineering leadership",
		]) {
			expect(screen.getByRole("heading", { name: label })).toBeVisible()
		}

		const backendGroup = screen
			.getByRole("heading", { name: "Backend & APIs" })
			.closest("div")
		const platformGroup = screen
			.getByRole("heading", { name: "Platform & delivery" })
			.closest("div")
		expect(
			within(backendGroup as HTMLElement).getByText("Node.js")
		).toBeVisible()
		expect(
			within(backendGroup as HTMLElement).getByText("NestJS")
		).toBeVisible()
		expect(
			within(backendGroup as HTMLElement).getByText("Golang")
		).toBeVisible()
		expect(within(platformGroup as HTMLElement).getByText("AWS")).toBeVisible()

		const groups = screen
			.getByRole("heading", { name: "Range with a point of view." })
			.closest("div")
			?.parentElement?.querySelector("div.grid")
		expect(groups).toHaveClass("lg:grid-cols-4")
	})
})
