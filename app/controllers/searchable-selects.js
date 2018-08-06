import Controller from '@ember/controller';
import { A as a } from '@ember/array';

export default Controller.extend({
  TEDevents: a([
    {
      id: 1,
      title: 'TED2015',
      keywords: ''
    },
    {
      id: 2,
      title: 'TEDxNASA',
      keywords: '',
      isTEDxEvent: true
    },
    {
      id: 3,
      title: 'TED2014',
      keywords: ''
    },
    {
      id: 4,
      title: 'TEDGlobal 2014',
      keywords: ''
    },
    {
      id: 5,
      title: 'TEDxNewYork',
      keywords: 'NYC',
      isTEDxEvent: true
    },
    {
      id: 6,
      title: 'TEDGlobal 2013',
      keywords: ''
    },
    {
      id: 7,
      title: 'TED2013',
      keywords: ''
    }
  ]),

  talkTags: a([
    {
      id: 1,
      tag: 'funny'
    },
    {
      id: 2,
      tag: 'inspiring'
    }
  ]),

  TEDspeakers: a([
    {
      id: 1,
      firstName: 'Ken',
      lastName: 'Jennings',
      fullName: 'Ken Jennings'
    },
    {
      id: 2,
      firstName: 'Amy',
      lastName: 'Cuddy',
      fullName: 'Amy Cuddy'
    },
    {
      id: 3,
      firstName: 'Ken',
      lastName: 'Robinson',
      fullName: 'Ken Robinson'
    },
    {
      id: 4,
      firstName: 'Susan',
      lastName: 'Cain',
      fullName: 'Susan Cain'
    },
    {
      id: 5,
      firstName: 'Kelly',
      lastName: 'McGonigal',
      fullName: 'Kelly McGonigal'
    },
    {
      id: 6,
      firstName: 'Amy',
      lastName: 'Webb',
      fullName: 'Amy Webb'
    }
  ])
});
