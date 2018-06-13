import Route from '@ember/routing/route';
import firebase from 'firebase';

export default Route.extend({
  model(params) {
    return this.store.find('user', params.user_id);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('users', model.user);
  },

  renderTemplate() {
    this.render('admin/users/form');
  },

  actions: {
    saveUser(model) {
      const transform = firebase.database.ServerValue.TIMESTAMP;

      model.setProperties({
        name:  model.name,
        email: model.email,
        bio:   model.bio,
        spent: model.spent,
        avatarUrl: model.avatarUrl,
        updatedAt: transform,
        createdAt: model.createdAt
      });

      model.save().then(() => {
        this.transitionTo('admin.users.index');
      }).catch(() => {
        alert("couldn't save user.");
      });
    },

    cancel() {
      this.transitionTo('admin.users');
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
