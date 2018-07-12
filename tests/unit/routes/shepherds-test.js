import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | shepherds', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:shepherds');
    assert.ok(route);
  });
});
