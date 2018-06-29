import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return {  libId: params.report,
             listId: params.list,
             pageId: params.page };
  }
});
