'use strict';

var gulp = require('gulp');

gulp.task('default', ['hello'], function() {
  console.log("Default task complete!");
});

gulp.task('hello', function(){
  console.log("Hello, beautiful!");
});
