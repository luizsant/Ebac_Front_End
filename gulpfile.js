const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
const less = require('gulp-less'); 
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

function comprimeJavaScript() {
    return gulp.src('source/js/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.stream());
}

// function compilaSass() {
//     return gulp.src('source/*.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass({
//             outputStyle: 'compressed'
//         }))
//         .pipe(sourcemaps.write('maps'))
//         .pipe(gulp.dest('build'))
//         .pipe(browserSync.stream());
// }

function compilaLess() {
    return gulp.src('source/*.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            compress: true
        }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('build/style'))
        .pipe(browserSync.stream());
}

function comprimeImagens() {
    return gulp.src('source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
        .pipe(browserSync.stream());
}

function browser() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

exports.default = function() {
    browser();
    
    // gulp.watch('source/*.scss', { ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('source/less/**/*.less', { ignoreInitial: false}, gulp.series(compilaLess));
    gulp.watch('build/style/*.css').on('change', browserSync.reload);
    gulp.watch('source/js/*.js', { ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('source/images/*', { ignoreInitial: false}, gulp.series(comprimeImagens));
    gulp.watch("*.html").on('change', browserSync.reload);
}