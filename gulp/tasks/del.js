let del = require('del');

module.exports = () => {
  $.gulp.task('del', () => {
      return del([$.dist]);
  });
};