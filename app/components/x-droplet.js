import Component from '@ember/component';

export default Component.extend(Droplet, {
  url: location.origin + '/upload'
});
