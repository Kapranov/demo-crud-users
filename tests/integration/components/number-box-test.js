import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | number-box', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{number-box}}`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`
      {{#number-box}}
      {{/number-box}}
    `);

    assert.equal(this.element.textContent.trim(), '');
  });
});
