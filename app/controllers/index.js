import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import { get } from '@ember/object';
import firebase from 'firebase';

export default Controller.extend({
  headerMessage: 'Your Account is empty.',
  responseMessage: '',
  emailAddress: '',
  yourName: '',

  isValid: match('yourName', /^[A-Za-z].+[A-Za-z]+$/),
  isDisabled: not('isValid'),

  actions: {
    saveUser() {
      const name  = get(this, 'yourName');
      const transform = firebase.database.ServerValue.TIMESTAMP;
      const newUser = this.store.createRecord('user', {
        name: name,
        updatedAt: transform,
        createdAt: transform,
      });

      newUser.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your surname with the following id: ${response.get('id')}`);
        this.set('yourName', '');
      });
    }
  }
});
