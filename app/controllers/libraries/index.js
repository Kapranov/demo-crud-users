import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Controller.extend({
  queryParams: ['filter', 'limit', 'letter'],
  filter: '',
  letter: '',
  limit: 'all',
  limitAll: equal('limit', 'all'),
  filteredList: computed('model.@each.name', 'filter', function() {
    let results = get(this, 'model');
    const query = get(this, 'filter');

    if (query) {
      const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
      const regex = new RegExp(regexString, 'ig');

      results = results.filter((item) => item.get('name').match(regex));
    }

    return results.sortBy('name');
  })
});
