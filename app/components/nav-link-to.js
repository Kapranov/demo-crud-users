import LinkComponent from '@ember/routing/link-component';
import { computed, get } from '@ember/object';

export default LinkComponent.extend({
  tagName: 'li',

  hrefForA: computed('models', 'qualifiedRouteName', function computeLinkToComponentHref() {
    let qualifiedRouteName = get(this, 'qualifiedRouteName');
    let models = get(this, 'models');

    if (this.get('loading')) {
      return get(this, 'loadingHref');
    }

    let routing = get(this, '_routing');
    let queryParams = get(this, 'queryParams.values');

    return routing.generateURL(qualifiedRouteName, models, queryParams);
  })
});
