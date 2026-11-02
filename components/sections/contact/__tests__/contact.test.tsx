import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Contact from "@/components/sections/contact"

describe("contact section", () => {
	it("exposes the primary conversation and profile links", () => {
		render(<Contact />)

		expect(
			screen.getByRole("link", { name: "Start a conversation" })
		).toHaveAttribute("href", "mailto:quangpham.developer@gmail.com")
		expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
			"href",
			"https://linkedin.com/in/quang-pham-dev"
		)
		expect(
			screen.getByRole("link", { name: "Download resume" })
		).toHaveAttribute("href")
		expect(
			screen.getByRole("link", { name: "Download resume" }).getAttribute("href")
		).toMatch(/drive\.google\.com/)
	})
})
