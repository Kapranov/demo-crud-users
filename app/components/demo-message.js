import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  notifier: service(),

  actions: {
    launchTask() {
      this.get('notifier').add({
        type: 'is-info',
        contentComponent: 'task-message',
        duration: 0,
      });
    },
  }
});
