import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const store = this.store;
    return store.findAll('widget');
  },

  actions: {
    createWidget() {
      const store = this.store;
      let widget = store.createRecord('widget');
      widget.save();
    },

    updateWidget(widget) {
      widget.save();
    }
  }
});
