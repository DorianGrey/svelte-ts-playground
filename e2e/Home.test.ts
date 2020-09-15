// TODO: For an unknown reason, `page` is still considered "any", thus autocomplete does not really work...
describe("Home screen", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000");
  });

  it("should redirect to the 'home' screen", async () => {
    await page.waitForSelector("p");
    expect(page.url()).toMatch(/\/home$/);
  });

  it("should display the edit action information", async () => {
    // Beware: Checking for text differentiates between
    // a regular " " and a HTML "&nbsp;".
    await expect(page).toHaveText(
      "main > p",
      "Edit src/App.svelte and save to reload."
    );
  });
});
