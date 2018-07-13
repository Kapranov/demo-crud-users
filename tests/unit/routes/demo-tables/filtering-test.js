import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | demo-tables/filtering', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:demo-tables/filtering');
    assert.ok(route);
  });
});
