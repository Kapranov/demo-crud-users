import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('validate-user', {
      details: this.store.createRecord('validate-user-detail')
    });
  },

  setupController(controller) {
    controller.setProperties({
      showAlert: false,
      isRegistered: false,
      showCode: false,
      didValidate: false
    });

    this._super(...arguments);
  },

  actions: {
    reset() {
      this.refresh();
    }
  }
});
