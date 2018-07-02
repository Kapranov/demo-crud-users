import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

export default Component.extend({
  classNames: ['post-slug'],
  publishedMonth: computed('post.published', function() {
    return moment(this.get('post.published')).format('MMM');
  }),

  publishedDay: computed('post.published', function() {
    return moment(this.get('post.published')).format('D');
  })
});
