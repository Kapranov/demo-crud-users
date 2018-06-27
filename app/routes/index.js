import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const store = this.store;

    return store.findAll('user').then(
      results => results.sortBy('name')
    );
  },

  redirect() {
    this.transitionTo('application');
  }
});
