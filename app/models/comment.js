import DS from 'ember-data';
import { computed, get } from '@ember/object';
import moment from 'moment';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  body:      attr('string'),
  published: attr('number'),

  publishedDate: computed('published', function() {
    var m = moment(get(this, 'published'));
    return `${m.format('MMMM Do, YYYY')} at ${m.format('h:mm:ss a')}`;
  }),

  user: belongsTo('user', { async: true })
});
