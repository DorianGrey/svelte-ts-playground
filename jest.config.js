module.exports = {
  ...require("@snowpack/app-scripts-svelte/jest.config.js")(),
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.{spec,test}.ts"],
  coverageReporters: ["json", "lcov", "cobertura", "text"],
  coverageDirectory: "<rootDir>/test-results/coverage",
  coveragePathIgnorePatterns: ["/node_modules/", ".d.ts"],
  reporters: ["default", "jest-junit"],
  testEnvironment: "jsdom",
  testURL: "http://localhost",
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: true,
      },
    ],
    "^.+\\.(js|ts)$":
      "<rootDir>/node_modules/@snowpack/app-scripts-svelte/jest/babelTransform.js",
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$"],
};
