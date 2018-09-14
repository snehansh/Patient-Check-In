const path = require('path');
const webpack = require('webpack');

const config = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    './app/components/index.js' // app's entry point
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  }
};

module.exports = config;
