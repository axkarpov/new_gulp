const browsersync = require("browser-sync").create();

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: "./dist/"
        },
        port:3000,
        notify: false
    })
}

exports.server = browserSync;