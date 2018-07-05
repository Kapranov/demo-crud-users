import Route from '@ember/routing/route';
import firebase from 'firebase';
import EmberObject from '@ember/object';

export default Route.extend({
  init() {
    this._super(...arguments);
    this.set('post', EmberObject.create());
  },

  model() {
    const store = this.store;
    return store.createRecord('post');
  },

  postIsValid() {
    let isValid = true;
    ['post.title', 'post.username', 'post.body'].forEach(function(field) {
      if (this.get(field) === '') {
        isValid = false;
      }
    }, this);
    return isValid;
  },

  actions: {
    publishPost(newPost) {
      const transform = firebase.database.ServerValue.TIMESTAMP;

      let post = this.store.createRecord('post', {
        title: newPost.title,
        body:  newPost.body,
        published: transform
      });
      post.save().then(() => this.transitionTo('posts.index'));
    },

    cancel() {
      this.transitionTo('posts.index');
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
