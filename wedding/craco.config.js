const CracoAlias = require("craco-alias");

module.exports = {
  Plugin: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        tsConfigPath: "tsconfig.paths.json",
      },
    },
  ],
};
