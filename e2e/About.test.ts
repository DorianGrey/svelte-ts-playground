// TODO: For an unknown reason, `page` is still considered "any", thus autocomplete does not really work...
describe("About screen", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:8080/about?format=plain");
  });

  it("should display the about information", async () => {
    await expect(page).toHaveText("h3", "The about page");
    await expect(page).toHaveText("code", "format=plain");
  });
});
