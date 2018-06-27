import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const store = this.store;

    return store.createRecord('contact');
  },

  actions: {
    sendMessage(newContactMessage) {
      newContactMessage.save().then(() => this.controller.set('responseMessage', true));
    },

    cancel() {
      this.transitionTo('index');
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }

      this.controller.set('responseMessage', false);
    }
  }
});
