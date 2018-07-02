import Component from '@ember/component';
import { computed, set, getProperties } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  //gravatar: service('gravatar'),
  gravatar: service(),
  hasGravatar: false,
  checking: true,
  email: '',
  secure: true,

  //didReceiveAttrs() {
  //  this._super(...arguments);

  //  const { email, gravatar, secure } = getProperties(this, 'email', 'gravatar', 'secure');

  //  return gravatar.hasGravatar(email, secure, 'www.gravatar.com')
  //    .then((hasGravatar)=> {
  //      set(this, 'hasGravatar', hasGravatar);
  //      set(this, 'checking', false);
  //    });
  //},

  didReceiveAttrs: computed('email', 'gravatar', 'secure', function() {
    const { email, gravatar, secure } = getProperties(this, 'email', 'gravatar', 'secure');

    return gravatar.hasGravatar(email, secure, 'www.gravatar.com')
      .then((hasGravatar)=> {
        set(this, 'hasGravatar', hasGravatar);
        set(this, 'checking', false);
      });
  })
});
