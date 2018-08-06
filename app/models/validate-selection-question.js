import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const { Model, attr, belongsTo } = DS;

const Validations = buildValidations(
  {
    order: {
      description: 'Order',
      validators: [validator('ds-error'), validator('presence', true)]
    },
    selection: {
      description: 'Order Selection',
      validators: [validator('ds-error'), validator('presence', true)]
    },
    text: {
      description: 'Question Text',
      validators: [validator('ds-error'), validator('presence', true)]
    }
  },
  {
    debounce: 10
  }
);

export default Model.extend(Validations, {
  order: belongsTo('validate-order', { async: true }),
  selection: belongsTo('validate-order-selection', { async: true }),
  text: attr('string')
});
