import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.modelFor("library").get("books").findBy("id", parseInt(params.book_id, 10));
  },

  setupController(controller, model) {
    controller.set("model", model);
    this.controllerFor("menu").set("pages", model.get("pages"));
  }
});
