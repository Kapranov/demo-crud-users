import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | semantic', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:semantic');
    assert.ok(route);
  });
});
