import { test, expect } from "@playwright/test";

test("homepage loads correctly", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/e-commerce-app/i);

    await expect(
    page.getByRole("heading", {
        name: "Products",
    })
  ).toBeVisible();
});