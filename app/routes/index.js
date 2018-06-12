import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('user').then(
      results => results.sortBy('name')
    );
  },

  redirect() {
    this.transitionTo('application');
  }
});
