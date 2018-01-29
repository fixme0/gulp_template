let path = require('path');
let tasks = require('./gulp/utils/taskInit');

global.$ = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  css: path.resolve(__dirname, 'src/css'),
  js: path.resolve(__dirname, 'src/js'),
  template: path.resolve(__dirname, 'src/index.pug'),
  server: require('browser-sync').create(),
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  remeber: require('gulp-remember'),
  cached: require('gulp-cached')
};

tasks.map(task => require(task)());

$.gulp.task('dev', $.gulp.parallel('pug:dev', 'css:dev', 'js:dev', 'copy:img:dev', 'copy:fonts', 'svg', $.gulp.series('watch')) );