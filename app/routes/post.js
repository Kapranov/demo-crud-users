import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const store = this.store;
    return store.findRecord('post', params.post_id);
  }
});
