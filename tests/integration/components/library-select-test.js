import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | library-select', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{library-select}}`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`
      {{#library-select}}
      {{/library-select}}
    `);

    assert.equal(this.element.textContent.trim(), '');
  });
});
