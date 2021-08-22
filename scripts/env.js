const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const path = require('path');

const resolveConfig = (p) => path.resolve(__dirname, '../env', p);

/**
 * 加载.env 文件
 */
const loadEnv = (mode = process.env.mode) => {
  const modeAfterFix = mode ? `.${mode}` : '';
  const load = (envPath) => {
    try {
      const config = dotenv.config({ path: envPath });
      dotenvExpand(config);
    } catch (e) {
      console.log(`${mode} 未找到`);
    }
  };

  const envPath = resolveConfig('.env');
  const envModePath = resolveConfig(`.env${modeAfterFix}`);
  const envModeLocalPath = resolveConfig(`.env${modeAfterFix}.local`);
  load(envModeLocalPath);
  load(envModePath);
  load(envPath);
};

/**
 * 获取需要添加到生产环境中变量
 */
const getCompileVar = (prefix = process.env.app_prefix || 'APP_') => {
  const appEnvs = Object.create(null);
  Object.keys(process.env).forEach((name) => {
    if (name.startsWith(prefix)) {
      appEnvs[`process.env.${name}`] = JSON.stringify(process.env[name]);
    }
  });

  return appEnvs;
};

/**
 * 读取并返回APP 环境变量
 */
const getAppEnv = (prefix) => {
  loadEnv();
  return getCompileVar(prefix);
};

module.exports = {
  getAppEnv,
  getCompileVar,
  loadEnv,
};
