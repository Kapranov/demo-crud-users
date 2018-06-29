import Service from '@ember/service';
import { Promise } from 'rsvp';
import md5 from 'md5';
import ajax from 'ember-ajax/services/ajax';

export default Service.extend({
  hasGravatar(email, secure, gravatarHost) {
    if (!email) {
      throw new Error('expecting email');
    }

    const hash = md5(email);

    return new Promise((resolve)=> {
      ajax(`http${secure ? 's': ''}://${gravatarHost}/avatar/${hash}?d=404`, {
        complete: function() {
          resolve(true);
        },
        error: function() {
          resolve(false);
        }
      });
    });
  }
});
