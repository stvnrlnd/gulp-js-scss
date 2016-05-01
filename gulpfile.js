'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', ['concatScripts'], function() {
  console.log("Default task complete!");
});

gulp.task('concatScripts', function(){
  gulp.src([
    'dev/theme/scripts/jquery.js',
    'dev/theme/scripts/bootstrap.js'
  ])
  .pipe(concat('jquery-bootstrap.js'))
  .pipe(gulp.dest('build/theme/scripts'));
});
