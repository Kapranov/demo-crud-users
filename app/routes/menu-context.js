import Route from '@ember/routing/route';
import Faker from 'faker';

export default Route.extend({
  model() {
    return [
      {
        name: Faker.name.findName(),
        city: Faker.address.city(),
        education: 'B.E',
        work: Faker.address.city()
      },
      {
        name: Faker.name.findName(),
        city: Faker.address.city(),
        education: 'B.E',
        work: Faker.address.city()
      },
      {
        name: Faker.name.findName(),
        city: Faker.address.city(),
        education: 'B.E',
        work: Faker.address.city()
      },
      {
        name: Faker.name.findName(),
        city: Faker.address.city(),
        education: 'B.E',
        work: Faker.address.city()
      },
      {
        name: Faker.name.findName(),
        city: Faker.address.city(),
        education: 'B.E',
        work: Faker.address.city()
      }
    ];
  },

  actions: {
    edit(model) {
      alert("Edit " + model.name);
    },

    email(model) {
      alert("Email " + model.name);
    },

    print(model) {
      alert("Print " + model.name);
    },

    download(model) {
      alert("Download " + model.name);
    },

    delete(model) {
      alert("Delete " + model.name);
    }
  }
});
