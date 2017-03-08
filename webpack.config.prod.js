var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
module.exports = {
  devtool: 'cheap-source-map',
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
    noInfo: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin("bundle.css"),
    new CopyWebpackPlugin([
      {
        from: 'src/public/**/*'
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
