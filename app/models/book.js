import DS from 'ember-data';
import Faker from 'faker';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  title:       attr('string'),
  releaseYear: attr('date'),

  author:  belongsTo('author', { inverse: 'books', async: true }),
  library: belongsTo('library',{ inverse: 'books', async: true }),

  randomize(author, library) {
    this.set('title', this._bookTitle());
    this.set('author', author);
    this.set('releaseYear', this._randomYear());
    this.set('library', library);

    return this;
  },

  _bookTitle() {
    return `${Faker.commerce.productName()} Cookbook`;
  },

  _randomYear() {
    return new Date(this._getRandomArbitrary(1900, 2015).toPrecision(4));
  },

  _getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
});
