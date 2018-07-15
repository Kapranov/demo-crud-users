import DemoTableRoute from './demo-table';
import { set } from '@ember/object';

export default DemoTableRoute.extend({
  setupController(controller) {
    this._super(...arguments);
    set(controller, 'columnSets', [
      {
        label: 'Only Name',
        showColumns: ['firstName', 'lastName']
      },
      {
        label: 'Random',
        showColumns(columns) {
          columns.forEach((column) => column.set('isHidden', Math.random() > 0.5));
          this._sendColumnsVisibilityChangedAction();
        }
      },
      {
        label: 'Add Name',
        showColumns: ['firstName', 'lastName'],
        hideOtherColumns: false
      },
      {
        label: 'Toggle Name',
        showColumns: ['firstName', 'lastName'],
        toggleSet: true
      }
    ]);
  }
});
