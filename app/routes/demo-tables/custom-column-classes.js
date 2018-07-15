import DemoTableRoute from './demo-table';
import { set } from '@ember/object';

export default DemoTableRoute.extend({
  setupController(controller) {
    this._super(...arguments);
    set(controller, 'columns', [
      { propertyName: 'index',     className: 'text-right' },
      { propertyName: 'firstName', className: 'text-success' },
      { propertyName: 'lastName',  className: 'text-uppercase' },
      { propertyName: 'age',       className: 'text-center' },
      { propertyName: 'city',      className: 'text-uppercase' }
    ]);
  }
});
