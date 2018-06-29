import Route from '@ember/routing/route';

export default Route.extend({
  templateName: 'welcome',

  actions: {
    cancel() {
      this.transitionTo('index');
    }
  }
});
