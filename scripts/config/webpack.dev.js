const { merge } = require('webpack-merge');
const webpack = require('webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const common = require('./webpack.common');
const proxy = require('../../proxy');

const { APP_HOST, APP_PORT } = process.env;

module.exports = merge(common, {
  target: 'web',
  mode: 'development',
  devtool: 'cheap-module-source-map',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  optimization: {
    minimize: false,
    minimizer: [],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
  },
  devServer: {
    host: APP_HOST,
    port: APP_PORT,
    stats: 'errors-only', // 终端仅打印 error
    clientLogLevel: 'silent',
    compress: true, // 是否启用 gzip 压缩
    open: false,
    hot: true,
    proxy,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new ErrorOverlayPlugin()],
});
