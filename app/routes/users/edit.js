import Route from '@ember/routing/route';
import { computed } from '@ember/object';
import firebase from 'firebase';

export default Route.extend({
  model(params) {
    console.log(params.id);
    return this.store.find('user', params.id);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('users', model.user);
  },

  renderTemplate() {
    this.render('users/form');
  },

  updated: computed('model', function () {
    let date = new Date();
    return date;
  }),

  actions: {
    saveUser(model) {
      const transform = firebase.database.ServerValue.TIMESTAMP;

      model.setProperties({
        name:  model.name,
        email: model.email,
        bio:   model.bio,
        spent: model.spent,
        avatarFile: model.avatarFile,
        updatedAt: transform,
        createdAt: model.createdAt
      });

      model.save().then(() => {
        this.transitionTo('users.index');
      }).catch(() => {
        alert("couldn't save user.");
      });
    },

    cancel() {
      this.transitionTo('users');
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
