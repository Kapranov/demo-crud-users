import Controller from '@ember/controller';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  demoNotify: service(),

  actions: {
    openModal: function(target) {
      const modal = get(this, 'comp-' + target);
      modal.send('toggleModal');
    }
  }
});
