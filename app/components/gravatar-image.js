import Component from '@ember/component';
import { computed, get } from '@ember/object';
import md5 from 'md5';

export default Component.extend({
  tagName: 'img',
  attributeBindings: ['src', 'alt', 'title', 'size:height', 'size:width'],
  classNames: ['gravatar-image'],
  size: 250,
  email: '',
  title: '',
  defaultImage: '',
  secure: true,
  retina: false,
  hash: null,

  src: computed('email', 'imageSize', 'default', 'hash', function() {
    const email = get(this, 'email');
    const imageSize = get(this, 'imageSize');
    const def = get(this, 'defaultImage');
    const secure = get(this, 'secure');
    const protocol = secure ? 'https' : 'http';
    const hashToUse = get(this, 'hash') || md5(email);

    return protocol + '://www.gravatar.com/avatar/' + hashToUse + '?s=' + imageSize + '&d=' + def;
  }),

  imageSize: computed('size', 'retina', function() {
    const size = get(this, 'size');
    return get(this, 'retina') ? (size * 2) : size;
  })
});
