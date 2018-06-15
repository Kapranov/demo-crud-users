# Demo-CRUD-Users

## Start and Git Commit via Pushed on Repository without Firebase Keys

1. **start server**: `make run`
2. **make git commit**: `./run.sh "YOUR_COMMIT"`

## Model of the user

![schema](/schema.png "schema project")

## Setup Firebase with your keys `config/environment.js`

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
    projectId: "YOUR-FIREBASE-APP-ID",
    storageBucket: 'YOUR-FIREBASE-APP.appspot.com',
    messagingSenderId: "YOUR-MESSAGE-SENDER-ID"
  },


  // if using ember-cli-content-security-policy
  contentSecurityPolicy: {
    'script-src': "'self' 'unsafe-eval' apis.google.com",
    'frame-src': "'self' https://*.firebaseapp.com",
    'connect-src': "'self' wss://*.firebaseio.com
https://*.googleapis.com"
  },
```

## Create a simple modal component

```js
// app/components/confirm-box.js

import Component from '@ember/component';
import { get } from '@ember/object';
import { later } from '@ember/runloop';

export default Component.extend({
  isVisible: false,

  actions: {
    cancelDelete() {
      this.toggleProperty('isVisible');
    },

    confirmDelete() {
      let $thisParent = this.$().parents('.user-profile');

      $thisParent.removeAttr('style').addClass('delete-animation');

      later(this, function() {
        // this.sendAction('action', this.get('param'));
        get(this, 'press_save')(this.get('param'));
      }, 900);
    }
  }
});

// app/components/modal-box.js

import Component from '@ember/component';

export default Component.extend({
  isModalVisible: false,

  actions: {
    hideModal() {
      this.set('isModalVisible', false);
    }
  }
});
```

```
<!-- app/templates/components/confirm-box.hbs -->
{{#if isVisible}}
  <div class="confirm-box confirmin">
    <h4>Really?</h4>
    <button {{action "confirmDelete"}} title="yes"> y </button>
    <button {{action "cancelDelete"}} title="no"> n </button>
  </div>
{{/if}}
```

```
<!-- app/templates/components/modal-box.hbs -->

<div class={{:modal isModalVisible:modal-show:modal-hide}}>
   <button class="modal-close" {{action "hideModal"}}>&times;</button>

   <div class="modal-body">
     {{yield}}
   </div>
</div>

<div class="modal-backdrop" {{action "hideModal"}}></div>
```

```
<!-- app/templates/modal-demo.hbs -->

{{#modal-box isModalVisible=modalVisible}}
<h3>About this demo</h3>
<hr/>
<p>This demo is an Ember JS app.</p>
{{/modal-box}}
```

## Ember Testing

[Running tests from terminal][1]

```sh
ember test

ember test –filter="my-component-name"
ember test –filter="my-router-name"
ember test –filter="unit"
ember test –filter="integration" -s
```

## Ember-Electron

* `ember electron` - Run app in Electron with live-reload server
* `ember electron:test` - Test the app using Electron
* `ember electron:test --server` - Test with Electron in development server mode
* `ember electron:package` - Create binaries (.app, .exe, etc)
* `ember electron:make` - Generate platform specific distributables (installers, distribution packages, etc)
* `ember electron:build` - Build out Ember app with Electron instrumentation (useful for optimizing multi-platform builds)
* `ember electron:assemble` - Assemble Electron application project (useful for debugging builds)

To see a real world example, check out [Ghost Desktop](https://github.com/tryghost/Ghost-Desktop).

## Liquid-Fire - [Predefined Transitions][48]

* default
* cross-fade
* explode
* fade
* flex-grow
* fly-to
* move-over
* scale
* scroll-then
* to-down
* to-left
* to-right
* to-up
* wait


### 13 June 2018 by Oleg G.Kapranov

[1]:  http://voidcanvas.com/ember-testing/
[2]:  https://github.com/poteto/ember-changeset-validations
[3]:  https://github.com/simplabs/ember-simple-auth
[4]:  https://github.com/jpadilla/ember-simple-auth-token
[5]:  http://ember-engines.com/
[6]:  https://gist.github.com/devotox/240c36aa1cb51e63fa2b8917582d2e3f
[7]:  https://github.com/dgeb/ember-engines-demo
[8]:  https://github.com/dgeb/ember-blog-engine
[9]:  https://medium.com/@ynotdraw/ember-engines-tips-after-nine-months-c128d6ea525a
[10]: https://github.com/piceaTech/ember-rapid-forms
[11]: http://piceatech.github.io/ember-rapid-forms
[12]: https://github.com/yapplabs/ember-radio-button
[13]: https://github.com/yapplabs/ember-radio-button/tree/master/tests/dummy/app/components
[14]: https://github.com/patience-tema-baron/ember-keyboard
[15]: https://github.com/jamesarosen/ember-i18n
[16]: https://github.com/scoutforpets/ember-fullcalendar
[17]: http://ember-concurrency.com/docs/introduction/
[18]: https://github.com/201-created/ember-cli-fake-server
[19]: https://github.com/ember-app-scheduler/ember-app-scheduler
[20]: https://github.com/san650/ember-web-app
[21]: https://san650.github.io/ember-web-app/latest/
[22]: https://github.com/trentmwillis/ember-exam
[23]: https://medium.com/@sekharp/building-a-notes-app-in-ember-and-electron-73dad6d6dcc0
[24]: https://github.com/sekharp/bartleby
[25]: https://github.com/robert-j-webb/ember-video
[26]: https://medium.com/@Realrobwebb/my-first-6-months-using-ember-a-retrospective-a5ecf3259b09
[27]: https://github.com/ember-animation/liquid-fire
[28]: https://ember-animation.github.io/liquid-fire/
[29]: https://www.embercasts.com/course/full-stack-ember-with-phoenix/watch/whats-in-this-course-phoenix
[30]: https://github.com/adfinis-sygroup/ember-validated-form
[31]: https://github.com/ember-learn
[32]: https://astronomersiva.github.io/ember-display-in-browser/
[33]: https://github.com/sandydoo/ember-google-maps
[34]: https://github.com/emberjs/ember-mocha
[35]: https://thejsguy.com/2018/05/26/conditional-default-values-for-ember-data-model-attributes.html
[36]: https://github.com/chriskrycho/ember-hoc-example
[37]: https://www.chriskrycho.com/2018/higher-order-components-in-emberjs.html
[38]: https://github.com/offirgolan/ember-cp-validations
[39]: https://medium.com/ember-ish/what-are-controllers-used-for-in-ember-js-cba712bf3b3e
[40]: https://github.com/synapsemx/ember-smoother-signature
[41]: https://karolgalanciak.com/blog/2018/04/28/advanced-ember-data-customization-different-model-types-in-ember-app-and-api-for-the-same-resource/
[42]: https://github.com/kiwiupover/ember-lazy-image-loader
[43]: https://github.com/cibernox/ember-power-select
[44]: https://github.com/cibernox/ember-basic-dropdown
[45]: https://github.com/kaliber5/ember-sticky-element
[46]: https://github.com/brandynbennett/ember-inputmask
[47]: https://thejsguy.com/2018/04/06/extracting-metadata-from-a-custom-api-with-ember-data.html
[48]: https://github.com/ember-animation/liquid-fire/tree/master/addon/transitions
[49]: https://github.com/201-created/emberconf-schedule-2018
[50]: https://github.com/tim-evans/ember-file-upload
[51]: https://github.com/cibernox/ember-power-calendar
[52]: https://github.com/tim-evans/ember-file-upload
[53]: https://github.com/benefitcloud/ember-uploader
[54]: https://github.com/tim-evans/ember-plupload
[55]: https://github.com/tim-evans/ember-nyc-may-2015
[56]: https://www.youtube.com/watch?v=5MxJl4ZA0Us
[57]: https://youtu.be/sZs-VXWIDh0
[58]: http://ember-droplet.herokuapp.com/
[59]: http://mockra.com/2016/02/13/ember-s3-file-upload
[60]: https://www.artmann.co/articles/image-uploads-with-ember-js
[61]: https://lonelycoding.com/ember-js-upload-file-component/
[62]: https://gist.githubusercontent.com/keithweaver/575a61aab19711bbeb98c10785be4674/raw/ad437b4de63abcaff727cc6012b6f787da600236/s3-file-upload.js
[59]: https://github.com/Wildhoney/EmberDroplet


[90]: https://github.com/HospitalRun/hospitalrun-frontend
[91]: https://github.com/HospitalRun/hospitalrun-frontend/archive/1.0.0-beta.tar.gz
[92]: https://github.com/TryGhost/Ghost-Desktop
[93]: https://github.com/discourse/discourse/tree/master/app/assets/javascripts
