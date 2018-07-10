import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const store = this.store;

    return store.findAll('editor');
  },

  actions: {
    editFroala(editor) {
      editor.set('isEditing', true);
    },

    cancelFroalaEdit(editor) {
      editor.set('isEditing', false);
      editor.rollbackAttributes();
    },

    saveFroala(editor) {
      if (editor.get('isNotValid')) {
        return;
      }

      editor.set('isEditing', false);
      editor.save();
    }
  }
});
