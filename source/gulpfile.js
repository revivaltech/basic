var  gulp = require('gulp'),
    watch = require('gulp-watch'),
  connect = require('gulp-connect');
 
gulp.task('webserver', function() {
  connect.server({
    livereload: true
    /*
  port: 80,
  host: 'gulp.dev'
    */
  });
});

gulp.task('livereload', function () {
    gulp.src(['index.html', 'assets/**/*.*'])
        .pipe(watch(['index.html']))
        //.pipe(debug({verbose: true}))
        .pipe(connect.reload());
});

gulp.task('default', ['webserver', 'livereload']);

