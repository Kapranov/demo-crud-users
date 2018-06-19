import Component from '@ember/component';

export default Component.extend(Droplet, {
  url: location.origin + '/upload'
  //url: 'http://localhost:4200'
  //new_location: "http://localhost:8000/uploads",
  //url: alert('')
});
