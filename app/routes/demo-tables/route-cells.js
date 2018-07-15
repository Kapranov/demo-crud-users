import DemoTableRoute from './demo-table';
import { set } from '@ember/object';

export default DemoTableRoute.extend({
  setupController(controller) {
    this._super(...arguments);
    set(controller, 'columns', [
      {
        propertyName: 'id',
        routeName: 'patients.patient'
      },
      {
        propertyName: 'firstName',
        routeName: 'patients.patient',
      },
      { propertyName: 'lastName' },
      { propertyName: 'age' },
      { propertyName: 'city' }
    ]);
  }
});
