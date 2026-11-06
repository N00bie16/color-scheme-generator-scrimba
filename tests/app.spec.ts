import { expect, test } from "@playwright/test";

test("generates and displays a color scheme", async ({ page }) => {
  await page.route("https://www.thecolorapi.com/**", async (route) => {
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        colors: [
          { hex: { value: "#112233", clean: "112233" } },
          { hex: { value: "#445566", clean: "445566" } },
        ],
      }),
    });
  });

  await page.goto("/");

  await page.getByRole("combobox").selectOption("triad");
  await page.getByRole("button", { name: "Get Color Scheme" }).click();

  await expect(page.getByText("#112233")).toBeVisible();
  await expect(page.getByText("#445566")).toBeVisible();
});
