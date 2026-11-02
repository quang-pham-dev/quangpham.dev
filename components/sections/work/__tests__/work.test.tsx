import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import ImpactStrip from "@/components/sections/impact"
import CaseStudy from "@/components/sections/work/case-study"
import { caseStudies, impactMetrics } from "@/lib/content/portfolio"

describe("portfolio proof sections", () => {
	it("renders every approved impact metric", () => {
		render(<ImpactStrip />)

		for (const metric of impactMetrics) {
			expect(screen.getByText(metric.value)).toBeInTheDocument()
			expect(screen.getByText(metric.label)).toBeInTheDocument()
		}
	})

	it("renders a case study with its evidence fields", () => {
		render(<CaseStudy study={caseStudies[0]} />)

		expect(screen.getAllByText(caseStudies[0].role)).toHaveLength(2)
		expect(screen.getByText(caseStudies[0].decisions[0])).toBeInTheDocument()
		expect(screen.getByText(caseStudies[0].impact[0])).toBeInTheDocument()
		expect(screen.getByText(caseStudies[0].technologies[0])).toBeInTheDocument()
	})

	it("shows only the ownership layers supported by each case study", () => {
		render(<CaseStudy study={caseStudies[0]} />)
		const gloLayers = screen.getByRole("list", { name: "Ownership layers" })
		expect(gloLayers).toHaveTextContent("Product surface")
		expect(gloLayers).toHaveTextContent("Platform & delivery")
		expect(gloLayers).not.toHaveTextContent("APIs & data")

		render(<CaseStudy study={caseStudies[1]} />)
		const restfulMindLayers = screen.getAllByRole("list", {
			name: "Ownership layers",
		})[1]
		expect(restfulMindLayers).toHaveTextContent("APIs & data")
		expect(restfulMindLayers).toHaveTextContent("Platform & delivery")
	})
})
