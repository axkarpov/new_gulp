const { series, parallel } = require('gulp');
const { clean } = require('./clean');
const { css } = require('./css');
const { html } = require('./html');
const { js } = require('./js');
const { images } = require('./images');

let build = series(clean, parallel(js, css, html, images));

exports.build = build;