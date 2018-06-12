module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'no-console':  process.env.NODE_ENV === 'development' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'development' ? 2 : 0,
    //"no-alert": "off",
    //"no-array-constructor": "off",
    //"no-bitwise": "off",
    //"no-caller": "off",
    //"no-case-declarations": "error",
    //"no-catch-shadow": "off",
    //"no-class-assign": "error",
    //"no-cond-assign": "error",
    //"no-confusing-arrow": "off",
    //"no-console": "off",
  },
  overrides: [
    {
      files: [
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
