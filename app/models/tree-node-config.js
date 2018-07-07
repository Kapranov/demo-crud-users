import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  sync:    attr('boolean'),
  updated: attr('number')
});
