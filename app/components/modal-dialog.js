import Component from '@ember/component';

export default Component.extend({
  isDestroy: false,

  didInsertElement() {
    const app_controller = this._targetObject;
    const exposedName = "comp-" + this.get('id');
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
