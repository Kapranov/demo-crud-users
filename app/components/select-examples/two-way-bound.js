import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: 'Example',
  TEDevents: null,

  selectedOption: computed('TEDevents', function() {
    return this.get('TEDevents').findBy('title', 'TED2015');
  })
});
