import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | widgets/current', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:widgets/current');
    assert.ok(route);
  });
});
