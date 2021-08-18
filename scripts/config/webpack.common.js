const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const {
  PROJECT_PATH,
  IS_DEV,
  SERVER_HOST,
  SERVER_PORT,
} = require('../constant');

const resolveRootPath = (path) => resolve(PROJECT_PATH, path);

module.exports = {
  entry: {
    app: resolveRootPath('src/app.js'),
  },
  output: {
    filename: `js/[name]${IS_DEV ? '' : '.[hash:16]'}.js`,
    path: resolveRootPath('dist'),
  },
  devtool: 'eval-source-map',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    stats: 'error-only', // 终端仅打印 error
    clientLogLevel: 'silent',
    compress: true, // 是否启用 gzip 压缩
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolveRootPath('public/index.html'),
      filename: 'index.html',
      cache: false,
    }),
  ],
};
