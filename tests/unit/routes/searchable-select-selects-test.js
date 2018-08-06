import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | searchable-select-selects', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:searchable-select-selects');
    assert.ok(route);
  });
});
