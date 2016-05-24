/*var sanitizeHtml = require('sanitize-html');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

module.exports = function () {
  function check(file, cb) {    
    var dirty = String(file.contents);
    var clean = sanitizeHtml(dirty, {
        allowedTags: false,
        allowedAttributes: false,
        exclusiveFilter: function(frame) {
            return frame.tag === 'a' text.contains(/'/>[\t\n\r]/g,'');
        }
    });
        
    console.log('dirty:' + dirty);
    console.log('clean:' + clean);
    
    if(dirty !== clean)
    {
        throw new PluginError("gulp-sanitize-template", 'Self-closing Tag detected in ' + file.path);
    }
    
    cb(null, file);
  }
  return require('event-stream').map(check);
}*/