import Component from '@ember/component';
import { lte, not, or } from '@ember/object/computed';
import { get } from '@ember/object';

const MAX_VALUE = 100;

export default Component.extend({
  counter: null,
  isCounterValid: lte('counter', MAX_VALUE),
  isCounterNotValid: not('isCounterValid'),
  placeholder: `Max ${MAX_VALUE}`,
  generateReady: false,
  deleteReady: false,
  generateInProgress: false,
  deleteInProgress: false,
  generateIsDisabled: or('isCounterNotValid', 'generateInProgress', 'deleteInProgress'),
  deleteIsDisabled: or('generateInProgress', 'deleteInProgress'),

  actions: {
    generateAction() {
      if (get(this, 'isCounterValid')) {
        get(this, 'generateAction')(get(this, 'counter'));
      }
    },

    deleteAction() {
      get(this, 'deleteAction')();
    }
  }
});
