import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  avatarPath: '/assets/images/avatars/',
  name: DS.attr('string', { defaultValue: 'Your FullName' }),
  email: DS.attr('string', { defaultValue: 'Your Mail Box' }),
  bio: DS.attr('string', { defaultValue: 'Your Biography' }),
  avatarFile: DS.attr('string', { defaultValue: 'donald.png' }),
  spent: DS.attr('dollars', { defaultValue: 0 }),
  updatedAt: DS.attr('number'),
  createdAt: DS.attr('number'),
  roles: DS.hasMany('role', { async: true }),
  avatarUrl: computed('avatarPath', 'avatarFile', function(){
    return `${this.get('avatarPath')}${this.get('avatarFile')}`;
  }),
  createdMonth: computed('createdAt', function(){
    return this.get('createdAt').getMonth() + 1
  }),
  fullInfo: computed('name', 'email', function(){
    return (this.get('name')) + ' ' + (this.get('email'));
  })
});
