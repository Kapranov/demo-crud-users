import Component from '@ember/component';
import { A as a } from '@ember/array';

export default Component.extend({
  classNames: 'Example',
  TEDevents: null,
  filteredTEDevents: null,
  setBySearchable: null,
  queryText: null,
  isLoadingEvents: false,

  actions: {
    updateSelection(selection) {
      this.set('setBySearchable', selection);
    },

    updateSearch(text) {
      this.set('queryText', text);
      this.set('filteredTEDevents', null);

      if (text) {
        this.send('searchForEvents');
      }
    },

    searchForEvents() {
      this.set('isLoadingEvents', true);

      let regex = this.get('queryText') ?
        new RegExp(this.get('queryText'), 'i') :
          new RegExp('/S', 'i');

      let matches = this.get('TEDevents').filter(item => {
        return regex.test(item.title) || regex.test(item.keywords);
      });

      window.setTimeout(() => {
        this.set('filteredTEDevents', a(matches));
        this.set('isLoadingEvents', false);
      }, 1000);
    }
  }
});
