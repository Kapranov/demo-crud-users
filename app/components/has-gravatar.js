import Component from '@ember/component';
import { computed, set, getProperties } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  gravatar: service('gravatar'),
  has: false,
  checking: true,
  secure: false,
  email: '',

  //didReceiveAttrs() {
  //  this._super(...arguments);

  //  const { email, gravatar, secure } = getProperties(this, 'email', 'gravatar', 'secure');

  //  return gravatar.hasGravatar(email, secure, 'www.gravatar.com').then((has)=> {
  //    set(this, 'has', has);
  //    set(this, 'checking', false);
  //  });
  //}

  didReceiveAttrs: computed('email', 'gravatar', 'secure', function() {
    const { email, gravatar, secure } = getProperties(this, 'email', 'gravatar', 'secure');

    return gravatar.hasGravatar(email, secure, 'www.gravatar.com').then((has)=> {
        set(this, 'has', has);
        set(this, 'checking', false);
      });
  })
});
