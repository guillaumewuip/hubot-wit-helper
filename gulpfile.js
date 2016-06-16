'use strict';

(() => {

    let gulp        = require('gulp'),
        jshint      = require('gulp-jshint'),
        stylish     = require('jshint-stylish');

    let paths = {
        js: {
            src : ['index.js', 'lib/**/*.js'],
        },
    };

    /**
     * jshint
     */

    gulp.task('js:lint', () => {
        let task = gulp.src(paths.js.src)
            .pipe(jshint())
            .pipe(jshint.reporter(stylish));

            if (process.env.CI) {
                task = task.pipe(jshint.reporter('fail'));
            }

        return task;
    });

    gulp.task('js:watch', () => {
        gulp.watch(paths.js.src, ['js:lint']);
    });

    gulp.task('default', ['js:lint', 'js:watch']);

})();
