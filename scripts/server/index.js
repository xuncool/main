const Webpack = require('webpack');
const WebpaclDevServer = require('webpack-dev-server');
const chalk = require('chalk');
const webpackDevConfig = require('../config/webpack.dev');
const { SERVER_HOST, SERVER_PORT } = require('../constant');
const logger = require('./chalk');

const compiler = Webpack(webpackDevConfig);
const devServerOptions = { ...webpackDevConfig.devServer };

WebpaclDevServer.addDevServerEntrypoints(webpackDevConfig, devServerOptions);
const server = new WebpaclDevServer(compiler, devServerOptions);

async function startServer() {
  try {
    server.listen(SERVER_PORT, SERVER_HOST, (err) => {
      if (err) {
        return logger.error(err.message);
      }
      return logger.start(SERVER_PORT, SERVER_HOST);
    });
  } catch (error) {
    console.log(chalk.red(error.message));
  }
}

startServer();
