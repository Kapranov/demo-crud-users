import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    limit:  { refreshModel: true },
    letter: { refreshModel: true }
  },

  model(params) {
    const store = this.store;

    if (params.limit === 'all') {
      return store.findAll('library');
    }

    return store.query('library', {
      orderBy: 'name',
      startAt: params.letter,
      endAt: params.letter+"\uf8ff"
    });
  },

  actions: {
    deleteLibrary(library) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        library.destroyRecord();
      }
    }
  }
});
