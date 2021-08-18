const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const { PROJECT_PATH, IS_DEV } = require('../constant');

const resolveRootPath = (path) => resolve(PROJECT_PATH, path);
const getCssloader = (importLoaders = 1) => {
  return [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {
        modules: false,
        sourceMap: IS_DEV,
        importLoaders,
      },
    },
    {
      loader: 'postcss-loader',
    },
  ];
};

const getUrlLoader = (path) => {
  return {
    loader: 'url-loader',
    options: {
      name: '[name].[contenthash:8].[ext]',
      outputPath: `assets/${path}`,
    },
  };
};

module.exports = {
  entry: {
    app: resolveRootPath('src/index.tsx'),
  },
  output: {
    filename: `js/[name]${IS_DEV ? '' : '.[hash:16]'}.js`,
    path: resolveRootPath('dist'),
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      Src: resolve(PROJECT_PATH, './src'),
      Components: resolve(PROJECT_PATH, './src/components'),
      Utils: resolve(PROJECT_PATH, './src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getCssloader(),
      },
      {
        test: /\.scss$/,
        use: [
          ...getCssloader(2),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          ...getCssloader(2),
          {
            loader: 'less-loader',
            options: {
              sourceMap: IS_DEV,
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [getUrlLoader('images')],
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: [getUrlLoader('images')],
      },
      {
        test: /\.(tsx?|js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            exclude: /node_modules/,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolveRootPath('public/index.html'),
      filename: 'index.html',
      cache: false,
    }),
    new CleanWebpackPlugin(),
  ],
};
