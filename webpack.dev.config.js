const path = require('path');
const webpack = require('webpack');

const config = {
  mode: 'development',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './app/components/index.js' // app's entry point
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
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
