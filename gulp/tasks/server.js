module.exports = () => {
  $.gulp.task('server', () => {

    $.server.init({
      server: {
        baseDir: $.dist
      },
      files: [
        `${$.dist}/*.html`,
        `${$.dist}/css/*.css`,
        `${$.dist}/img/**/*`,
        `${$.dist}/js/*.js`,
      ],
      port: 8002,
      logLevel: 'info',
      logConnections: false,
      logFileChanges: true,
      open: false,
      notify: false
    });

  });
};