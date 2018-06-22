import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | x-droplet-input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{x-droplet-input}}`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`
      {{#x-droplet-input}}
      {{/x-droplet-input}}
    `);

    assert.equal(this.element.textContent.trim(), '');
  });
});
