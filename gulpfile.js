'use strict';
/**
 * Import plugins
 */
var gulp          = require('gulp'),
    $             = require('gulp-load-plugins')(),
    config        = require('./gulp_config.json'),
    browserSync   = require('browser-sync'),
    runSequence   = require('run-sequence'),
    del           = require('del');

/**
 * Build
 */
gulp.task('build', function(){
  return gulp.src(['CNAME', './*.html', 'css/*.css', 'images/*.*'], { base: './' })
    .pipe(gulp.dest('build/'));
});

require(config.tasks + 'gh-pages')(gulp, $, config);                           // $ gulp deploy
require(config.tasks + 'clean')(gulp, $, config, del);                         // $ gulp clean
require(config.tasks + 'server')(gulp, $, config, browserSync, runSequence);   // $ gulp serve


/**
 * Default task
 */
gulp.task('default', function(){
  $.util.log('Nothing special here');
});