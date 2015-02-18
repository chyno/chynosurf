var gulp = require('gulp');
var karma = require('gulp-karma');
 

 
var testFiles = [];
 
gulp.task('test', function() {
  // Be sure to return the stream 
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'start'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero 
      console.log('.. Error running test');
      console.log(err);
      throw err;
    });
});