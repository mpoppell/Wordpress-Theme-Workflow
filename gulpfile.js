// npm install 'gulpjs/gulp.git#4.0' --save-dev

var gulp = require('gulp')
var log = require('fancy-log')
var concat = require('gulp-concat')
var sass = require('gulp-sass')
var browserify = require('gulp-browserify')
// var gulpif = require('gulp-if')
// var babelMinify = require('gulp-babel-minify')
var jsminify = require('gulp-uglify')
var jsonminify = require('gulp-jsonminify')
var handlebars = require('gulp-handlebars')
var browserSync = require('browser-sync').create()
var cleanCSS = require('gulp-clean-css')
var wrap = require('gulp-wrap')
var declare = require('gulp-declare')
const autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')

var themeDirectory = '../themes/underscores-child/'
var sources =
  {
    'sass': 'sass/*.scss',
    'js': ['js/handlebars.js'],
    'json': ['js/employers.json', 'js/keyDict.json'],
    'phpDev': ['themes/*.php'],
    'css': [themeDirectory + '*.css'],
    'handlebars': ['js/templates/*.hbs'],
    'bootstrapPackageScss': 'node_modules/bootstrap/scss/**',
    'bootstrapPackageJs': 'node_modules/bootstrap/dist/js/bootstrap.min.js'
  }
var paths =
  {
    'sassDist': themeDirectory,
    'sassDev': '.',
    'jsDev': '.',
    'jsDist': themeDirectory + 'js/',
    'handlebars': themeDirectory + 'js/',
    'bootstrapDev': 'sass/bootstrap/',
    'phpDist': themeDirectory
  }
var watching = {
  'sass': sources.sass,
  'js': ['js/handlebars.js'],
  'json': ['js/*.json'],
  'css': [themeDirectory + 'style.css', themeDirectory + 'sass.css'],
  'php': [sources.phpDev],
  'html': ['js/test.html', 'js/index.html'],
  'handlebars': ['js/templates/*.hbs']
}

gulp.task('browser-sync', function () {
  browserSync.init({
    proxy: 'localhost'
  })
  log('BrowserSync Initiated')
})

gulp.task('sass', function () {
  return gulp.src(sources.sass)
    // .pipe(sourcemaps.init)
    .pipe(sass({sourceComments: true}).on('error', sass.logError))
    // .pipe(sourcemaps.write('.'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(paths.sassDev))
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
    // .pipe(babel({
    //   presets: ['env']
    // }))
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

gulp.task('handlebars', function () {
  return gulp.src(sources.handlebars)
    .pipe(gulp.dest(paths.handlebars))
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(paths.handlebars))
    .pipe(browserSync.stream())
})

gulp.task('css', function () {
  return gulp.src(sources.css)
  .pipe(browserSync.stream())
})

gulp.task('php', function () {
  return gulp.src(sources.phpDev)
  .pipe(gulp.dest(paths.phpDist))
  .pipe(browserSync.stream())
})

gulp.task('html', function (done) {
  browserSync.reload()
  done()
})

gulp.task('watch', gulp.parallel('browser-sync', function (done) {
  gulp.watch(watching.sass, gulp.parallel('sass'))
  gulp.watch(watching.js, gulp.parallel('js'))
  gulp.watch(watching.json, gulp.parallel('json'))
  gulp.watch(watching.css, gulp.parallel('css'))
  gulp.watch(watching.php, gulp.parallel('php'))
  gulp.watch(watching.html, gulp.parallel('html'))
  gulp.watch(watching.handlebars, gulp.parallel('handlebars'))
  done()
}))

gulp.task('default', gulp.parallel(
  // 'browser-sync',
  'sass',
  'js',
  'json',
  'handlebars',
  'css',
  'php',
  'html',
  'watch'))
