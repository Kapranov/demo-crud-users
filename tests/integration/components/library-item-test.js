import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | library-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{library-item}}`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`
      {{#library-item}}
      {{/library-item}}
    `);

    assert.equal(this.element.textContent.trim(), '');
  });
});
