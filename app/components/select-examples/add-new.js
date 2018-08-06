import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
  classNames: 'Example',
  newItemName: null,
  talkTags: null,
  selectedTags: [],
  numTags: alias('talkTags.length'),

  actions: {
    addNew(text) {
      this.set('newItemName', text);

      let newTag = {
        id: this.get('numTags'),
        tag: text
      };

      this.get('talkTags').addObject(newTag);
      this.get('selectedTags').addObject(newTag);
    }
  }
});
