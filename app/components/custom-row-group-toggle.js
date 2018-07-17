import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  actions: {
    toggleGroupedRows() {
      get(this, 'toggleGroupedRows')(get(this, 'groupedValue'));
    },

    toggleGroupedRowsSelection(e) {
      get(this, 'toggleGroupedRowsSelection')(get(this, 'groupedValue'));
      e.stopPropagation();
    },

    toggleGroupedRowsExpands(e) {
      get(this, 'toggleGroupedRowsExpands')(get(this, 'groupedValue'));
      e.stopPropagation();
    }
  }
});
