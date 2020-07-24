const { src, dest } = require('gulp');
const browserSync = require('browser-sync');

function images() {
    return src("src/img/**/*.+(png|jpg|gif|ico|svg|webp)")
        .pipe(dest("dist/img/"))
        .pipe(browserSync.stream())
}

exports.images = images;