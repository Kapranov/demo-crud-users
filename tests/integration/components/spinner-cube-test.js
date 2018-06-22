import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | spinner-cube', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{spinner-cube}}`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`
      {{#spinner-cube}}
      {{/spinner-cube}}
    `);

    assert.equal(this.element.textContent.trim(), '');
  });
});
