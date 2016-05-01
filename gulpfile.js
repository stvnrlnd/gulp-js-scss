'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', ['concatScripts'], function() {
  console.log("Default task complete!");
});

gulp.task('concatScripts', function(){
  gulp.src(['dev/theme/scripts/jquery.js', 'dev/theme/scripts/bootstrap.js'])
    .pipe(concat('jquery-bootstrap.js'))
    .pipe(gulp.dest('build/theme/scripts'));
});

gulp.task('minifyScripts', function() {
  gulp.src('build/theme/scripts/jquery-bootstrap.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/theme/scripts'));
});
