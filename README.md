# Demo-CRUD-Users

## Model of the user

![schema](/schema.png "schema project")

## Setup Firefox

```
EmberFire installed.

CONFIGURATION REQUIRED

Please update config/environment.js with your firebase settings. You can
find these at https://console.firebase.google.com/ by clicking the [Add
Firebase to your web app] button on the project overview panel.

Example:

// config/environment.js
var ENV = {
  locationType: 'auto',
  // ...
  firebase: {
    apiKey: 'xyz',
    authDomain: 'YOUR-FIREBASE-APP.firebaseapp.com',
    databaseURL: 'https://YOUR-FIREBASE-APP.firebaseio.com',
    storageBucket: 'YOUR-FIREBASE-APP.appspot.com',
  },


  // if using ember-cli-content-security-policy
  contentSecurityPolicy: {
    'script-src': "'self' 'unsafe-eval' apis.google.com",
    'frame-src': "'self' https://*.firebaseapp.com",
    'connect-src': "'self' wss://*.firebaseio.com
https://*.googleapis.com"
  },
```

### 12 June 2018 by Oleg G.Kapranov
