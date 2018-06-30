import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model(params) {
    return get(this, 'store').findRecord('user', params.user_id);
  },

  setupController(controller, model) {
    controller.set('users', model.user_id);
    this._super(controller, model);
  },

  actions: {
    deleteUser(model) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        model.destroyRecord().then(() => {
          this.transitionTo('users.index');
        }).catch(() => {
          model.reload();
        });
      }
    }
  }
});
