import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | toggles', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:toggles');
    assert.ok(route);
  });
});
