'use strict';
const gulp = require('gulp');
const print = require('gulp-print');
const plumber = require('gulp-plumber');
const Cache = require('gulp-file-cache');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const cache = new Cache();

gulp.task('js', function () {
    let stream = gulp.src('src/**/*.js')
        .pipe(plumber())
        .pipe(cache.filter())
        .pipe(print())
        .pipe(babel({presets: ['es2015', 'stage-3'] }))
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