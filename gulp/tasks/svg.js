let svgSprite = require('gulp-svg-sprites');

module.exports = () => {
  $.gulp.task('svg', () => {
    return $.gulp.src(`${$.src}/img/svg/*.*`)
                  .pipe($.gp.svgmin({
                    js2svg: {
                        pretty: true
                    },
                    plugins: [
                      {
                        removeDoctype: true
                      }, 
                      {
                        removeComments: true
                      }, 
                      {
                          mergePaths: false
                      }
                    ]
                  }))
                  .pipe($.gp.cheerio({
                    run: function ($) {
                      $('[fill]').removeAttr('fill');
                      $('[stroke]').removeAttr('stroke');
                      $('[style]').removeAttr('style');
                    },
                    parserOptions: {xmlMode: true}
                  }))
                  .pipe(svgSprite({
                    svg: {
                      symbols: "sprite.svg"
                    },
                    mode: 'symbols',
                    preview: {
                      sprite: false,
                      symbols: false
                    },
                    cssFile: false
                  }))
                  .pipe($.gulp.dest(`${$.dist}/img/sprite/`))
  });
};