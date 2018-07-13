import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | demo-tables/select-rows-with-checkboxes', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:demo-tables/select-rows-with-checkboxes');
    assert.ok(route);
  });
});
