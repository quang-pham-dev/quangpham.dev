import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Experience from "@/components/sections/experience"
import Toolkit from "@/components/sections/toolkit"
import { experienceEntries, toolkitGroups } from "@/lib/content/portfolio"

describe("experience and toolkit sections", () => {
	it("renders experience in newest-first order", () => {
		render(<Experience />)

		const companies = screen.getAllByRole("heading", { level: 3 })
		expect(companies.map((heading) => heading.textContent)).toEqual(
			experienceEntries.map((entry) => entry.company)
		)
	})

	it("renders grouped toolkit capabilities", () => {
		render(<Toolkit />)

		for (const group of toolkitGroups) {
			expect(
				screen.getByRole("heading", { name: group.label })
			).toBeInTheDocument()
		}
	})
})
