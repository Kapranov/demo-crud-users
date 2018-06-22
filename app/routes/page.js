import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.find('page');
    //return this.modelFor("book").get("pages").findBy("id", parseInt(params.page_id, 10));
  }
});
