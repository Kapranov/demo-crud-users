import DS from 'ember-data';
import { notEmpty } from '@ember/object/computed';
import Faker from 'faker';

const { Model, attr } = DS;

export default Model.extend({
  synopsis: attr('string'),

  isValid: notEmpty('synopsis'),

  randomize() {
    this.set('synopsis', Faker.lorem.sentence());
    this.set('synopsis', '<h3>' + Faker.lorem.sentence() + '</h3>');

    return this;
  },
});
