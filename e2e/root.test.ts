import { expect, test } from "@playwright/test"

const baseUrl = process.env.NEXT_PUBLIC_URL

test("RootPage", async ({ page }) => {
	await page.goto(baseUrl as string)
	await expect(page).toHaveTitle("Quang Pham Portfolio")
	const heading = page.getByRole("heading", {
		name: "Hey 👋, I'm Quang Pham!",
	})
	await expect(heading).toBeVisible()
})
