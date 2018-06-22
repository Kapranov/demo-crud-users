import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    var data = this.modelFor("libraries").findBy("id", parseInt(params.library_id, 10));
    return data;
  },

  setupController(controller, model) {
    controller.set("model", model);
    this.controllerFor("menu").set("books", model.get("books"));
    this.controllerFor("menu").set("pages", null);
  }
});
