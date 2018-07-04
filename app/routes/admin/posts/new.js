import Route from '@ember/routing/route';
import firebase from 'firebase';

export default Route.extend({
  actions: {
    loadData() {
      const transform = firebase.database.ServerValue.TIMESTAMP;
      let newPost = this.store.createRecord('post', {
        title: 'EmberFire is flaming hot!',
        body: 'You can store and sync data in realtime without a backend.',
        published: transform
      });

      return newPost.save().then(() => this.transitionTo('admin.posts.index'));
    },

    cancel() {
      this.transitionTo('admin.posts.index');
    },
  }
});
