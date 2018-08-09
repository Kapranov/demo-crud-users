import Component from '@ember/component';
import { on } from '@ember/object/evented';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    this.get('backgroundTask').perform();
  },

  didDestroyElement() {
    this.get('backgroundTask').cancelAll();
    this._super(...arguments);
  },

  backgroundTask: task(function* () {
    const ms = 2000 + 2000 * Math.random();
    yield timeout(ms);

    if (parseInt(ms) % 2 === 0) {
      throw new Error('Background task failed.');
    }
  }).evented(),

  backgroundTaskStarted: on('backgroundTask:started', function () {
    this.setOption('icon', 'fa fa-spinner fa-pulse');
  }),

  backgroundTaskSucceeded: on('backgroundTask:succeeded', function () {
    this.setOption('icon', 'fa fa-check');
    this.setOption('type', 'is-success');
  }),

  backgroundTaskErrored: on('backgroundTask:errored', function () {
    this.setOption('icon', 'fa fa-fire');
    this.setOption('type', 'is-danger');
  })
});
