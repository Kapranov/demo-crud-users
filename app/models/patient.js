import DS from 'ember-data';
import {computed} from '@ember/object';
import Faker from 'faker';

const { Model, attr } = DS;
const {name, random, address} = Faker;

export default Model.extend({
  index:     attr('number'),
  firstName: attr('string'),
  lastName:  attr('string'),
  age:       attr('number'),
  city:      attr('string'),
  country:   attr('string'),

  cityWithHtml: computed('city', function () {
    return `<i>${this.get('city')}</i>`;
  }),

  canBuyBeer: computed.gt('age', 20),

  randomize() {
    this.set('index', this._patientIndex());
    this.set('firstName', name.firstName());
    this.set('lastName', name.lastName());
    this.set('age', this._patientAge());
    this.set('city', address.city());
    this.set('country', this._patientCountry());

    return this;
  },

  _patientIndex(i) {
    return random.number(i - 100);
  },

  _patientCountry() {
    return random.arrayElement(Faker.definitions.address.country.filter(c => c[0] === 'A'));
  },

  _patientAge() {
    return 11 + random.number(42);
  }
});
