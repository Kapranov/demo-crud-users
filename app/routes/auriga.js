import Route from '@ember/routing/route';
import { A as a } from '@ember/array';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    return a([
      EmberObject.create({ count: 0 }),
      EmberObject.create({ count: 0 }),
      EmberObject.create({ count: 0 }),
      EmberObject.create({ count: 0 }),
      EmberObject.create({ count: 0 })
    ]);
  }
});
