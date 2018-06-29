import DS from 'ember-data';
import { computed } from '@ember/object';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  avatarPath: '/assets/images/avatars/',

  name:       attr('string', { defaultValue: 'Your FullName' }),
  email:      attr('string', { defaultValue: 'Your Mail Box' }),
  bio:        attr('string', { defaultValue: 'Your Biography' }),
  avatarFile: attr('string', { defaultValue: 'donald.png' }),
  spent:      attr('dollars',{ defaultValue: 0 }),
  updatedAt:  attr('number'),
  createdAt:  attr('number'),
  roles:      hasMany('role', { async: true }),

  firstName:  attr('string'),
  created:    attr('number'),
  username:   computed(function() {
    return this.get('id');
  }),
  avatar:     computed(function() {
    return 'https://www.gravatar.com/avatar/' + md5(this.get('id')) + '.jpg?d=retro&size=80';
  }),

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
