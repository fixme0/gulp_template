module.exports = () => {
  $.gulp.task('copy:img:dev', () => {
    return $.gulp.src([`${$.src}/img/**/*.*`, `!${$.src}/img/svg/**/*.*`])
                  .pipe($.gulp.dest(`${$.dist}/img`))
  });

  // fonts

  $.gulp.task('copy:fonts', () => {
    return $.gulp.src(`${$.src}/fonts/**/*.*`)
                  .pipe($.gulp.dest(`${$.dist}/fonts`))
  });

};