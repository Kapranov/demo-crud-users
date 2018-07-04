import Route from '@ember/routing/route';
import firebase from 'firebase';

export default Route.extend({
  avatarPath: '/assets/images/avatars/',

  model() {
    const store = this.store;
    return store.createRecord('user');
  },

  setupController(controller, model) {
    controller.set('users', model.user);
    this._super(controller, model);
  },

  actions: {
    saveUser(newUser) {
      const transform = firebase.database.ServerValue.TIMESTAMP;

      let user = this.store.createRecord('user', {
        name: newUser.name,
        email: newUser.email,
        bio: newUser.bio,
        avatarFile: newUser.avatarFile,
        spent: newUser.spent,
        updatedAt: transform,
        createdAt: transform,
        createdMonth: transform
      });
      user.save().then(() => this.transitionTo('users'));
    },

    cancel() {
      this.transitionTo('users');
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
