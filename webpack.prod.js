const CompressionPlugin = require('compression-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: 'es2015',
          },
        },
      },
    ],
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ],
});
