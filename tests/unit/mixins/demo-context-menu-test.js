import EmberObject from '@ember/object';
import DemoContextMenuMixin from 'demo-crud-users/mixins/demo-context-menu';
import { module, test } from 'qunit';

module('Unit | Mixin | demo-context-menu', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let DemoContextMenuObject = EmberObject.extend(DemoContextMenuMixin);
    let subject = DemoContextMenuObject.create();
    assert.ok(subject);
  });
});
