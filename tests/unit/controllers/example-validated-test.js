import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | example-validated', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:example-validated');
    assert.ok(controller);
  });
});
