const buildPaths = require('./buildPaths');

module.exports = {
  context: buildPaths.context,

  output: {
    filename: 'bundle.js',
    path: buildPaths.outputPath,
    publicPath: buildPaths.publicPath,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
