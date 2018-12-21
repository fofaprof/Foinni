const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
sass.compiler = require('node-sass');
const jsmin = require('gulp-jsmin');
const del = require('del');

gulp.task('scss', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('mincss', function() {
    gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css', 'css/**/*.css'])
        .pipe(concat('style.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minjs', function () {
    gulp.src('js/**/*.js')
        .pipe(concat('script.js'))
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('scss:watch', function () {
    gulp.watch('scss/**/*.scss', ['scss']);
});

gulp.task('serve', ['scss'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("scss/*.scss", ['scss']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
    return del.sync('dist'); // delete dist folder even build
});

gulp.task('build', ['clean', 'mincss', 'minjs'], function() {});