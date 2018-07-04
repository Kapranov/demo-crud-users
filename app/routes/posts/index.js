import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    p: {
      refreshModel: true
    }
  },

  model(params) {
    const store = this.store;
    return store.query('post', {
      limitToLast: 2
    }, params).then(model => model.sortBy('published').reverse());
  },

  actions: {
    refreshModel() {
      this.refresh();
    },

    deletePost(post) {
      let cntrl = this;
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        post.destroyRecord().then(function() {
          cntrl.send('refreshModel');
        }, function() {
          // TODO: do something to indicate error...
        });
      }
    }
  }
});
