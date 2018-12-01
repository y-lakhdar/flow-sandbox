const gulp = require('gulp');
const del = require('del');
const requireDir = require('require-dir');
const runsequence = require('run-sequence');
const gutil = require('gulp-util');

process.env.NODE_ENV = gutil.env.config || 'production';

requireDir('./gulpTasks');

gulp.task('default', ['build']);

// Remove bin and all zip folders.
gulp.task('clean', function() {
  return del(['./bin', './zip/**.zip', '*.log']);
});

gulp.task('build', function(done) {
  runsequence('clean', 'setup', 'compile', done);
});
