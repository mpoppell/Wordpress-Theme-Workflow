// npm install 'gulpjs/gulp.git#4.0' --save-dev

var gulp = require('gulp')
var log = require('fancy-log')
var concat = require('gulp-concat')
var compass = require('gulp-compass')
var browserify = require('gulp-browserify')
// var livereload = require('gulp-livereload')
// var gulpif = require('gulp-if')
// var babelMinify = require('gulp-babel-minify')
var jsminify = require('gulp-uglify')
var jsonminify = require('gulp-jsonminify')
var browserSync = require('browser-sync').create()
var cleanCSS = require('gulp-clean-css')

var themeDirectory = '../themes/underscores-child/'
var sources =
  {
    'sass': 'compass/*.scss',
    'js': ['js/mustache.js'],
    'json': ['js/data.json'],
    'php': [themeDirectory + '*.php'],
    'css': [themeDirectory + '*.css'],
    'mustache': ['js/employer.mst'],
    'bootstrapPackageScss': 'node_modules/bootstrap/scss/**',
    'bootstrapPackageJs': 'node_modules/bootstrap/dist/js/bootstrap.min.js'
  }
var paths =
  {
    'sassDist': themeDirectory,
    'jsDev': 'js/',
    'jsDist': themeDirectory + 'js/',
    'mustache': themeDirectory + 'js/',
    'bootstrapDev': 'compass/bootstrap/'
  }
var watching = {
  'sass': sources.sass,
  'js': ['js/template.js'],
  'json': ['js/*.json'],
  'css': [themeDirectory + 'style.css', themeDirectory + 'sass.css'],
  'php': [themeDirectory + 'functions.php'],
  'html': ['js/test.html', 'js/index.html'],
  'mustache': ['js/employer.mst']
}

var sassStyle
var env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  sassStyle = 'expanded'
} else {
  sassStyle = 'compressed'
}

gulp.task('browser-sync', function () {
  browserSync.init({
    proxy: 'localhost'
  })
  log('BrowserSync Initiated')
})

gulp.task('compass', function () {
  return gulp.src(sources.sass)
    .pipe(compass({
      sass: 'compass',
      css: '',
      style: sassStyle,
      comments: true
    }))
    // .on('error', log('error'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.sassDist))
    .pipe(browserSync.stream())
})

gulp.task('bootstrapUnpackage', function () {
  return gulp.src([sources.bootstrapPackageJs, sources.bootstrapPackageScss])
    .pipe(gulp.dest(paths.bootstrapDev))
})

gulp.task('js', function () {
  return gulp.src(sources.js)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest(paths.jsDev))
    .pipe(jsminify())
    .pipe(gulp.dest(paths.jsDist))
    .pipe(browserSync.stream())
})

gulp.task('json', function () {
  return gulp.src(sources.json)
    .pipe(jsonminify())
    .pipe(gulp.dest(paths.jsDist))
    .pipe(browserSync.stream())
})

gulp.task('mustache', function () {
  return gulp.src(sources.mustache)
    .pipe(gulp.dest(paths.mustache))
    .pipe(browserSync.stream())
})

gulp.task('css', function () {
  return gulp.src(sources.css)
  .pipe(browserSync.stream())
})

gulp.task('php', function (done) {
  browserSync.reload()
  done()
})

gulp.task('html', function (done) {
  browserSync.reload()
  done()
})

gulp.task('watch', function (done) {
  gulp.watch(watching.sass, gulp.parallel('compass'))
  gulp.watch(watching.js, gulp.parallel('js'))
  gulp.watch(watching.json, gulp.parallel('json'))
  gulp.watch(watching.css, gulp.parallel('css'))
  gulp.watch(watching.php, gulp.parallel('php'))
  gulp.watch(watching.html, gulp.parallel('html'))
  gulp.watch(watching.mustache, gulp.parallel('mustache'))
  done()
})

gulp.task('default', gulp.parallel(
  'browser-sync',
  'compass',
  'js',
  'json',
  'mustache',
  'css',
  'php',
  'html',
  'watch'))
