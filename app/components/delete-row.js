import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  sendAction: null,
  record: null,

  actions: {
    sendAction(actionName, record, event) {
      get(this, 'sendAction')(actionName, record);
      event.stopPropagation();
    }
  }
});
