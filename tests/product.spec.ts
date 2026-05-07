import { test, expect } from "@playwright/test";

test("navigate to product detail page", async ({
  page,
}) => {
  await page.goto("/");

  const firstButton = page.getByRole("button", {
    name: /view details/i,
  });

  await firstButton.first().click();

  await expect(page).toHaveURL(
    /\/product\/\d+/
  );

  await expect(
    page.getByRole("button", {
      name: /add to cart/i,
    })
  ).toBeVisible();
});