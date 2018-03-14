var gulp = require('gulp')
var log = require('fancy-log')
var concat = require('gulp-concat')
var compass = require('gulp-compass')
var browserify = require('gulp-browserify')
var livereload = require('gulp-livereload')
var gulpif = require('gulp-if')
var babelMinify = require('gulp-babel-minify')
var browserSync = require('browser-sync').create()

var themeDirectory = '../themes/underscores-child/'
var sassSources = 'compass'
var sassOutput = themeDirectory
var sassStyle
var outputDir
var jsSources
var env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  outputDir = 'builds/development/'
  sassStyle = 'expanded'
} else {
  outputDir = 'builds/production/'
  sassStyle = 'compressed'
}

gulp.task('browser-sync', function () {
  browserSync.init({
    proxy: 'localhost'
  })
  log('BrowserSync Initiated')
})

gulp.task('compass', function (done) {
  gulp.src(sassSources)
    .pipe(compass({
      sass: sassSources,
      css: themeDirectory,
      style: sassStyle,
      comments: true
    }))
    // .on('error', log.log)
    .pipe(gulp.dest(sassOutput))
    .pipe(browserSync.stream())
  done()
})

gulp.task('watch', function (done) {
  livereload.listen(35729)
  gulp.watch('compass/*.scss', gulp.parallel('compass'))
  done()
})

gulp.task('default', gulp.parallel('browser-sync', 'compass', 'watch'))

gulp.task('log', function () {
})
