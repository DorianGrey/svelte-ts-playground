module.exports = {
  ...require("@snowpack/app-scripts-svelte/jest.config.js")(),
  collectCoverageFrom: [
    "src/**/*.{ts,svelte}",
    "!src/**/*.{spec,test}.ts",
  ],
  coverageReporters: ["json", "lcov", "cobertura", "text"],
  coverageDirectory: "<rootDir>/test-results/coverage",
  coveragePathIgnorePatterns: ["/node_modules/", ".d.ts"],
  reporters: ["default", "jest-junit"],
  testEnvironment: "jsdom",
  testURL: "http://localhost",
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$"],
};
