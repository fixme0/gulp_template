let path = require('path')

module.exports = () => {
  $.gulp.task('watch', () => {
    // css
    $.gulp.watch('./src/css/**/*.*', $.gulp.series('css:dev'))
    // pug
    $.gulp.watch(['./src/index.pug', './src/pug/**/*.pug'], $.gulp.series('pug:dev'));
    // img
    $.gulp.watch(['./src/img/**/*.*', '!./src/img/svg/**/*.*'], $.gulp.series('copy:img:dev'));
    // fonts
    $.gulp.watch('./src/fonts/**/*.*', $.gulp.series('copy:fonts'));
    // svg
    $.gulp.watch('./src/img/svg/**/*.*', $.gulp.series('svg'));
    // js
    $.gulp.watch('./src/js/**/*.js', $.gulp.series('js:dev'));
  });
};