const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const path = require('path');

const resolve = (p) => path.resolve(__dirname, '../config', p);

const loadEnv = (mode) => {
  const load = (envPath) => {
    try {
      const config = dotenv.config({
        path: envPath,
      });
      dotenvExpand(config);
    } catch (e) {
      console.log(`${mode} 未找到`);
    }
  };
  const envPath = resolve('.env');
  const envModePath = resolve(`.env.${mode}`);
  const envModeLocalPath = resolve(`.env.${mode}.local`);

  load(envModeLocalPath);
  load(envModePath);
  load(envPath);
};

loadEnv(process.env.mode);
console.log(process.env.test);
