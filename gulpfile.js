'use strict';
let gulp = require('gulp');
let print = require('gulp-print');
let cache = require('gulp-cached');
let babel = require('gulp-babel');

gulp.task('js', function () {
    gulp.src('src/**/*.js')
        .pipe(cache('js'))
        .pipe(print())
        .pipe(babel({presets: ['es2015', 'stage-3'] }))
        .pipe(gulp.dest('build'))
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['js']);
});

gulp.task('default', ['watch']);