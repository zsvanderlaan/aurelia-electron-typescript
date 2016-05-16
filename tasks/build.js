var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var inject = require('gulp-inject-string');
var ts = require('gulp-typescript');
var paths = require('./paths.js');
var bundles = require('./bundles.js');

gulp.task('build-copy', function () {

    gulp.src(paths.source + '**/*.html')
        .pipe(gulp.dest(paths.output));
        
    gulp.src(paths.source + 'package.json')
        .pipe(gulp.dest(paths.output));
        
    gulp.src('jspm_packages/system.js')
        .pipe(gulp.dest(paths.output));
});

gulp.task('build-bundles', function () {
   return bundler
        .bundle({
            force: true,
            baseURL: '.',
            configPath: './system.config.js',
            bundles: bundles
        });
});

gulp.task('build-system-config', ['build-bundles'], function () {
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
            paths.source + 'main.ts',
            'typings/main.d.ts'
        ])
        .pipe(ts(project));

    tsResult.js.pipe(gulp.dest(paths.output));
});

gulp.task('build-scripts-browser', function () {
    var project = ts.createProject({
        declaration: false,
        module: 'system',
        target: 'es6',
        experimentalDecorators: true
    });
    var tsResult = gulp
        .src([
            '!' + paths.source + 'main.ts',
            paths.source + '**/*.ts',
            `jspm_packages/**/*.d.ts`,
            'typings/browser.d.ts'
        ])
        .pipe(ts(project));

    tsResult.js.pipe(gulp.dest(paths.output));
});

gulp.task('build', [
    'build-scripts-browser',
     'build-scripts-background',
     'build-bundles',
     'build-system-config',
     'build-copy'    
])