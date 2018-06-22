import Route   from '@ember/routing/route';
//import { hash } from 'rsvp';
//import Page    from "../models/page";
//import Book    from "../models/book";
//import Library from "../models/library";

//function findData() {
  //var libData = [];

  //var page1 = this.store.createRecord(Page, {name: "page1"});
  //var page2 = this.store.createRecord(Page, {name: "page2"});
  //var page3 = this.store.createRecord(Page, {name: "page3"});
  //var page4 = this.store.createRecord(Page, {name: "page4"});

  //var book1 = this.store.createRecord(Book, {name: "book1", pages: []});
  //book1.get("pages").pushObject(page1);

  //var book2 = this.store.createRecord(Book, {name: "book2", pages: []});
  //book2.get("pages").pushObject(page2);

  //var book3 = this.store.createRecord(Book, {name: "book3", pages: []});
  //book3.get("pages").pushObject(page3);
  //book3.get("pages").pushObject(page4);

  //var lib1 = this.store.createRecord(Library, {name: "lib1", books: []});
  //lib1.get("books").pushObject(book1);
  //lib1.get("books").pushObject(book3);

  //var lib2 = this.store.createRecord(Library, {name: "lib2", books: []});
  //lib2.get("books").pushObject(book2);

  //libData.pushObject(lib1);
  //libData.pushObject(lib2);

  //return libData;
//}

export default Route.extend({
  //model() {
    //return findData();

    //return hash({
    //  libraries: this.store.findAll('library'),
    //  books: this.store.findAll('book'),
    //  pages: this.store.findAll('page')
    //});

  //},

  //setupController(controller, model) {
  //  this.controllerFor("menu").set("libs",  model)
  //  this.controllerFor("menu").set("books", null)
  //  this.controllerFor("menu").set("pages", null)

  //  this._super(controller, model);
  //}
});
