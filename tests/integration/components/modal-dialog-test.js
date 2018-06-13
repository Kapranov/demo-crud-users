import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | modal-dialog', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{modal-dialog}}`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`
      {{#modal-dialog}}
      {{/modal-dialog}}
    `);

    assert.equal(this.element.textContent.trim(), '');
  });
});
