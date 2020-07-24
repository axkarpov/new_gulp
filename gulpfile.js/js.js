const { src, dest } = require('gulp');
const { resolve } = require('path');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');

function js() {
  return src('src/js/script.js')
    .pipe(plumber())
    .pipe(webpack({
      mode: 'production',
      devtool: 'source-map',
      output: { filename: 'bundle.js' },
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              "presets": ["@babel/preset-env"],
              "plugins": ["@babel/plugin-transform-runtime"],
            },
          },
        ],
      },
      resolve: {
        alias: {
          Components: resolve('./app/blocks'),
          Libs: resolve('./app/blocks/libs'),
          Generic: resolve('.app/blocks/generic'),
        },
      },
    }))
    .pipe(dest('./app/js/'))
    .pipe(browserSync.reload({ stream: true }));
}

exports.js = js;
