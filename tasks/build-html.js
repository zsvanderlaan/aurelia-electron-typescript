"use strict";

var gulp = require('gulp');
var gutil = require('gulp-util');
var linter = require('gulp-aurelia-template-lint');

const parse5_1 = require('parse5');
const stream_1 = require('stream');


gulp.task('build-html', function () {
    return gulp.src(['source/**/*.html'])
        .pipe(linter())
        .pipe(gulp.dest('output'));
});
