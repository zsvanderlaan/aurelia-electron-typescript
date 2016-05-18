var gulp = require('gulp');
var paths = require('./paths');

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', function () {
    gulp.watch(paths.source + '**/*.ts',   ['build-scripts']);
    gulp.watch(paths.source + '**/*.html', ['build-html']);
    gulp.watch(paths.source + '**/*.scss', ['build-styles']);
    gulp.watch('system.config.js', ['build-bundles', 'build-system']);   
});