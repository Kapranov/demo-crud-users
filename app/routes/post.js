import Route from '@ember/routing/route';
import { Promise } from 'rsvp';

export default Route.extend({
  model(params) {
    const store = this.store;
    return store.findRecord('post', params.post_id);
  },

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
