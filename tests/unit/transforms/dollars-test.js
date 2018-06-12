import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('transform:dollars', 'Unit | Transform | dollars', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let transform = this.owner.lookup('transform:dollars');
    assert.ok(transform);
  });
});
