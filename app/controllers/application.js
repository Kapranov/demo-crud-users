import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    openModal: function(target) {
      const modal = this.get('comp-' + target);
      modal.send('toggleModal');
    }
  }
});
