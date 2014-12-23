Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/features', function () {
  this.render('features');
});

Router.route('/archived', function () {
  this.render('archived');
});

Router.route('/contacts', function () {
  this.render('contacts');
});

Router.route('/about', function () {
  this.render('about');
});

Router.route('/dealsList', function () {
  name: 'dealsList',
  this.render('dealsList');
});

Router.route('/deals/:_id', {
  name: 'dealPage',
  data: function() { return Deals.findOne(this.params._id); }
});

Router.route('/deals/:_id/edit', {
  name: 'dealEdit',
  data: function() { return Deals.findOne(this.params._id); }
});

Router.route('/email/:_id', {
  name: 'sendEmail',
  data: function() { return Deals.findOne(this.params._id); }
});

Router.route('/submit', {name: 'dealSubmit'});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});