const del  = require("del");

function clean(params) {
    return del("./dist/");
}

exports.clean = clean;