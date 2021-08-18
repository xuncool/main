const path = require('path');

const PROJECT_PATH = path.resolve(__dirname, '../');
const PROJECT_NAME = path.parse(PROJECT_PATH).name;
const IS_DEV = process.env.NODE_ENV !== 'production';
const SERVER_PORT = '4200';
const SERVER_HOST = '0.0.0.0';

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  IS_DEV,
  SERVER_PORT,
  SERVER_HOST,
};
