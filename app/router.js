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
  this.route('auth');
  this.route('authors');
  this.route('editors');
  this.route('books');
  this.route('contact');
  this.route('invitations');
  this.route('panels');
  this.route('markdowns');
  this.route('demo-modals');
  this.route('signatures');
  this.route('shepherds');
  this.route('render_nested');
  this.route('uploads');

  this.route('index',   { path: '/' });
  this.route('missing', { path: '/*path' });
  this.route('reports', { path: '/reports' });
  this.route('report',  { path: '/reports/:report' });
  this.route('list',    { path: '/reports/:report/lists/:list' });
  this.route('page',    { path: '/reports/:report/lists/:list/pages/:page' });
  this.route('user',    { path: '/user/:user_id' });
  this.route('post',    { path: '/post/:post_id' });

  this.route('demo-tables', function() {
    this.route('add-remove-column');
    this.route('column-sets');
    this.route('common-table');
    this.route('custom-actions');
    this.route('custom-column-classes');
    this.route('custom-components-in-cell');
    this.route('custom-messages');
    this.route('display-data-changed-action');
    this.route('demo-table');
    this.route('expandable-rows');
    this.route('filtering');
    this.route('grouped-headers');
    this.route('grouped-rows');
    this.route('in-line-edit');
    this.route('route-cells');
    this.route('select-rows-with-checkboxes');
    this.route('sort-by-filter-by');
  });

  this.route('patients', function() {
    this.route('patient');
  });

  this.route('posts', function() {
    this.route('new');
  });

  this.route('widgets', function() {
    this.route('current');
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
