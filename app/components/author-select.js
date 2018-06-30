import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  tagName: 'select',
  classNames: ['form-control'],
  authors: null,
  book: null,

  change(event) {
    const selectedAuthorId = event.target.value;
    const selectedAuthor = get(this, 'authors').find((record) => record.id === selectedAuthorId);

    get(this, 'press_author')(selectedAuthor, get(this, 'book'));
  }
});
