/* eslint-disable */
const withImages = require('next-images')
const withSass = require('@zeit/next-sass');
module.exports = withImages(withSass({
  sassLoaderOptions: {
    // eslint-disable-next-line global-require
    implementation: require('sass'),
  },
}));
