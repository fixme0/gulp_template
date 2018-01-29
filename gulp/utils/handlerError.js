module.exports = function(...args) {
  $.gp.notify.onError({
    title: 'Compile Erorr',
    message: '<%= error.message %>',
  }).apply(this, args);
  this.emit('end');
};