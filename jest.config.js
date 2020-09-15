module.exports = {
  bail: false,
  collectCoverageFrom: [
    "src/**/*.{ts,svelte}",
    "!src/TailwindSetup.svelte",
    "!src/**/*.{spec,test}.ts",
  ],
  coverageReporters: ["json", "lcov", "cobertura", "text"],
  coverageDirectory: "<rootDir>/test-results/coverage",
  coveragePathIgnorePatterns: ["/node_modules/", ".d.ts"],
  moduleFileExtensions: ["js", "ts", "svelte"],
  reporters: ["default", "jest-junit"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  testURL: "http://localhost",
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: true,
      },
    ],
    "^.+\\.(js|ts)$":
      "<rootDir>/config/babelTransform.js",
  },
  testPathIgnorePatterns: ["node_modules"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$"],
  verbose: true,
};
