var gulp = require('gulp');
var concatcss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var clean = require('gulp-clean');
var gzip = require('gulp-gzip');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');

// Duplicate source file structure into build
gulp.task('copy', function() {
  gulp.src('source/**/*').pipe(gulp.dest('build/'));
});

// Minify site.css
gulp.task('minify-site-css', function() {
  gulp.src('build/css/site.css')
  .pipe(cssmin())
  .pipe(gulp.dest('build/css/'));
});

// Minify reset.css
gulp.task('minify-reset-css', function() {
  gulp.src('build/css/reset.css')
  .pipe(cssmin())
  .pipe(gulp.dest('build/css/'))
});

// Gzip site.css
gulp.task('compress-site-css', function() {
  gulp.src('build/css/site.css')
  .pipe(gzip())
  .pipe(gulp.dest('build/css/'));
});

// Gzip reset.css
gulp.task('compress-reset-css', function() {
  gulp.src('build/css/reset.css')
  .pipe(gzip())
  .pipe(gulp.dest('build/css/'));
});

// Minify index.html
gulp.task('minify-index-html', function() {
  return gulp.src('build/index.html')
  .pipe(htmlmiin({ collapseWhitespace: true }))
  .pipe(gulp.dest('build/'));
});

// Gzip index.html
gulp.task('compress-index-html', function() {
  gulp.src('build/index.html')
  .pipe(gzip())
  .pipe(gulp.dest('build/'))
});

// Run tasks in order
gulp.task('sequence', function(callback) {
  runSequence('')
});

// Run task sequence with `build`
gulp.task('buid', ['sequence']);
