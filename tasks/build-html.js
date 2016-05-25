var gulp = require('gulp');
var gutil = require('gulp-util');

var voidTags = [
    'area', 'base', 'br', 'col', 'embed', 'hr', 
    'img', 'input', 'keygen', 'link', 'meta', 
    'param', 'source', 'track', 'wbr'];

var checkSelfClose = function () {
  function sanitize(file, cb) { 
      
    var dirty = String(file.contents);
   
    var matches = dirty.match(/(?:\<[\/\\\-\"\'!() a-z=.]+\/\>)/g);
    
    var customTags = [];
        
    if(matches && matches.length > 0)
    {       
        matches.forEach((match)=>{
            var tag = match.match(/[a-z\-]+/)[0];
             
            if(voidTags.indexOf(tag) < 0)
                customTags.push(tag);   
        });                   
    };

    if(customTags.length > 0)
        gutil.log('WARNING', 'found ' + customTags.length + " non-void self-closed tags in", 
        file.path.substring(file.cwd.length, file.path.Length),
        "tags:", customTags
        );
    
    cb(null, file);
  }
  return require('event-stream').map(sanitize);
}

gulp.task('build-html', function () {
    return gulp.src('source/**/*.html')
	.pipe(checkSelfClose())
    .pipe(gulp.dest('output'));
});
