import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  actions: {
    collapseAllRows() {
      get(this, 'collapseAllRows')();
    },

    expandAllRows() {
      get(this, 'expandAllRows')();
    }
  }
});
