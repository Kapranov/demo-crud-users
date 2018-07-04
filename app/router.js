import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('attachments');
  this.route('avatar');
  this.route('authors');
  this.route('books');
  this.route('contact');
  this.route('invitations');
  this.route('signatures');
  this.route('render_nested');
  this.route('uploads');
  this.route('index',   { path: '/' });
  this.route('missing', { path: '/*path' });
  this.route('reports', { path: '/reports' });
  this.route('report',  { path: '/reports/:report' });
  this.route('list',    { path: '/reports/:report/lists/:list' });
  this.route('page',    { path: '/reports/:report/lists/:list/pages/:page' });
  this.route('post',    { path: '/post/:post_id' });
  this.route('posts', function() {
    this.route('new');
  });

  this.route('users', function() {
    this.route('new');
    this.route('edit', { path: '/:user_id/edit' });
    this.route('show', { path: '/:user_id/show' });
  });

  this.route('libraries', function() {
    this.route('new');
    this.route('edit', { path: '/:library_id/edit' });
  });

  this.route('admin', function() {
    this.route('invitations');
    this.route('contacts');
    this.route('seeder');

    this.route('users', function() {
      this.route('new');
      this.route('edit', { path: '/:user_id/edit' });
      this.route('show', { path: '/:user_id/show' });
    });

    this.route('roles', function() {
      this.route('edit');
      this.route('new');
      this.route('show');
    });
    this.route('posts', function() {
      this.route('new');
    });
  });
});

Router.extend({
  redirect: function(){
    this.transitionTo('index');
  }
});

export default Router;
