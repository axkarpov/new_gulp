const { watch } = require('gulp');
const { css } = require('./css');
const { html } = require('./html');
const { js } = require('./js');

function watchFiles(params) {
    watch("src/**/*.html", html);
    watch("src/**/**/*.scss", css);
    watch("src/js/**/*.js", js);
}

exports.watching = watchFiles;