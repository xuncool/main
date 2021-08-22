const Webpack = require('webpack');
const WebpaclDevServer = require('webpack-dev-server');
const chalk = require('chalk');
const webpackDevConfig = require('../config/webpack.dev');
const logger = require('./chalk');

const compiler = Webpack(webpackDevConfig);
const devServerOptions = { ...webpackDevConfig.devServer };

WebpaclDevServer.addDevServerEntrypoints(webpackDevConfig, devServerOptions);
const server = new WebpaclDevServer(compiler, devServerOptions);

async function startServer() {
  try {
    server.listen(devServerOptions.port, devServerOptions.host, (err) => {
      if (err) {
        return logger.error(err.message);
      }
      return logger.start(devServerOptions.port, devServerOptions.host);
    });
  } catch (error) {
    console.log(chalk.red(error.message));
  }
}

startServer();
