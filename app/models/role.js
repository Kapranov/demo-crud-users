import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  name:        attr('string'),
  displayName: attr('string'),
  isGlobal:    attr('boolean'),
  readOnly:    attr('boolean'),
  permissions: attr(),
  createdAt:   attr('number'),
  updatedAt:   attr('number')
});
