'use strict';
const gulp = require('gulp'),
    print = require('gulp-print'),
    plumber = require('gulp-plumber'),
    Cache = require('gulp-file-cache'),
    babel = require('gulp-babel'),
    nodemon = require('gulp-nodemon'),
    console = require('better-console'),
    cache = new Cache();

gulp.task('js', function () {
    console.clear();
    let stream = gulp.src('src/**/*.js')
        .pipe(plumber())
        .pipe(cache.filter())
        .pipe(print())
        .pipe(babel({presets: ['es2015', 'stage-3']}))
        .pipe(cache.cache())
        .pipe(gulp.dest('build'));
    return stream;
});

gulp.task('watch', ['js'], function () {
    let stream = nodemon({
        script: 'build/app.js',
        watch: 'src/**/*.js',
        tasks: ['js']
    });
    return stream;
});

gulp.task('default', ['watch']);