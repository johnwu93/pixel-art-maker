/* eslint-disable */
const path = require('path');

module.exports = {
  entry: './src/scripts/designs.js',
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
    },
    extensions: ['.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devtool: 'source-map',
};
