import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  displayName: DS.attr('string'),
  isGlobal: DS.attr('boolean'),
  readOnly: DS.attr('boolean'),
  permissions: DS.attr(),
  createdAt: DS.attr('number'),
  updatedAt: DS.attr('number')
});
