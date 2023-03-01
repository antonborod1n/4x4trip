const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    index_subacromial: path.resolve(__dirname, './src/index_subacromial.js'),
    index_product: path.resolve(__dirname, './src/index_product.js'),
    index_quests: path.resolve(__dirname, './src/index_quests.js'),
    index_team: path.resolve(__dirname, './src/index_team.js'),
    index_activity: path.resolve(__dirname, './src/index_activity.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/template.html'), // шаблон
      filename: 'index.html', // название выходного файла
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/subacromial.html'),
      filename: 'subacromial.html',
      chunks: ['index_subacromial']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/product.html'),
      filename: 'product.html',
      chunks: ['index_product']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/quests.html'),
      filename: 'quests.html',
      chunks: ['index_quests']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/team.html'),
      filename: 'team.html',
      chunks: ['index_team']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/activity.html'),
      filename: 'activity.html',
      chunks: ['index_activity']
    }),

    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "src/images", to: "images"
        }
      ]
    })
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // картинки
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      //Шрифты и svg
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      //SCSS to CSS
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // HTML Templates with html-loader
      {
        test: /\.(html)$/,
        include: path.join(__dirname, 'src/views'),
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }
      }
    ]
  },

  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: './dist',
    //contentBase: path.resolve(__dirname, './dist'),
    open: true, compress: true, hot: true, port: 8080,
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/].*\.js$/,
          chunks: 'all'
        }
      }
    }
  }
}