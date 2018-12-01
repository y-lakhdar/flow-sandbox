'use strict';

const gulp = require('gulp');
const zip = require('gulp-zip');

gulp.task('zipForGitReleases', () => {
  return gulp
    .src('bin/**/*')
    .pipe(zip('flow-sandbox.zip'))
    .pipe(gulp.dest('./'));
});
