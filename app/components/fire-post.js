import Component from '@ember/component';
import { Promise, hash } from 'rsvp';
import { get } from '@ember/object';

export default Component.extend({
  classNames: ['post'],
  classNameBindings: ['isExpanded:post-expanded', 'isSingle:post-single'],
  commentUsername: '',
  commentBody: '',
  commentIsValid: function() {
    let isValid = true;
    ['commentUsername', 'commentBody'].forEach(function(field) {
      if (get(this, field) === '') {
        isValid = false;
      }
    }, this);

    return isValid;
  },

  actions: {
    publishComment: function() {
      if (!this.commentIsValid()) { return; }
      let store = get(this, 'store');

      hash({
        user: get(this, 'util').getUserByUsername(get(this, 'commentUsername'))
      }).then(function(promises) {
        let comment = store.createRecord('comment', {
          body: get(this, 'commentBody'),
          published: new Date().getTime(),
          user: promises.user
        });

        // this.sendAction('onPublishComment', get(this, 'post'), comment);
        get(this, 'onPublishComment')(get(this, 'post'), comment);

        this.setProperties({
          commentUsername: '',
          commentBody: ''
        });
      }.bind(this));
    },

    removeComment: function(comment) {
      let post = get(this, 'post');

      Promise.cast(post.get('comments')).then(function(comments) {
        comments.removeObject(comment);
        comment.destroyRecord();
        post.save();
      });
    }
  }
});
