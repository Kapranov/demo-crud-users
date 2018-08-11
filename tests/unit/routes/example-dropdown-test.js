import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | example-dropdown', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:example-dropdown');
    assert.ok(route);
  });
});
