import Route from '@ember/routing/route';

export default Route.extend({
  avatarPath: '/assets/images/avatars/',

  model(params) {
    return this.store.findRecord('user', params.user_id);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('users', model.user);
  },

  renderTemplate() {
    this.render('admin/users/form');
  },

  actions: {
    saveUser(update) {
      update.save().then(() => this.transitionTo('admin.users'));
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
