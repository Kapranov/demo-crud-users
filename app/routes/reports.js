import Route from '@ember/routing/route';

let participants = [
  {
    id: 1,
    name: "Ofer Aharony",
    institute: "Weizmann Institute"
  },
  {
    id: 2,
    name: "Hirosi Ooguri",
    institute: "Caltech & Kavli IPMU"
  },
  {
    id: 3,
    name: "Koji Hashimoto",
    institute: "Osaka University"
  }
];

export default Route.extend({
  model() {
    return participants;
  }
});
