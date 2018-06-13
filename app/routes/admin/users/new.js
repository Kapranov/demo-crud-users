import Route from '@ember/routing/route';
import firebase from 'firebase';

export default Route.extend({
  avatarPath: '/assets/images/avatars/',

  model() {
    return this.store.createRecord('user');
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
        avatarUrl: `${this.get('avatarPath')}${newUser.avatarUrl}`,
        spent: newUser.spent,
        updatedAt: transform,
        createdAt: transform,
        createdMonth: transform
      });
      user.save().then(() => this.transitionTo('admin.users'));
    },

    cancel() {
      this.transitionTo('admin.users');
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
