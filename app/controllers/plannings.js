import Controller from '@ember/controller';

export default Controller.extend({
  selected: new Date('2018-05-22'),
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  years: Array(...Array(80)).map((_, i) => `${i + 1940}`),

  actions: {
    changeCenter(unit, calendar, e) {
      let newCenter = calendar.center.clone()[unit](e.target.value);
      calendar.actions.changeCenter(newCenter);
    }
  }
});
