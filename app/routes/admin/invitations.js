import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const store = this.store;

    return store.findAll('invitation');
  }
});
