'use strict';
/**
 * Import plugins
 */
var gulp          = require('gulp'),
    $             = require('gulp-load-plugins')(),
    config        = require('./gulp_config.json'),
    browserSync   = require('browser-sync'),
    runSequence   = require('run-sequence');


require(config.tasks + 'gh-pages')(gulp, $, config);                           // $ gulp deploy
require(config.tasks + 'server')(gulp, $, config, browserSync, runSequence);   // $ gulp serve


/**
 * Default task
 */
gulp.task('default', function(){
  $.util.log('Nothing special here');
});