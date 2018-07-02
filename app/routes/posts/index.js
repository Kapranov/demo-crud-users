import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const store = this.store;

    return store.query('post', { orderBy: 'published', limitToLast: 20 });
  }
});
