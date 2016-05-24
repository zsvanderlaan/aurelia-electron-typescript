var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var inject = require('gulp-inject-string');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

var jetpack = require('fs-jetpack');
var runSequence = require('run-sequence');
var merge = require('merge-stream');

var paths = require('./paths.js');
var bundles = require('./bundles.js');

//var sanitizeTemplate = require('./sanitize-template');

gulp.task('build-clean', function () {
    return jetpack
        .cwd('./' + paths.output)
        .dirAsync('.', { empty: true });
});

gulp.task('build-modules', function () {
    return gulp.src(paths.source + 'node_modules/**/*')
        .pipe(gulp.dest(paths.output + 'node_modules'));
});

gulp.task('build-html', function () {
    return gulp.src(paths.source + '**/*.html')
	//.pipe(sanitizeTemplate())
    .pipe(gulp.dest(paths.output));
});

gulp.task('build-resources', function () {
    return gulp.src(paths.source + 'resources/**/*')
        .pipe(gulp.dest(paths.output + 'resources'));
});

gulp.task('build-system', function () {
    return merge(
        gulp.src(paths.source + 'package.json')
            .pipe(gulp.dest(paths.output)),

        gulp.src('jspm_packages/system.js')
            .pipe(gulp.dest(paths.output)));
});


gulp.task('build-styles', function(){
    return gulp.src(paths.source + '**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.output));
});

gulp.task('build-bundle', function () {
    return bundler
        .bundle({
            force: true,
            baseURL: '.',
            configPath: './system.config.js',
            bundles: bundles,
            inject: false
        });
});

gulp.task('build-system-config', function () {
    return gulp.src('system.config.js')
        .pipe(inject.after('baseURL: ', '__dirname + '))
        .pipe(gulp.dest(paths.output));
});

gulp.task('build-scripts-background', function () {
    var project = ts.createProject({
        declaration: false,
        module: 'commonjs',
        target: 'es6',
        experimentalDecorators: true
    });

    var tsResult = gulp
        .src([
            paths.source + 'startup.ts',
            'typings/index.d.ts'
        ])
        .pipe(ts(project));

    return tsResult.js.pipe(gulp.dest(paths.output));
});

gulp.task('build-scripts-browser', function () {
    var project = ts.createProject({
        declaration: false,
        module: 'system',
        target: 'es6',
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        allowSyntheticDefaultImports: true
    });

    var tsResult = gulp
        .src([
            '!' + paths.source + 'startup.ts',
            paths.source + '**/*.ts',
            `jspm_packages/**/*.d.ts`,
            'typings/index.d.ts'
        ])        
        .pipe(ts(project));

    return tsResult.js.pipe(gulp.dest(paths.output));
});

gulp.task('build-scripts', function (callback) {
    runSequence([
        'build-scripts-browser',
        'build-scripts-background'], callback);
});

gulp.task('build', function (callback) {
    runSequence(
        'build-clean', [
            'build-scripts',
            'build-modules',
            'build-bundle',
            'build-resources',
            'build-styles',
            'build-system',
            'build-system-config',
            'build-html'],
        callback);
});

