import { describe, expect, it } from "vitest"
import {
	caseStudies,
	engineeringLayers,
	engineeringPrinciples,
	experienceEntries,
	impactMetrics,
	toolkitGroups,
} from "@/lib/content/portfolio"

describe("portfolio content", () => {
	it("keeps the approved impact claims", () => {
		expect(impactMetrics.map((metric) => metric.value)).toEqual([
			"12+",
			"Millions",
			"250K+",
			"600+",
		])

		const publicImpactCopy = JSON.stringify(impactMetrics)
		expect(publicImpactCopy).toContain("over one million active subscriptions")
		expect(publicImpactCopy).not.toContain("180+ MB")
		expect(publicImpactCopy).not.toContain("3M")
		expect(publicImpactCopy).not.toContain("1.7M")
	})

	it("defines the selected work candidates", () => {
		expect(caseStudies.map((study) => study.slug)).toEqual([
			"glo-platform",
			"restful-mind",
			"earlybird",
			"centz",
		])

		for (const study of caseStudies) {
			expect(study.name).not.toBe(" ")
			expect(study.role.length).toBeGreaterThan(0)
			expect(study.decisions.length).toBeGreaterThan(0)
			expect(study.impact.length).toBeGreaterThan(0)
			expect(study.technologies.length).toBeGreaterThan(0)
		}
	})

	it("keeps full-stack capability claims layered and public-safe", () => {
		expect(engineeringLayers.map((layer) => layer.id)).toEqual([
			"product",
			"backend",
			"platform",
			"leadership",
		])

		const backend = engineeringLayers.find((layer) => layer.id === "backend")
		expect(backend?.technologies).toEqual(
			expect.arrayContaining([
				"Node.js",
				"NestJS",
				"GraphQL",
				"API design",
				"Golang",
			])
		)

		expect(
			caseStudies.find((study) => study.slug === "glo-platform")?.layers
		).toEqual(["product", "platform"])
	})

	it("keeps experience newest first", () => {
		expect(experienceEntries.map((entry) => entry.company)).toEqual([
			"Glo",
			"Restful Mind",
			"AgilityIO",
			"FPT Software",
		])
	})

	it("groups the toolkit by capability", () => {
		expect(toolkitGroups.map((group) => group.label)).toEqual([
			"Frontend & product engineering",
			"Backend & APIs",
			"Platform & delivery",
			"Engineering leadership",
		])
		expect(engineeringPrinciples).toHaveLength(5)
	})
})
