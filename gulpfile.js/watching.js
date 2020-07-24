const { watch } = require('gulp');
const { css } = require('./css');
const { html } = require('./html');
const { js } = require('./js');
const { images } = require('./images');

function watchFiles(params) {
    watch("src/**/*.html", html);
    watch("src/**/**/*.scss", css);
    watch("src/js/**/*.js", js);
    watch("src/img/**/*.+(png|jpg|gif|ico|svg|webp)", images);
}

exports.watching = watchFiles;