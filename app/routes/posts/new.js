import Route from '@ember/routing/route';
import firebase from 'firebase';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    const store = this.store;
    return store.createRecord('post');
  },

  postIsValid() {
    let isValid = true;
    ['title', 'username', 'body'].forEach(function(field) {
      if (this.controller.get(field) === '') {
        isValid = false;
      }
    }, this);
    return isValid;
  },

  actions: {
    // version #2
    publishPost(addPost) {
      const transform = firebase.database.ServerValue.TIMESTAMP;

      if (!this.postIsValid()) { return; }
      hash({
        user: this.get('util').getUserByUsername(this.controller.get('model.username'))
      }).then(function(promises) {
        let newPost = this.store.createRecord('post', {
          title: addPost.title,
          body:  addPost.body,
          published: transform,
          user: promises.user
        });

        newPost.save().then(() => this.transitionTo('posts.index'));

        this.setProperties({
          'model.title': '',
          'model.username': '',
          'model.published:': '',
          'model.body': ''
        });
      }.bind(this));
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
