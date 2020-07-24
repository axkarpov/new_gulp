const { src, dest } = require('gulp');
//const { resolve } = require('path');
const browsersync = require("browser-sync").create();
const scss = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const clean_css = require("gulp-clean-css");
const rename = require("gulp-rename");

function css() {
    return src("src/scss/style.scss")
        .pipe(
            scss({
                outputStyle: "expanded"
            })
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 5 versions"],
                cascade: true
            })
        )
        .pipe(dest("dist/css/"))
        .pipe(clean_css())
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(dest("dist/css/"))
        .pipe(browsersync.stream())
}

exports.css = css;
