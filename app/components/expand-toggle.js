import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  actions: {
    collapseRow(index, record) {
      get(this, 'collapseRow')(index, record);
    },
    expandRow(index, record) {
      get(this, 'expandRow')(index, record);
    }
  }
});
