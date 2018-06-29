import DS from 'ember-data';
import { computed } from '@ember/object';
import moment from 'moment';

const {
  Model,
  attr,
  belongsTo,
  hasMany } = DS;

export default Model.extend({
  title:     attr('string'),
  body:      attr('string'),
  published: attr('number'),

  comments: hasMany('comment', { async: true }),
  user:     belongsTo('user',  { async: true }),

  publishedDate: computed('published', function() {
    return moment(this.get('published')).format('MMMM Do, YYYY');
  })
});
