import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  record: null,

  click(event) {
    let onClick = get(this, 'onClick');
    if (onClick) {
      onClick(get(this, 'record'));
      event.stopPropagation();
    }
  }
});
