import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | widgets/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:widgets/index');
    assert.ok(route);
  });
});
