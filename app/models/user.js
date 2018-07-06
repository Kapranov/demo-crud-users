import DS from 'ember-data';
import { computed, get } from '@ember/object';
import md5 from 'md5';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  avatarPath: '/assets/images/avatars/',

  name:       attr('string', { defaultValue: 'Your FullName' }),
  email:      attr('string', { defaultValue: 'Your Mail Box' }),
  bio:        attr('string', { defaultValue: 'Your Biography' }),
  avatarFile: attr('string', { defaultValue: 'donald.png' }),
  spent:      attr('dollars',{ defaultValue: 0 }),
  firstName:  attr('string', { defaultValue: 'Your FirstName' }),
  created:    attr('number'),
  updatedAt:  attr('number'),
  createdAt:  attr('number'),

  username: computed(function() {
    return get(this, 'id');
  }),
  avatar: computed(function() {
    return 'https://www.gravatar.com/avatar/' + md5(get(this, 'id')) + '.jpg?d=retro&size=80';
  }),
  avatarUrl: computed('avatarPath', 'avatarFile', function(){
    return `${get(this, 'avatarPath')}${get(this, 'avatarFile')}`;
  }),
  createdMonth: computed('createdAt', function(){
    return get(this, 'createdAt').getMonth() + 1
  }),
  fullInfo: computed('name', 'email', function(){
    return (get(this, 'name')) + ' ' + (get(this, 'email'));
  }),

  roles: hasMany('role', { async: true })
  //posts: hasMany('post', { async: true })
});
