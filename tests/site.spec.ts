import { expect, test } from "@playwright/test";

const routes = [
  { path: "/", heading: "Toronto Autonomous Systems Collective" },
  { path: "/events", heading: "UPCOMING EVENTS" },
  { path: "/team", heading: "OUR TEAM" },
  { path: "/sponsors", heading: "BECOME A SPONSOR" },
  { path: "/Learnmore", heading: "OUR STORY" },
];

for (const route of routes) {
  test(`renders ${route.path}`, async ({ page }) => {
    await page.goto(route.path);

    await expect(
      page.getByRole("heading", { name: route.heading, exact: true }),
    ).toBeVisible();
  });
}

test("renders the projects page", async ({ page }) => {
  await page.goto("/projects");

  await expect(page.getByText("In Progress", { exact: true })).toBeVisible();
});

test("primary navigation opens the projects page", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "PROJECTS", exact: true })
    .click();

  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.getByText("In Progress", { exact: true })).toBeVisible();
});

test("unknown routes show the not-found page", async ({ page }) => {
  await page.goto("/not-a-page");

  await expect(
    page.getByRole("heading", { name: "404 Page Not Found" }),
  ).toBeVisible();
});
