var gulp = require('gulp');
    plugins = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create(),
    del = require('del');
    

var styles =  [
                './assets/styles/main.scss'
              ]

var scripts = [
                './assets/scripts/main.js'
              ]

var devUrl = 'example.dev';


gulp.task('sass', function(){
  return gulp.src(styles)
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

gulp.task('scripts', function(){
  return gulp.src(scripts)
    .pipe(plugins.concat('main.js'))
    .pipe(plugins.minify({
      ext:{
        min:'.js'
      },
      noSource: true
    }))
    .pipe(plugins.jshint())
    .pipe(plugins.plumber({
      errorHandler: plugins.notify.onError("Error: <%= error.message %>")
    }))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('fonts', function(){
  return gulp.src([
      './assets/fonts/*'
    ])
    .pipe(gulp.dest('dist/fonts'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('clean', function () {
  return del([
    'dist',
  ]);
});

gulp.task('watch', ['sass', 'scripts', 'fonts'], function() {

  browserSync.init({
    proxy: "http://" + devUrl,
    host: devUrl,
    files: "*.html"
  });

  gulp.watch('./assets/styles/*.scss', ['sass']);
  gulp.watch('./assets/styles/**/*.scss', ['sass']);
  gulp.watch('./assets/scripts/*.js', ['scripts']);
  gulp.watch('./app.js', ['bundle']);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./views/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'scripts', 'fonts']);