var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
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
    inline: true,
    quiet: false,
    noInfo: true,
    historyApiFallback: true,
    contentBase: "build",
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        secure: false,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("bundle.css"),
    new CopyWebpackPlugin([

      {
        from: 'src/public/images',
        to: 'images'
      },
      {
        from: 'src/public/index.html',
        to: 'index.html'
      },
      {
        from: 'src/public/fonts',
        to: 'fonts'
      }
    ])
  ],
  module: {
    loaders: [

      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }, {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader?limit=8192'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(otf|ttf|eot|woff|woff2)$/i,
        loader: 'url?name=[path][name].[ext]'
      }
    ]
  }
}
