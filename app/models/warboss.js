import DS from 'ember-data';
import { computed, get } from '@ember/object';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  name: attr('string'),
  klan: belongsTo('klan'),
  idNumeric: computed('id', function() {
    return parseInt(get(this, 'id'), 10);
  })
});
