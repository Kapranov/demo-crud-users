import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | is-equal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{is-equal inputValue}}`);

    assert.equal(this.element.textContent.trim(), '1234...');
  });
});
