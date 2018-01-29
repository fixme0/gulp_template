let handlerError = require('./../utils/handlerError');

module.exports = () => {
  $.gulp.task('pug:dev', () => {
    return $.gulp.src($.template)
                  .pipe($.gp.plumber({ errorHandler: handlerError }))
                  .pipe($.gp.pug({
                    pretty: true
                  }))
                  .pipe($.gulp.dest($.dist));
  });
}