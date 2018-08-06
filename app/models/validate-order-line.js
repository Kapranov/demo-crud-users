import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const { Model, attr, belongsTo, hasMany} = DS;

const Validations = buildValidations({
  type: {
    description: 'Order Line Type',
    validators: [validator('ds-error'), validator('presence', true)]
  },
  order: {
    description: 'Order',
    validators: [validator('ds-error'), validator('presence', true)]
  },
  selections: {
    description: 'Order Selections',
    validators: [
      validator('ds-error'),
      validator('has-many'),
      validator('presence', true)
    ]
  }
});

export default Model.extend(Validations, {
  order: belongsTo('validate-order', { async: true }),
  selections: hasMany('validate-order-selection', { async: true }),
  type: attr('string')
});
