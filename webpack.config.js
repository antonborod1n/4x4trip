const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    index_subacromial: path.resolve(__dirname, './src/index_subacromial.js'),
    index_calculation: path.resolve(__dirname, './src/index_calculation.js'),
    index_quests: path.resolve(__dirname, './src/index_quests.js'),
    index_team: path.resolve(__dirname, './src/index_team.js'),
    index_activity: path.resolve(__dirname, './src/index_activity.js'),
    index_contact: path.resolve(__dirname, './src/index_contact.js'),
    index_sertificate: path.resolve(__dirname, './src/index_sertificate.js'),
    index_sertificate1: path.resolve(__dirname, './src/index_sertificate1.js'),
    index_competitions: path.resolve(__dirname, './src/index_competitions.js'),
    index_school: path.resolve(__dirname, './src/index_school.js'),
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
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/subacromial.html'),
      filename: 'subacromial.html',
      chunks: ['index_subacromial'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/calculation.html'),
      filename: 'calculation.html',
      chunks: ['index_calculation'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/quests.html'),
      filename: 'quests.html',
      chunks: ['index_quests'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/team.html'),
      filename: 'team.html',
      chunks: ['index_team'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/activity.html'),
      filename: 'activity.html',
      chunks: ['index_activity'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/contact.html'),
      filename: 'contact.html',
      chunks: ['index_contact'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/sertificate.html'),
      filename: 'sertificate.html',
      chunks: ['index_sertificate'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/sertificate1.html'),
      filename: 'sertificate1.html',
      chunks: ['index_sertificate1'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/competitions.html'),
      filename: 'competitions.html',
      chunks: ['index_competitions'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/school.html'),
      filename: 'school.html',
      chunks: ['index_school'],
    }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/images',
          to: 'images',
        },
      ],
    }),
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      // HTML Templates with html-loader
      {
        test: /\.(html)$/,
        include: path.join(__dirname, 'src/views'),
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
          },
        },
      },
    ],
  },

  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: './dist',
    //contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/].*\.js$/,
          chunks: 'all',
        },
      },
    },
  },
};
