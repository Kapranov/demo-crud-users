'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'babel': {
      optional: ['es6.spec.symbols']
    },

    'ember-cli-babel': {
      includePolyfill: true
    },

    'emberCliDropzonejs': {
      includeDropzoneCss: true
    },

    'ember-prism': {
      'theme': 'coy',
      'components': ['scss', 'markup'],
      'plugins': ['line-numbers', 'normalize-whitespace']
    },

    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': false,
      'importBootstrapCSS': false
    },
    SemanticUI: {
      import: {
        css: true,
        javascript: true,
        images: true,
        fonts: true
      },
      source: {
        css: 'node_modules/semantic-ui-css',
        javascript: 'node_modules/semantic-ui-css',
        images: 'node_modules/semantic-ui-css/themes/default/assets/images',
        fonts: 'node_modules/semantic-ui-css/themes/default/assets/fonts'
      }
    },
    snippetSearchPaths: ['app'],
    snippetPaths: ['snippets', 'app']
  });

  app.import('node_modules/ember-droplet/dist/ember-droplet.js');
  app.import('vendor/markdown/markdown.js');

  return app.toTree();
};
