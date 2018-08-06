import Component from '@ember/component';

export default Component.extend({
  classNames: 'Example',
  setBySearchable: null,

  actions: {
    update(selection) {
      this.set('setBySearchable', selection);
    }
  }
});
