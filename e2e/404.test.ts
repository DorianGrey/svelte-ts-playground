// TODO: For an unknown reason, `page` is still considered "any", thus autocomplete does not really work...
describe("404/Not Found", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000/bananenbrotbaum");
  });

  it("should handle unknown routes with a creative story", async () => {
    await expect(page).toHaveText(
      "h4",
      "404 | Well, That about Wraps It Up for This Page"
    );
    // Note: This is a bit awkward - the line break has to be included,
    // otherwise, the text cannot be found. ?!
    await expect(page).toHaveText(
      "#oh-dear-text",
      `and promptly disappears
      in a puff of logic.`
    );
  });
});
