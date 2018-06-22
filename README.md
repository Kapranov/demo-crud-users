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

## Modify content-security-policy on new ember-cli

```
contentSecurityPolicy: {
  'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
  'connect-src': "'self'",
  'style-src': "'self' 'unsafe-inline'"
},

APP: {
  ...
  usingCors: false,
  corsWithCreds: false,
  apiURL: null
},

switch (environment) {
  case 'local-backend':
    ENV.APP.usingCorsrs = true;
    ENV.APP.corsWithCreds = true;
    ENV.APP.apiURL = 'http://locationTypeocal-backend.app:4200'
    break;
  case 'development-backend':
    ENV.APP.caseusingCors = true;
    ENV.APP.corsWithCreds = true;
    ENV.APP.apiURL = 'https://development-backend.tld/'
    break;
  case 'staging-backend':
    ENVV.APP.usingCors = true;
    ENV.APP.corsWithCreds = true;
    ENV.APP.apiURL = 'https://staging-backend.tld/'
    break;
}
```

Substitute `local-backend` for `development-backend` or `staging-backend`
to point Ember at the other backends. Then point your browser at the
ember server via the URL you've configured as the CORS `Origin`, e.g.,
`http://emberapp.development-backend.tld:4200/` for the development
environment.

`ember s --environment local-backend`

## Make ember cli serve uploaded files

I currently work on a projet with a backend ...

## Multiple models on one page

You can also make a "super model" that aggregates all of the models for
a page  for  you.  This  is  especially  useful if you have things like
"image"  or "media"  models that  get used several times on a page. For
example:

```js
var MultipleChoiceQuizPage = Page.extend({
  header: DS.attr("string"),
  promptAudio: DS.belongsTo("media", {async: true}),
  answerAudio: DS.belongsTo("media", {async: true}),
  answerOptions: DS.hasMany("multipleChoiceQuizChoice", {async: true})
});
```
In  your persistence  layer,  store a record for each combination of
elements that make up a page. Then your model hook becomes something
like:

```js
model: function(parameters){
  return this.store.find("multipleChoiceQuizPage", parameters.id);
}
```

In a lot of cases, I think this  is simpler than  using `RSVP.hash` in
your model hook, making the store request directly from the component,
or using a ton of service calls.


I have a fairly simply app I’m working on. The `ApplicationRoute` loads
a list of categories and displays them:

* Videos
* Articles

Clicking on each of these loads the `CategoryRoute`:

```js
/videos/
/articles/
```

Within the `CategoryRoute` I'd like to load a list of `Items` to be
displayed within that route:

```js
/videos/video-one
/articles/article-one
/articles/article-two
```

This seems like it should be really simple, but I can't figure it out.
Here's the code I've got so far, could I please get some input?

The index page loads just fine, I can  click  into a category and that
loads fine as well. I'm just having trouble trying to load the list of
items relevant to a specific category.

Note that I haven't begun implementing a "details" view for each
individual item. That'll come later.

```js
var App = Ember.Application.create();

App.Router.map(function() {
  this.resource('index', { path: '/'});
  this.resource('category', { path: '/:category_id'});
});

App.ApplicationRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('category');
  }
});

App.CategoryRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('category', params.category_id);
  }
});

App.Category = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  items: DS.hasMany('item'),
});

App.Item = DS.Model.extend({
  category: DS.belongsTo('category'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  repository: DS.attr('string')
});
```

I think I was just figuring out a similar problem: Does this help?
[http://stackoverflow.com/a/24477302](Render Nested Navigation Sidebar).

Okay. Progress, but I'm getting weird behavior now. Here's the updated
CategoryRoute:

```js
App.CategoryRoute = Ember.Route.extend({
  model: function (params) {
    return Ember.RSVP.hash({
      category: this.store.find('category', params.category_id),
      items: this.store.find('item', params.category_id)
    });
  }
});
```
When I click from `/` to `/components` to see no API call, but I do get
the following error:

```js
Uncaught Error: Assertion Failed: You looked up the 'items' relationship
on '<App.Category:ember308:components>' but some of the associated
records were not loaded. Either make sure they are all loaded together
with the parent record
```

If I simply reload the page I see an API call to `/api/items/components`
which returns 2 hard coded items, but only displays the first. That
seems consistent with the `find` method which `Returns the first item in
the array for which the callback returns true`. So I changed:

```js
// this line
items: this.store.find('item', params.category_id)
// to this:
items: this.store.find('item', {category: params.category_id})
```
Then I get the same error as previous when clicking into the route, but
when I reload I get an API call to `/api/items?category=components`
instead off `/api/items/components`. This method does however work, and
I get the correct data on the page.

So I have two questions.

1. Why isn't the item data loading when I click into the route?
2. I'd prefer to call an API endpoint directly rather than passing a
   query string. How can I accomplish this?

Anyone have ideas on the last issue I'm having?

I forgot to mention, for #1, did you define the `relation as {async:true}`
on your Model? That was my point for linking the Ember Data article. Not
sure how I mixed that up…

```js
// app/routes/foo.js
App.FooRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      tweets: this.store.findAll('tweet')
    });
  }
});

// app/controllers/foo.js
App.FooController = Ember.ObjectController.extend({});

// app/templates/foo.hbs
<ul>
  {{#each users}}
    <li>{{name}}</li>
  {{/each}}
</ul>

<ul>
  {{#each tweets}}
    <li>{{content}}</li>
  {{/each}}
</ul>
```

## Loading multiple models in single route

```js
model: function() {
  return Ember.RSVP.all([App.Model1.find(), App.Model2.find()]);
}
```

```js
afterModel: function() {
  return Model.find().then(function() {
    // Additional actions
  });
}

afterModel: function() {
  return Ember.RSVP.all([App.Model2.find(), App.Model3.find()]).then(function() {
    // Additional actions
  });
}
```

```js
return Ember.RSVP.hash({
  model1: App.Model1.find(),
  model2: App.Model2.find()
));

// Once fulfilled:
model().then(function(hash){
  hash.model1 // =>  <fulfilled value of App.Model1.find()>
  hash.model2 // =>  <fulfilled value of App.Model1.find()>
});
```

You can use the `Ember.RSVP.hash` to load several models:

```js
// app/routes/index.js
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      people: this.store.findAll('person'),
      companies: this.store.findAll('company')
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'people', model.people);
    Ember.set(controller, 'companies', model.companies);
  }
});

// app/templates/index.js

// And in your template you can refer to people and companies
// to get the loaded data:

<h2>People:</h2>
<ul>
  {{#each people as |person|}}
    <li>{{person.name}}</li>
  {{/each}}
</ul>
<h2>Companies:</h2>
<ul>
  {{#each companies as |company|}}
    <li>{{company.name}}</li>
  {{/each}}
</ul>
```

## Render Nested Navigation Sidebar together with a main view

http://emberigniter.com/load-multiple-models-single-route


## Regualar expressions

```js
// models/user_registration.js
model: function () {
  return App.UserRegistration.create({
    email: 'horse@bag.com',
    password: 'shortstop',
    accountNumber: 'ABC1234'
  });
}
// controllers/index.js
form: Ember.A([
  {_id: "name", regex: /^[A-Za-z]+$/},
  {_id: "pin" , regex: /^\d{4}$/}
]),

validations: {
  email: /.@.+..+/,
  password: /.{8}/,
  accountNumber: /^[A-Z]{3} ?\d{4}$/i
}

// Example use of allValid function: disable submit
disabled: function() {
  return !this.allValid();
}.property('email', 'password', 'accountNumber'),

actions: {
  register: function () {
    alert('Registering with ' +
      this.get('email') + ', ' +
      this.get('password') + ', ' +
      this.get('accountNumber'));
    }
  }
});
```



### 20 June 2018 by Oleg G.Kapranov

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
[63]: https://github.com/busybusy/ember-jsignature
[64]: https://github.com/expo/firebase-storage-upload-example
[65]: https://blog.gennady.pp.ua/how-to-upload-files-with-ember-js-creating-your-own-uploader/
[66]: https://github.com/GendelfLugansk/ember-file-uploader
[67]: http://beerlington.com/blog/2014/07/13/direct-image-uploads-with-emberjs-and-cloudinary/
[68]: https://github.com/beerlington/cats-ui
[69]: https://haughtcodeworks.com/blog/software-development/s3-direct-uploads-with-ember-and-phoenix/
[70]: https://github.com/joshualloyd/firebase-file-upload-example
[71]: https://github.com/expo/firebase-storage-upload-example
[72]: https://github.com/Aathi/firebase-storage-ember-example
[73]: https://medium.com/@lawrey/emberjs-firebase-journey-4-how-to-upload-image-to-firebase-ee49cc1d2b7b
[74]: https://github.com/mgoren/super-rentals-with-reviews
[75]: https://github.com/epicodus-lessons/super-rentals-with-reviews
[76]: https://www.learnhowtoprogram.com/ember-js/ember-js/ember-data-and-firebase
[77]: http://www.programwitherik.com/emberjs_2-0_example_app_with_firebase/
[78]: https://github.com/workmanw/embernati-upload-demo
[79]: http://workmanw.github.io/embernati-upload-demo
[80]: http://www.aymerick.com/2015/03/26/ember-cli-server-upload-directory.html
[81]: https://blog.fossasia.org/set-up-firebase-to-upload-user-files/
[82]: https://github.com/FutoRicky/ember-cli-dropzonejs
[83]: https://www.emberscreencasts.com/posts/51-drag-and-drop-with-file-uploads
[84]: http://emberigniter.com/modify-content-security-policy-on-new-ember-cli-app
[85]: https://www.curiousm.com/labs/2016/08/05/using-cors-and-ember-data-to-point-an-ember-app-to-multiple-backend-deployments/
[86]: https://github.com/Wildhoney/EmberDroplet
[87]: https://github.com/HospitalRun/hospitalrun-frontend
[88]: https://github.com/HospitalRun/hospitalrun-frontend/archive/1.0.0-beta.tar.gz
[89]: https://github.com/TryGhost/Ghost-Desktop
[90]: https://github.com/discourse/discourse/tree/master/app/assets/javascripts
[91]: https://www.base64-image.de/
[92]: https://www.toptal.com/emberjs/a-thorough-guide-to-ember-data
[93]: https://stackoverflow.com/questions/20521967/emberjs-how-to-load-multiple-models-on-the-same-route
[94]: https://stackoverflow.com/questions/24469743/ember-js-render-nested-navigation-sidebar-together-with-a-main-view
[95]: http://emberigniter.com/load-multiple-models-single-route
[96]: http://emberjs.jsbin.com/begewoza/1/edit?html,js,output
[97]: http://emberjs.jsbin.com/nibikufa/1/edit?html,css,js,output
[98]: http://emberjs.jsbin.com/hituxado/1/edit?html,css,js,output
[99]:
