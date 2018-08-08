// BEGIN-SNIPPET validate-user-detail-model
import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';
import { computed } from '@ember/object';
import moment from 'moment';

const { Model, attr } = DS;

const Validations = buildValidations(
  {
    firstName: validator('presence', true),
    lastName: validator('presence', true),
    dob: {
      description: 'Date of  birth',
      validators: [
        validator('presence', true),
        validator('date', {
          before: 'now',
          after: computed(function() {
            return moment()
              .subtract(120, 'years')
              .format('M/D/YYYY');
          }).volatile(),
          format: 'M/D/YYYY',
          message(type, value) {
            if (type === 'before') {
              return 'Are you from the future?';
            }
            if (type === 'after') {
              return `There is no way you are ${moment().diff(value, 'years')} years old`;
            }
          }
        })
      ]
    },
    phone: [
      validator('format', {
        allowBlank: true,
        type: 'phone'
      })
    ],
    url: [
      validator('format', {
        allowBlank: true,
        type: 'url'
      })
    ]
  },
  {
    debounce: 500
  }
);

export default Model.extend(Validations, {
  firstName: attr('string'),
  lastName: attr('string'),
  dob: attr('date'),
  phone: attr('string'),
  url: attr('string')
});
// END-SNIPPET
