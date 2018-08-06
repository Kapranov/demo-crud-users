import Component from '@ember/component';
import { A as a } from '@ember/array';

export default Component.extend({
  classNames: 'Example',
  TEDevents: null,
  filteredTEDevents: null,
  setBySearchable: null,
  queryText: null,

  actions: {
    updateSelection(selection) {
      this.set('setBySearchable', selection);
    },

    updateSearch(text) {
      this.set('queryText', text);

      let regex = this.get('queryText') ?
        new RegExp(this.get('queryText'), 'i') :
        new RegExp('/S', 'i');

      let matches = this.get('TEDevents').filter(item => {
        return regex.test(item.title) || regex.test(item.keywords);
      });

      this.set('filteredTEDevents', a(matches));
    },

    clearResultsList() {
      this.set('filteredTEDevents', null);
    }
  }
});
