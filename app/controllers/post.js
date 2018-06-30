import Controller from '@ember/controller';
import { Promise } from 'rsvp';

export default Controller.extend({
  actions: {
    publishComment(post, comment) {
      comment.save().then(function() {
        Promise.cast(post.get('comments')).then(function(comments) {
          comments.addObject(comment);
          post.save().then(function() {}, function() {});
        });
      });
    }
  }
});
