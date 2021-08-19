const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const WebpackBarPlugin = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PROJECT_PATH, IS_DEV } = require('../constant');

const resolveRootPath = (path) => resolve(PROJECT_PATH, path);
const getCssloader = (importLoaders = 1) => {
  return [
    {
      loader: IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
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
    filename: `js/[name]${IS_DEV ? '' : '.[fullhash:16]'}.js`,
    path: resolveRootPath('dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      Src: resolveRootPath('src'),
      Components: resolveRootPath('src/components'),
      Utils: resolveRootPath('src/utils'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
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
    new CopyPlugin({
      patterns: [
        {
          context: resolveRootPath('public'),
          from: '**/*',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/index.html'],
          },
          to: resolveRootPath('dist'),
          toType: 'dir',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: resolveRootPath('public/index.html'),
      filename: 'index.html',
      cache: false,
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: resolveRootPath('tsconfig.json'),
      },
    }),
    new WebpackBarPlugin({
      name: 'compiling',
      color: '#fa8c16',
    }),
  ],
};
