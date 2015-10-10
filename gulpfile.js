const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const react = require('gulp-react');

gulp.task(
  'compile-es6',
  () => {
    return gulp.src(['src/**/*.js', 'src/**/*.jsx', '!src/renderer/semantic/**/*.js'])
      .pipe(plumber())
      .pipe(babel())
      .pipe(react())
      .pipe(gulp.dest('app/'));
  }
);

gulp.task(
  'compile-html',
  () => {
    gulp.src('src/**/*.html')
      .pipe(gulp.dest('app'));
  }
);

gulp.task(
  'semantic-ui',
  () => {
    gulp.src('src/renderer/semantic/dist/**/*')
      .pipe(gulp.dest('app/renderer/semantic/dist'));
  }
);

gulp.task(
  'compile-scss',
  () => {
    gulp.src('src/**/*.scss')
      .pipe(sass({ includePaths: ['node_modules'] }).on('error', sass.logError))
      .pipe(gulp.dest('app'));
  }
);

gulp.task(
  'default',
  ['compile-scss', 'compile-es6', 'compile-html', 'semantic-ui']
);

gulp.task('watch', () => {
  gulp.watch(['src/**/*.js'], ['default']);
  gulp.watch(['src/**/*.jsx'], ['default']);
  gulp.watch(['src/**/*.scss'], ['default']);
});
