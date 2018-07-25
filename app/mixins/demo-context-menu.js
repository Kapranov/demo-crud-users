import Mixin from '@ember/object/mixin';
import { invokeAction } from 'ember-invoke-action';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Mixin.create({
  demoContextMenuService: service('demo-context-menu'),

  demoContextMenu(e) {
    invokeAction(this, '_demoContextMenu', e);

    let demoContextMenu = get(this, 'demoContextMenuService');
    let items = get(this, 'contextItems');
    let selection = get(this, 'contextSelection');
    let details = get(this, 'contextDetails');

    if (items && get(items, 'length')) {
      e.preventDefault();
      demoContextMenu.activate(e, items, selection, details);
    }
  }
});
