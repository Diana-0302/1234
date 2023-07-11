const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const concatCss = require('gulp-concat-css');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;

function buildStyles() {
    return gulp.src('./style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concatCss("styles/bundle.css"))
        .pipe(gulp.dest('./css'));
};

function minifyJS() {
    return gulp.src('./js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./srcJS'));
}

function modeIndexHTML() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'))
}

function watchStyles() {
    return gulp.watch('./style/**/*.scss', buildStyles)
}


function watchJS() {
    return gulp.watch('./js/**/*.js', minifyJS)
}


function watchHTML() {
    return gulp.watch('./index.html', modeIndexHTML)
}



exports.buildStyles = buildStyles;
exports.minifyJS = minifyJS;
exports.modeIndexHTML = modeIndexHTML;

exports.watchStyles = watchStyles;
exports.watchJS = watchJS;
exports.watchHTML = watchHTML;