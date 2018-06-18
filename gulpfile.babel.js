'use strict';

import gulp from 'gulp';
import webpack from 'webpack';
import path from 'path';
import gutil from 'gulp-util';
import serve from 'browser-sync';
import del from 'del';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import colorsSupported from 'supports-color';
import historyApiFallback from 'connect-history-api-fallback';

let root = 'src';
let appRoot = 'app';

// map of all paths
let paths = {
    entry: {
        dev: path.join(__dirname, root, appRoot, 'index.js'),
        prod: path.join(__dirname, root, 'index.js')
    },
    dist: path.join(__dirname, 'dist')
};

gulp.task('clean', (cb) => {
    del([paths.dist]).then(function (paths) {
        gutil.log('[clean]', paths);
        cb();
    });
});

gulp.task('demo-prod', ['clean'], (cb) => {
    const config = require('./config/webpack.dist.config');

    createDistFiles(config, cb);
});

gulp.task('prod', ['clean'], (cb) => {
    const config = require('./config/webpack.dist.config');
    config.entry.app = paths.entry.prod;

    createDistFiles(config, cb);
});

gulp.task('dev', () => {
    let config = require('./config/webpack.dev.config');

    let compiler = webpack(config);

    serve({
        port: process.env.PORT || 3000,
        open: false,
        server: {
            baseDir: 'src/app'
        },
        middleware: [
            historyApiFallback(),
            webpackDevMiddleware(compiler, {
                stats: {
                    colors: colorsSupported,
                    chunks: false,
                    modules: false
                },
                publicPath: config.output.publicPath
            }),
            webpackHotMiddleware(compiler)
        ]
    });
});

function createDistFiles(config, callback) {
    webpack(config, (err, stats) => {
        if(err) {
            throw new gutil.PluginError('webpack', err);
        }

        gutil.log('[webpack]', stats.toString({
            colors: colorsSupported,
            hash: false,
            version: false,
            timings: false,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: true,
            warnings: true,
            publicPath: false
        }));

        callback();
    });
}

gulp.task('default', ['dev']);
