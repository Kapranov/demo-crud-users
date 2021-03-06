import Service from '@ember/service';
import Evented from '@ember/object/evented';

export default Service.extend(Evented, {
  menuActions: null,
  model: null,
  escapeCSS: null,

  show(event, menuActions, model) {
    this.setProperties({
      menuActions,
      model
    });
    this.trigger('handleRightClick', event);
  },

  subscribe(options) {
    this.on(options.eventName, options.context, options.listener);
  },

  unsubscribe(options) {
    this.off(options.eventName, options.context, options.listener);
  }
});
