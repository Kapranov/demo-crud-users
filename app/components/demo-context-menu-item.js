import Component from '@ember/component';
import { invokeAction } from 'ember-invoke-action';
import { computed } from '@ember/object';
import { bool } from '@ember/object/computed';
import { get } from '@ember/object';

export default Component.extend({
  tagName: 'li',
  classNames: ['demo-context-menu__item'],
  classNameBindings: [
    'isDisabled:demo-context-menu__item--disabled',
    '_isParent:demo-context-menu__item--parent'
  ],

  _amount: computed('_isParent', 'amount', function() {
    let amount = get(this, 'amount');

    return !get(this, '_isParent') && amount > 1 && amount;
  }),

  _isParent: bool('item.subActions.length'),

  isDisabled: computed('item.{disabled,action}', 'itemIsDisabled', function() {
    let item = get(this, 'item');
    return invokeAction(this, 'itemIsDisabled', item);
  }),

  click() {
    if (!get(this, 'isDisabled') && !get(this, '_isParent')) {
      invokeAction(this, 'clickAction', get(this, 'item'));
    }
  }
});
