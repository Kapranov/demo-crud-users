import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  bio: DS.attr('string'),
  avatarUrl: DS.attr('string'),
  spent: DS.attr('dollars'),
  updatedAt: DS.attr('number'),
  createdAt: DS.attr('number'),
  roles: DS.hasMany('role', { async: true }),
  createdMonth: computed('createdAt', function(){
    return this.get('createdAt').getMonth() + 1
  })
});
