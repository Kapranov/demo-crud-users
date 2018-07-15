import DemoTableRoute from './demo-table';
import { set, get } from '@ember/object';
import { A } from '@ember/array';

export default DemoTableRoute.extend({
  setupController(controller) {
    this._super(...arguments);
    set(controller, 'data', A(get(this, 'store').peekAll('patient')));
    get(controller, 'columns').pushObject({
      title: 'Delete',
      component: 'delete-row'
    });
  }
});
