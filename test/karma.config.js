var webpack = require("webpack");
var path = require('path');

var webpackConfig = require('../webpack.config');


module.exports = function(config) {
  config.set({

    files: [
      '../node_modules/phantomjs-polyfill/bind-polyfill.js',
      //'../app/vendor.ts',
      'tests.js'
      // each file acts as entry point for the webpack configuration
    ],

    // frameworks to use
    frameworks: ['jasmine'],

    preprocessors: {
      // only specify one entry point
      // and require all tests in there
      '**/*.spec.ts': ['webpack'],
      '../app/vendor.ts': ['webpack'],
      'tests.js': ['webpack']
    },


    reporters: ['spec'],

    webpack: Object.assign({},
      webpackConfig,
      {
        plugins: []
      }
    ),

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      noInfo: true,
      devtool: 'eval'
    },



    plugins: [
      require("karma-webpack"),
      require("karma-jasmine"),
      require("karma-phantomjs-launcher"),
      require("karma-spec-reporter")
    ],

    browsers: ['PhantomJS', 'Chrome']
  });
};