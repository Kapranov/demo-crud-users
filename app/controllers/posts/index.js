import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  posts: computed.sort('model', function (a, b) {
    return b.get('published') - a.get('published');
  })
});
