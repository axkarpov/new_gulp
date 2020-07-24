const { series, parallel } = require('gulp');
const { clean } = require('./clean');
const { css } = require('./css');
const { html } = require('./html');
const { js } = require('./js');

let build = series(clean, parallel(js, css, html));

exports.build = build;