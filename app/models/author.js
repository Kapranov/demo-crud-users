import DS from 'ember-data';
import { empty } from '@ember/object/computed';
import Faker from 'faker';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  name:  attr('string'),
  books: hasMany('book', { inverse: 'author', async: true }),

  isNotValid: empty('name'),

  randomize() {
    this.set('name', Faker.name.findName());
    return this;
  }
});
