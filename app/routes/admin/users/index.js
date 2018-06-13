import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('user').then(
      results => results.sortBy('name')
    );
  },

  actions: {
    deleteUser(user) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        user.deleteRecord();
        user.save().then(() => this.transitionTo('users.index'));
      }
    }
  }
});
