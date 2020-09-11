// TODO: For an unknown reason, `page` is still considered "any", thus autocomplete does not really work...
describe("Home screen", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:8080");
  });

  it("should redirect to the 'home' screen", () => {
    expect(page.url()).toMatch(/\/home$/);
  });

  it("should display the edit action information", async () => {
    await expect(page).toHaveText(
      "main > p",
      "Edit src/App.svelte and save to reload."
    );
  });
});
