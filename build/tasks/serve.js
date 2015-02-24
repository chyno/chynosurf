var gulp = require('gulp');
//var browserSync = require('browser-sync');
var express = require('express'), 
     path   = require('path');

gulp.task('serve', ['build'], function(done) {
  var app = express();
 
 var rootpath = path.join(__dirname, '../../.');

 app.use(express.static(rootpath));
 app.listen(9000);
 console.log("Direcrotry Name: " + rootpath);


 // app.set('views', path.join(__dirname, '/'));
  app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
  });

});

/*
gulp.task('serve', ['build'], function(done) {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
        next();
      }
    }
  }, done);
});
*/