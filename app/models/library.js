import DS from 'ember-data';
import { notEmpty } from '@ember/object/computed';
import Faker from 'faker';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  name:    attr('string'),
  address: attr('string'),
  phone:   attr('string'),

  books: hasMany('book', { inverse: 'library', async: true }),

  isValid: notEmpty('name'),

  randomize() {
    this.set('name', Faker.company.companyName() + ' Library');
    this.set('address', this._fullAddress());
    this.set('phone', Faker.phone.phoneNumber());

    return this;
  },

  _fullAddress() {
    return `${Faker.address.streetAddress()}, ${Faker.address.city()}`;
  }
});
