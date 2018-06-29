import DS from 'ember-data';
import { computed } from '@ember/object';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  body: attr('string'),
  published: attr('number'),
  publishedDate: computed('published', function() {
    var m = moment(this.get('published'));
    return `${m.format('MMMM Do, YYYY')} at ${m.format('h:mm:ss a')}`;
  }),
  user: belongsTo('user', { async: true })
});
