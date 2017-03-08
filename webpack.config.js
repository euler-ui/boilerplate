var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
module.exports = {
  // devtool: 'inline-source-map',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: './src/index'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("bundle.css"),
    new CopyWebpackPlugin([
      {
        context: "src/public",
        from: '**/*'
      }
    ])
  ],
  module: {
    rules: [

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }, {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"]
  }
}
