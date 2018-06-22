import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nav-link-to', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{nav-link-to}}`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`
      {{#nav-link-to}}
      {{/nav-link-to}}
    `);

    assert.equal(this.element.textContent.trim(), '');
  });
});
