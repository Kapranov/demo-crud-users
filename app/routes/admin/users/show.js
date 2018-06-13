import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('user', params.user_id)
      .then((user) => {
        alert(
          'User: ' + user.get('name') + '\n' + 'Email: ' + user.get('email')
        )
      })
  },

  setupController(controller, model) {
    controller.set('users', model.user_id);
    this._super(controller, model);
  },

  redirect() {
    this.transitionTo('admin.users.index');
  }
});
