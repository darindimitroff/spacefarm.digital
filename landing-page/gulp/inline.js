'use strict';

var path = require('path');
var smoosher = require('gulp-smoosher');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var dest = path.join(taskTarget);

  gulp.task('smoosh', function () {
    gulp.src('./tmp/index.html')
        .pipe(smoosher())
        .pipe(gulp.dest('./tmp'));
});
};
