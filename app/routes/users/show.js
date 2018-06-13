import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('user', params.user_id);
  },

  setupController(controller, model) {
    controller.set('users', model.user_id);
    this._super(controller, model);
  },

  actions: {
    deleteUser(model) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        model.deleteRecord();
        model.save().then(() => this.transitionTo('users.index'));
      }
    }
  }
});
