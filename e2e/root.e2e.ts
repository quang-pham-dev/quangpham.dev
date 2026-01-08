import { expect, test } from "@playwright/test"

const baseUrl = process.env.NEXT_PUBLIC_URL

test("RootPage", async ({ page }) => {
	await page.goto(baseUrl as string)
	await expect(page).toHaveTitle("Quang Pham - Software Engineer")
	const heading = page.getByRole("heading", {
		name: "Quang Pham Senior Software Engineer",
	})
	await expect(heading).toBeVisible()
})
