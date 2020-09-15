const fs = require("fs");
const path = require("path");
const babelJest = require("babel-jest");

const userBabelConfig = getUserBabelConfig();

module.exports = babelJest.createTransformer({
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    ...(userBabelConfig.presets || []),
  ]
});

function getUserBabelConfig() {
  const userBabelConfigLoc = path.join(process.cwd(), "babel.config.json");
  if (fs.existsSync(userBabelConfigLoc)) {
    return require(userBabelConfigLoc);
  }

  return {};
}
