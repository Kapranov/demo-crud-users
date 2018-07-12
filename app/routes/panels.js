import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  panelActions: service(),

  actions: {
    expandAll() {
      this.get('panelActions').openAll('group1');
    },

    collapseAll() {
      this.get('panelActions').closeAll('group1');
    },

    togglePanelA() {
      this.get('panelActions').toggle('panelA');
    },

    togglePanelB() {
      this.get('panelActions').toggle('panelB');
    }
  }
});
