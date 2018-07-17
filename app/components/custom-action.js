import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  actions: {
    sendAction() {
      get(this, 'sendAction')('action', get(this, 'record'));
    }
  }
});
