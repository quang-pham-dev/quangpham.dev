import { expect, test } from "@playwright/test"

const baseUrl = process.env.NEXT_PUBLIC_URL

test("RootPage", async ({ page }) => {
	await page.goto(baseUrl as string)
	await expect(page).toHaveTitle("Quang Pham - Senior Software Engineer")
	await expect(
		page.getByRole("heading", {
			name: "I build software systems that scale.",
		})
	).toBeVisible()

	for (const section of [
		"full-stack",
		"work",
		"experience",
		"approach",
		"toolkit",
		"contact",
	]) {
		await expect(page.locator(`#${section}`)).toBeVisible()
	}

	await expect(
		page.getByRole("link", { name: "View selected work" })
	).toHaveAttribute("href", "#work")
	await expect(
		page.getByRole("link", { name: "Download resume" })
	).toHaveAttribute("href", /drive\.google\.com/)
	await expect(
		page.getByRole("link", { name: "Start a conversation" })
	).toHaveAttribute("href", "mailto:quangpham.developer@gmail.com")
})

test("RootPage remains usable with reduced motion", async ({ page }) => {
	await page.emulateMedia({ reducedMotion: "reduce" })
	await page.goto(baseUrl as string)

	await expect(
		page.getByRole("heading", {
			name: "I build software systems that scale.",
		})
	).toBeVisible()
	await expect(page.locator("#work")).toBeVisible()
	await expect(page.locator("#contact")).toBeVisible()
})

test("RootPage communicates full-stack ownership without overstating Glo", async ({
	page,
}) => {
	await page.goto(baseUrl as string)

	const fullStack = page.locator("#full-stack")
	await expect(fullStack).toBeVisible()
	await expect(
		fullStack.getByRole("heading", { name: "Full-stack ownership." })
	).toBeVisible()
	for (const label of [
		"APIs & data",
		"Node.js",
		"Platform & delivery",
		"AWS",
	]) {
		await expect(fullStack.getByText(label, { exact: true })).toBeVisible()
	}

	const glo = page.getByRole("article").filter({ hasText: "Glo platform" })
	const gloLayers = glo.getByRole("list", { name: "Ownership layers" })
	await expect(gloLayers).toContainText("Product surface")
	await expect(gloLayers).toContainText("Platform & delivery")
	await expect(gloLayers).not.toContainText("APIs & data")

	const restfulMind = page
		.getByRole("article")
		.filter({ hasText: "Restful Mind" })
	const restfulMindLayers = restfulMind.getByRole("list", {
		name: "Ownership layers",
	})
	await expect(restfulMindLayers).toContainText("APIs & data")
	await expect(restfulMindLayers).toContainText("Platform & delivery")
})

test("RootPage presents readable global platform proof", async ({ page }) => {
	await page.goto(baseUrl as string)

	await expect(page.getByText("Full-stack product engineering")).toBeVisible()
	await expect(page.getByText(/Da Nang/)).not.toBeVisible()
	await expect(
		page.getByText(
			"A large-scale health and wellness product with over one million active subscriptions."
		)
	).toBeVisible()
	await expect(page.getByText("Millions", { exact: true })).toBeVisible()
	await expect(page.locator("#full-stack")).toBeVisible()

	for (const label of ["View selected work", "Download Resume"]) {
		await expect(page.getByRole("link", { name: label })).toHaveCSS(
			"white-space",
			"nowrap"
		)
	}

	const dimensions = await page.evaluate(() => ({
		innerWidth: window.innerWidth,
		scrollWidth: document.documentElement.scrollWidth,
	}))
	expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.innerWidth)
})

test("RootPage stacks the proof-led hero on mobile without overflow", async ({
	page,
}) => {
	await page.setViewportSize({ width: 390, height: 844 })
	await page.goto(baseUrl as string)

	await expect(
		page.getByRole("heading", {
			name: "I build software systems that scale.",
		})
	).toBeVisible()
	await expect(page.getByText("Millions", { exact: true })).toBeVisible()
	await expect(
		page.getByRole("link", { name: "View selected work" })
	).toBeVisible()

	const dimensions = await page.evaluate(() => ({
		innerWidth: window.innerWidth,
		scrollWidth: document.documentElement.scrollWidth,
	}))
	expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.innerWidth)
})
