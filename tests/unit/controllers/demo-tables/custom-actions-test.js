import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | demo-tables/custom-actions', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:demo-tables/custom-actions');
    assert.ok(controller);
  });
});
