const { resolve } = require('path');

module.exports = {
  context: resolve(__dirname, '../src'),
  mainEntryPoint: './main.js',
  outputPath: resolve(__dirname, '../dist'),
  publicPath: '/',
};
