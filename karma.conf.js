module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: false,
    frameworks: ['mocha', 'chai'],
    files: [
      // 'src/components/*.js',
      // 'src/index.js',
      {
        pattern: 'src/public/**',
        included: false, 
        served: true,
        watched: false
      },
      'tests/**/*Test.js'
    ],
    proxies: {
      "/public/images/": "/base/src/public/images/"
    },
    preprocessors: {
      // 'tests.webpack.js': [ 'webpack', 'sourcemap' ]
      // 'src/components/*.js': [ 'webpack'],
      'tests/**/*Test.js': ['webpack']
    // 'src/index.js': ['webpack']
    },
    reporters: ['dots'],
    webpack: {
      devtool: 'inline-source-map',
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
      },
      watch: true
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};