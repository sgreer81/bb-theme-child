var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var wiredep = require('gulp-wiredep')
var del = require('del');

gulp.task('bower-styles', function () {
  return gulp.src('assets/styles/main.scss')
    .pipe(wiredep())
    .pipe(gulp.dest('assets/styles'));
});

gulp.task('bower-scripts', ['clean:scripts'], function () {
  return gulp.src('./bower.json')
    .pipe(plugins.mainBowerFiles('**/*.js'))
    .pipe(plugins.concat('bower.js'))
    .pipe(gulp.dest('assets/tmp'));
});

gulp.task('sass', function(){
  return gulp.src('assets/styles/main.scss')
    .pipe(plugins.plumber({
      errorHandler: plugins.notify.onError("Error: <%= error.message %>")
    }))
    .pipe(plugins.sass()) // Using gulp-sass
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(plugins.cssnano())
    .pipe(plugins.size())
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('scripts', ['bower-scripts'], function(){
  return gulp.src(['assets/tmp/bower.js', 'assets/scripts/main.js'])
    .pipe(plugins.plumber({
      errorHandler: plugins.notify.onError("Error: <%= error.message %>")
    }))
    .pipe(plugins.concat('main.js'))
    .pipe(plugins.minify({
      ext:{
        min:'.js'
      },
      noSource: true
    }))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('clean:scripts', function () {
  return del([
    'assets/tmp/bower.js',
  ]);
});

gulp.task('clean', function () {
  return del([
    'dist',
  ]);
});

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: "http://beaver-child.dev",
    host: "beaver-child.dev",
    open: 'external',
    files: "*.php"
  });
})

gulp.task('watch', ['browserSync', 'bower-styles', 'bower-scripts', 'sass', 'scripts'], function (){
  gulp.watch('assets/styles/scss/*.scss', ['sass']);
  gulp.watch('assets/scripts/*.js', ['scripts']);
});

gulp.task('default', ['clean', 'bower-styles', 'bower-scripts', 'sass', 'scripts']);