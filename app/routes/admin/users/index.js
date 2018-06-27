import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const store = this.store;

    return store.findAll('user').then(
      results => results.sortBy('name')
    );
  },

  actions: {
    deleteUser(user) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        user.destroyRecord().then(() => {
          this.transitionTo('users.index');
        }).catch(() => {
          user.reload();
        });
      }
    }
  }
});
