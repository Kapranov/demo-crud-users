import Utility from 'demo-crud-users/utils/utility';

export function initialize(appInstance) {
  appInstance.register(
    'utility:main', Utility, { singleton: true, instantiate: true });
}

export default {
  name: 'utility',
  initialize: initialize
};
