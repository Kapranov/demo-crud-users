export function initialize(app) {
  // app.inject('route', 'foo', 'service:foo');

  // Util
  ['route', 'controller', 'component'].forEach(function(type) {
    app.inject(type, 'util', 'utility:main');
  });

  // Store
  ['route', 'component', 'utility:main'].forEach(function(type) {
    app.inject(type, 'store', 'service:store');
  });
}

export default {
  //initialize
  name: 'utility',
  initialize: initialize
};
