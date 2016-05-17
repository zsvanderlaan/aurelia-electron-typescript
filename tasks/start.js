'use strict';

var childProcess = require('child_process');
var electron = require('electron-prebuilt');
var gulp = require('gulp');
var paths = require('./paths');

gulp.task('start', ['build', 'watch'], function () {
    childProcess.spawn(electron, [paths.output], {
        stdio: 'inherit'
    })
    .on('close', function () {
        // User closed the app. Kill the host process.
        process.exit();
    });
});