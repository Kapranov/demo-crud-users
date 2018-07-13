import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | demo-tables/demo-table', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:demo-tables/demo-table');
    assert.ok(route);
  });
});
