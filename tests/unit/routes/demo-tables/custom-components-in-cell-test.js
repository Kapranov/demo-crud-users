import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | demo-tables/custom-components-in-cell', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:demo-tables/custom-components-in-cell');
    assert.ok(route);
  });
});
