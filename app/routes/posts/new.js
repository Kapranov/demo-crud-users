import Route from '@ember/routing/route';
import firebase from 'firebase';

export default Route.extend({
  model() {
    const store = this.store;
    return store.createRecord('post');
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
