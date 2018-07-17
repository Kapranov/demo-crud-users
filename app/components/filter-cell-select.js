import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  data: null,
  filterOptions: computed(function () {
    return [''].concat(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']).map(option => ({
      value: option,
      label: option
    }));
  })
});
