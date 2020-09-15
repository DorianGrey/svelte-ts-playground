// TODO: For an unknown reason, `page` is still considered "any", thus autocomplete does not really work...
describe("Profile screen", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000/profile/42");
  });

  it("should display the profile base information", async () => {
    await expect(page).toHaveText(
      "#profile-message",
      "The profile page of user 42"
    );
  });
});
