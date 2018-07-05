import Route from '@ember/routing/route';
import firebase from 'firebase';
//import EmberObject from '@ember/object';
import { hash } from 'rsvp';

export default Route.extend({
  //init() {
  //  this._super(...arguments);
  //  this.set('post', EmberObject.create());
  //},

  model() {
    const store = this.store;
    return store.createRecord('post');
  },

  postIsValid() {
    let isValid = true;
    //['post.title', 'post.username', 'post.body'].forEach(function(field) {
    ['title', 'username', 'body'].forEach(function(field) {
      if (this.get(field) === '') {
        isValid = false;
      }
    }, this);
    return isValid;
  },

  actions: {
    // current version
    publishPost(addPost) {
      const transform = firebase.database.ServerValue.TIMESTAMP;

      if (!this.postIsValid()) { return; }
      hash({
        //user: this.get('util').getUserByUsername(this.get('post.username'))
        user: this.get('util').getUserByUsername('post.username')
      }).then(function(/*promises*/) {
        let newPost = this.store.createRecord('post', {
          title: addPost.title,
          body:  addPost.body,
          published: transform,
          //user: promises.user
        });

        newPost.save();
        //newPost.save().then(() => this.transitionTo('posts.index'));

        //this.setProperties({
        //  'post.title': '',
        //  'post.username': '',
        //  'post.body': ''
        //});

        //this.transitionToRoute('post', newPost);
        //this.transitionTo('posts.index');
        this.transitionTo('post', newPost);
      }.bind(this));
    },

    // working version
    //publishPost(newPost) {
    //  const transform = firebase.database.ServerValue.TIMESTAMP;

    //  let post = this.store.createRecord('post', {
    //    title: newPost.title,
    //    body:  newPost.body,
    //    published: transform
    //  });
    //  post.save().then(() => this.transitionTo('posts.index'));
    //},

    cancel() {
      this.transitionTo('posts.index');
    },

    //willTransition() {
    //  let model = this.controller.get('model');

    //  if (model.get('isNew')) {
    //    model.destroyRecord();
    //  }
    //}
  },

  post: undefined
});
