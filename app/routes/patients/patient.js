import Route from '@ember/routing/route';

export default Route.extend({
  model(patient) {
    return this.get('store').findRecord('patient', patient.patient_id);
  }
});
