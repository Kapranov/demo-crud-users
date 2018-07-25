import Component from '@ember/component';
import { invokeAction } from 'ember-invoke-action';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';
import { reads } from '@ember/object/computed';
import { get } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  demoContextMenu: service('demo-context-menu'),
  isActive: reads('demoContextMenu.isActive'),
  renderLeft: reads('demoContextMenu.renderLeft'),
  items: reads('demoContextMenu.items'),
  _selection: reads('demoContextMenu.selection'),
  details: reads('demoContextMenu.details'),
  clickEvent: reads('demoContextMenu.event'),

  selection: computed('_selection.[]', function() {
    return [].concat(get(this, '_selection'));
  }),

  didInsertElement() {
    this._super(...arguments);
    this.setWormholeTarget();
  },

  setWormholeTarget() {
    let id = 'wormhole-demo-context-menu';
    let $target = $(`#${id}`);
    if ($target.length === 0) {
      $('body').append(`<div id="${id}"></div>`);
    }
  },

  position: computed('demoContextMenu.position.{left,top}', function() {
    let { left, top } = get(this, 'demoContextMenu.position') || {};
    return htmlSafe(`left: ${left}px; top: ${top}px;`);
  }),

  itemIsDisabled: computed('selection.[]', 'details', function() {
    let selection = get(this, 'selection') || [];
    let details = get(this, 'details');

    return function(item) {
      let disabled = get(item, 'disabled');

      if (!get(item, 'action') && !get(item, 'subActions')) {
        return true;
      }

      if (typeof disabled === 'function') {
        return disabled(selection, details);
      }

      return disabled;
    };
  }),

  clickAction: computed('selection.[]', 'details', function() {
    let selection = get(this, 'selection');
    let details = get(this, 'details');
    let event = get(this, 'clickEvent');

    return function(item) {
      invokeAction(item, 'action', selection, details, event);
    };
  })
});
