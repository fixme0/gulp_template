let plugins = require('./../utils/plugins');
let handlerError = require('./../utils/handlerError');
var sugarss = require('sugarss');

module.exports = () => {

  $.gulp.task('css:dev', () => {

    return $.gulp.src(`${$.css}/*.sss`)
                .pipe($.gp.plumber({ errorHandler: handlerError }))
                .pipe($.gp.sourcemaps.init({loadMaps: true}))
                .pipe($.gp.postcss(plugins, { parser: sugarss }))
                // .pipe($.cached('css'))
                .pipe($.gp.rename({ extname: '.css' }))
                .pipe($.gp.sourcemaps.write())
                .pipe($.gulp.dest(`${$.dist}/css/`));
  });


};