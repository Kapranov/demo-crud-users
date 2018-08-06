import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const { Model, attr } = DS;

let Validations = buildValidations({
  name: validator('presence', true),
  acceptTerms: validator('inline', {
    validate(value) {
      return value || 'You must accept the terms.';
    }
  })
});

export default Model.extend(Validations, {
  name: attr('string', { defaultValue: '' }),
  acceptTerms: attr('boolean', { defaultValue: false })
});
