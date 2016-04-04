// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('./*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);
