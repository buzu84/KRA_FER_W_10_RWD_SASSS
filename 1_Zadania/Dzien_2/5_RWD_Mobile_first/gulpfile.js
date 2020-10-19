// const gulp = require("gulp");
// const sass = require("gulp-sass");
// const sourcemaps = require('gulp-sourcemaps');
//
// gulp.task("sass", function() {
//   return gulp.src('scss/main.scss')
//           .pipe(sourcemaps.init())
//           .pipe(sass({errLogToConsole: true,
//             outputStyle: 'expanded'
//
//           }))
//           .pipe(sourcemaps.write())
//           .pipe(gulp.dest('css'))
// });
//
// gulp.task("watch", function() {
//   gulp.watch("scss/**/*.scss", gulp.series("sass"));
// });
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');

gulp.task('connect', function(cb) {
  connect.server({
    root: './',
    livereload: true
  });
  cb();
});

gulp.task("sass", function() {
  return gulp.src('scss/main.scss')
          .pipe(sourcemaps.init())
          .pipe(sass({errLogToConsole: true}))
          .pipe(sourcemaps.write())
          .pipe(gulp.dest('css'))
          .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
  gulp.watch('*.html', gulp.series('html'));
});

gulp.task('default', gulp.series('connect', 'watch'));
