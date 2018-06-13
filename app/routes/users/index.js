import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('user').then(
      results => results.sortBy('name')
    );
  },

  setupController(controller, model) {
    controller.set('users', model.user);
    this._super(controller, model);
  }
});
