import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('index', { path: "/" });
  this.route('missing', { path: '/*path' });
});

Router.extend({
  redirect: function(){
    this.transitionTo("index");
  }
});

export default Router;
