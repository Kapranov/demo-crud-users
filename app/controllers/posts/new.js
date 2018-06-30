import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { get } from '@ember/object';
import { hash } from 'rsvp';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('post', EmberObject.create());
  },

  postIsValid() {
    let isValid = true;
    ['post.title', 'post.username', 'post.body'].forEach(function(field) {
      if (get(this, field) === '') {
        isValid = false;
      }
    }, this);
    return isValid;
  },

  actions: {
    publishPost() {
      if (!this.postIsValid()) { return; }
      hash({
        user: get(this, 'util').getUserByUsername(get(this, 'post.username'))
      }).then(function(promises) {
        var newPost = this.store.createRecord('post', {
          title: get(this, 'post.title'),
          body: get(this, 'post.body'),
          published: new Date().getTime(),
          user: promises.user
        });
        newPost.save();
        this.setProperties({
          'post.title': '',
          'post.username': '',
          'post.body': ''
        });
        this.transitionToRoute('post', newPost);
      }.bind(this));
    }
  },

  post: undefined
});
