import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    const store = this.store;

    return hash({
      users:     store.findAll('user'),
      libraries: store.findAll('library'),
      books:     store.findAll('book'),
      authors:   store.findAll('author')
    })
  },

  setupController(controller, model) {
    controller.set('users', model.user);
    controller.set('libraries', model.libraries);
    controller.set('books', model.books);
    controller.set('authors', model.authors);

    this._super(controller, model);
  }
});
