import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const { Model, attr, belongsTo, hasMany } = DS;

const Validations = buildValidations({
  quantity: {
    description: 'Quantity',
    validators: [
      validator('ds-error'),
      validator('number', {
        gte: 1
      })
    ]
  },
  order: {
    description: 'Order',
    validators: [
      validator('ds-error'),
      validator('belongs-to'),
      validator('presence', true)
    ]
  },

  line: {
    description: 'Order Line',
    validators: [validator('ds-error'), validator('presence', true)]
  },

  questions: {
    description: 'Order Selection Questions',
    validators: [
      validator('ds-error'),
      validator('has-many'),
      validator('length', {
        min: 1
      })
    ]
  }
});

export default Model.extend(Validations, {
  order: belongsTo('validate-order', { async: true }),
  questions: hasMany('validate-order-selection-question', { async: true }),
  quantity: attr('number')
});
