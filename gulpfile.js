const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const runSequence = require('gulp4-run-sequence');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');

gulp.task('greyfox', done => {
   gulp.src('./source/scss/index.scss')
   .pipe(sass())
   .pipe(concat('greyfox.css'))
   .pipe(cleanCss()) // 是否压缩代码
   .pipe(gulp.dest('./'));
   done();
});

gulp.task('default',done => {
   gulp.watch([
      './source/scss/*.scss'
   ])
   .on('change', function(path, stats) {
      runSequence('greyfox');
   });
   done();
});