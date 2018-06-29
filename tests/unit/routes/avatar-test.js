import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | avatar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:avatar');
    assert.ok(route);
  });
});
