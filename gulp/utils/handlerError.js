let notify = $.gp.notify;

module.exports = function(...args) {
  notify.onErorr({
    title: 'Compile Erorr',
    message: '<%= error.message %>',
  }).apply(this, args);
  this.emit('end');
};