const withTypeScript = require("@zeit/next-typescript");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");

module.exports = withTypeScript(
  withImages(
    withSass({
      sassLoaderOptions: {
        // eslint-disable-next-line global-require
        implementation: require("sass"),
      },
    }),
  ),
);
