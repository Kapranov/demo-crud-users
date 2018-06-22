import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | abc-buttons', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{abc-buttons}}`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`
      {{#abc-buttons}}
      {{/abc-buttons}}
    `);

    assert.equal(this.element.textContent.trim(), '');
  });
});
