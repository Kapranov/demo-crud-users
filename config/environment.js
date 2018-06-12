'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'demo-crud-users',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: { },
      EXTEND_PROTOTYPES: { Date: false }
    },

    APP: { }
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = false;
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
  }

  if (environment === 'test') {
    ENV.locationType = 'none';

    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') { }

  return ENV;
};
