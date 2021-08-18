const { merge } = require('webpack-merge');
const WebpackBar = require('webpackbar');
const { SERVER_HOST, SERVER_PORT } = require('../constant');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    stats: 'errors-only', // 终端仅打印 error
    clientLogLevel: 'silent',
    compress: true, // 是否启用 gzip 压缩
    open: true,
    hot: true,
  },
  plugins: [
    new WebpackBar({
      name: 'compiling',
      color: '#fa8c16',
    }),
  ],
});
