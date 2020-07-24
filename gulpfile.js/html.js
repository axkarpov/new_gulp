const { src, dest } = require('gulp');
//const { resolve } = require('path');
const browsersync = require("browser-sync").create();
const fileinclude = require("gulp-file-include");

function html() {
    return src("src/*.html")
        .pipe(fileinclude())
        .pipe(dest("dist/"))
        .pipe(browsersync.stream())
}

exports.html = html;
