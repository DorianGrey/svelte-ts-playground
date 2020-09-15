module.exports = {
  preset: "jest-playwright-preset",
  setupFilesAfterEnv: ["expect-playwright"],
  testMatch: [
    "<rootDir>/e2e/**/*.{spec,test}.ts",
  ],
  transform: {
    "^.+\\.(js|ts)$":
      "<rootDir>/config/babelTransform.js",
  },
};
