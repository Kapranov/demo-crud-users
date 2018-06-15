import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { A as a } from '@ember/array';

export default Controller.extend({
  color: '#0000ff',
  height: 68,
  weight: 1,
  width: 386,
  signature: computed(function () {
    return a();
  }),

  stringifiedSignature: computed('signature.[]', function() {
    return JSON.stringify(this.get('signature'));
  }),

  actions: {
    reset() {
      this.set('signature', a());
    },

    undo() {
      let lastNewLine;

      this.get('signature').forEach((item, index) => {
        if (item[0] === 1) {
          lastNewLine = index;
        }
      });
      this.set('signature', a(this.get('signature').slice(0, lastNewLine)));
    }
  }
});
