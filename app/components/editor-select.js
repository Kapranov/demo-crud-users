import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  tagName: 'select',
  classNames: ['form-control'],
  editors: null,

  change(event) {
    const selectedEditorId = event.target.value;
    const selectedEditor = get(this, 'editors').find((record) => record.id === selectedEditorId);

    get(this, 'press_select')(selectedEditor, get(this, 'editor'));
  }
});
