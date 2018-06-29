import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo,
  hasMany } = DS;

export default Model.extend({
  label:   attr('string'),
  created: attr('number'),

  children: hasMany('tree-node', { async: false, inverse: null }),
  config:   belongsTo('tree-node-config', { async: false })
});
