import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: 'Example',
  setBySearchable: null,
  TEDevents: null,

  initialSelection: computed('TEDevents', function() {
    return this.get('TEDevents').findBy('title', 'TED2015');
  }),

  actions: {
    update(selection) {
      this.set('setBySearchable', selection);
    }
  }
});
