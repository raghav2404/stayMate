const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      fs: require.resolve('browserify-fs'),
      os: require.resolve('os-browserify/browser'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
