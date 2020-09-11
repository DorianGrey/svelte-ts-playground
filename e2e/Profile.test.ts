// TODO: For an unknown reason, `page` is still considered "any", thus autocomplete does not really work...
describe("Profile screen", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:8080/profile/42");
  });

  it("should display the profile base information", async () => {
    await expect(page).toHaveText("div", "The profile page of user 42");
  });
});
