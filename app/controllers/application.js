import Controller from '@ember/controller';
import { get } from '@ember/object';

export default Controller.extend({
  actions: {
    openModal: function(target) {
      const modal = get(this, 'comp-' + target);
      modal.send('toggleModal');
    }
  }
});
