module.exports = {
  preset: "jest-playwright-preset",
  setupFilesAfterEnv: ["expect-playwright"],
  testMatch: [
    "<rootDir>/e2e/**/*.{spec,test}.ts",
  ],
  transform: {
    "^.+\\.(js|ts)$":
      "<rootDir>/node_modules/@snowpack/app-scripts-svelte/jest/babelTransform.js",
  },
};
