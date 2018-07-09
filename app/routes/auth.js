import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    //return this.get('session').fetch().catch(() => undefined);
    //return this.get("session").fetch().catch(function() {});
    //return this.get('session').fetch().catch(function() {});
    return this.get('session').fetch().catch((error) => {
      console.log(error);
    });
  },

  actions: {
    signIn(provider, param1, param2) {
      let authPromise;

      if (provider === 'password') {
        authPromise = this.get('session').open('firebase', {
          provider: provider,
          email: param1,
          password: param2
        });
      } else if (provider === 'custom') {
        authPromise = this.get('session').open('firebase', {
          provider: provider,
          token: param1
        });
      } else {
        authPromise = this.get('session').open('firebase', {
          provider: provider,
          redirect: param1
        });
      }

      authPromise.then(result => console.log('session.open result:', result))
        .catch(err => console.warn('session.open error:', err));
    },

    signOut() {
      this.get('session').close();
    }
  }
});
