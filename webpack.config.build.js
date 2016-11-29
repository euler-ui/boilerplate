var path = require('path')
var webpack = require('webpack')

module.exports = [{
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: __dirname + '/build/public',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        },
        include: __dirname
      }
    ]
  }
}
// , {
//   context: __dirname + '/src',
//   entry: './server.js',
//   output: {
//     path: __dirname + '/build',
//     filename: 'server.js',
//     libraryTarget: 'commonjs2'
//   },
//   target: 'node',
//   externals: /node_modules/,
// }
];
