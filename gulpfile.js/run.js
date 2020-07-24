const { parallel } = require('gulp');
const { watching } = require('./watching');
const { server } = require('./server');
const { build } = require('./build');

exports.run = parallel(build, watching, server);
