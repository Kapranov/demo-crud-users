import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  id: null,
  name: null,
  books: null
});
