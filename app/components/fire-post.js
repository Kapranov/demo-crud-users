import Component from '@ember/component';
//import { Promise, hash } from 'rsvp';

export default Component.extend({
  classNames: ['post'],
  classNameBindings: ['isExpanded:post-expanded', 'isSingle:post-single'],
  commentUsername: '',
  commentBody: '',
  commentIsValid: function() {
    let isValid = true;
    ['commentUsername', 'commentBody'].forEach(function(field) {
      if (this.get(field) === '') {
        isValid = false;
      }
    }, this);

    return isValid;
  },

  actions: {
    publishComment: function() {

    },

    removeComment: function() {

    }
  }
});
