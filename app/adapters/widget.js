import ApplicationAdapter from './application';
import DS from 'ember-data';
import { resolve } from 'rsvp';

export default ApplicationAdapter.extend({
  findAll() {
    return resolve({
      data: [{
        id: '1',
        type: 'widget',
        attributes: {
          name: "WIDGET 1"
        }
      }]
    });
  },

  createRecord() {
    return resolve({
      data: {
        id: '2',
        type: 'widget',
        attributes: {
          name: "WIDGET 2",
        }
      }
    });
  },

  updateRecord(store, typeClass, snapshot) {
    const id = snapshot.id;

    return resolve({
      data: {
        id: id,
        type: 'widget',
        attributes: {
          name: `WIDGET ${id} - UPDATED`,
        }
      },

      included: [],
    });
  }
});
