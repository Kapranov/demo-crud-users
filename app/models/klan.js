import DS from 'ember-data';
import { computed, get } from '@ember/object';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  name:   attr('string'),
  colors: attr('string'),
  'combat-specialty': attr('string'),
  logo: attr('string'),
  warbosses: hasMany('warboss'),
  idNumeric: computed('id', function() {
    return parseInt(get(this, 'id'), 10);
  })
});
