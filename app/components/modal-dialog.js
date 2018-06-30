import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  isDestroy: false,

  didInsertElement() {
    const app_controller = this._targetObject;
    const exposedName = "comp-" + get(this, 'id');
    app_controller.set(exposedName, this);
  },

  actions: {
    toggleModal() {
      this.toggleProperty('enabled');
    },

    hideModal() {
      this.set('isDestroy');
    }
  }
});
