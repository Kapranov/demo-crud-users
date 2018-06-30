import ApplicationAdapter from './application';
import { resolve } from 'rsvp';

export default ApplicationAdapter.extend({
  findAll() {
    return resolve({
      data: [{
        id: '1',
        name: "WIDGET 1"
      }]
    });
  },

  createRecord() {
    return resolve({
      data: {
        id: '2',
        name: "WIDGET 2",
      }
    });
  },

  updateRecord(store, typeClass, snapshot) {
    const id = snapshot.id;

    return resolve({
      data: {
        id: id,
        name: `WIDGET ${id} - UPDATED`,
      },

      included: [],
    });
  }
});
