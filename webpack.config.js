const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  
  name: process.env.NODE_ENV == 'production' ? 'production' : 'development',
  mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',

  entry: {
    'babel-polyfill',
    'app': './src/_assets/js/app.js'
  },

  output: {
    path: path.resolve(__dirname, 'src'),
    filename: './js/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin(
      {
        filename: "./css/[name].css",
        chunkFilename: "./css/[id].css"
      }
    )
  ]
};