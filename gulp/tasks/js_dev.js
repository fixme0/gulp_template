let handlerError = require('./../utils/handlerError');

module.exports = () => {
  $.gulp.task('js:dev', () => {
    return $.gulp.src(`${$.js}/*.js`)
                  .pipe($.gp.plumber({ errorHandler: handlerError }))
                  .pipe($.gp.include())
                  .pipe($.gp.babel({
                    presets: ['env']
                  }))
                  .pipe($.gulp.dest(`${$.dist}/js/`))
  });
};