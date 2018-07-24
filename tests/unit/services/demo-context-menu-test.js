import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | demo-context-menu', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:demo-context-menu');
    assert.ok(service);
  });
});

