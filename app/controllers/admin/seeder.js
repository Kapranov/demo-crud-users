import Controller from '@ember/controller';
import { get } from '@ember/object';
import { all } from 'rsvp';
import Faker from "faker";

export default Controller.extend({
  actions: {
    generatePatients(volume) {
      this.set('generatePatientsInProgress', true);

      const counter = parseInt(volume);
      let savedPatients = [];

      for (let i = 0; i < counter; i++) {
        savedPatients.push(this._saveRandomPatient());
      }

      all(savedPatients)
        .then(() => {
          this.set('generatePatientsInProgress', false);
          this.set('patientDone', true)
        });
    },

    generateEditors(volume) {
      this.set('generateEditorsInProgress', true);

      const counter = parseInt(volume);
      let savedEditors = [];

      for (let i = 0; i < counter; i++) {
        savedEditors.push(this._saveRandomEditor());
      }

      all(savedEditors)
        .then(() => {
          this.set('generateEditorsInProgress', false);
          this.set('editorDone', true)
        });

    },

    generateLibraries(volume) {
      this.set('generateLibrariesInProgress', true);

      const counter = parseInt(volume);
      let savedLibraries = [];

      for (let i = 0; i < counter; i++) {
        savedLibraries.push(this._saveRandomLibrary());
      }

      all(savedLibraries)
        .then(() => {
          this.set('generateLibrariesInProgress', false);
          this.set('libDone', true)
        });
    },

    generateBooksAndAuthors(volume) {
      this.set('generateBooksInProgress', true);

      const counter = parseInt(volume);
      let booksWithAuthors = [];

      for (let i = 0; i < counter; i++) {
        const books = this._saveRandomAuthor().then(newAuthor => this._generateSomeBooks(newAuthor));
        booksWithAuthors.push(books);
      }

      all(booksWithAuthors)
        .then(() => {
          this.set('authDone', true);
          this.set('generateBooksInProgress', false);
        });
    },


    deletePatients() {
      this.set('deletePatientsInProgress', true);
      this._destroyAll(get(this, 'patients'))
        .then(() => {
          this.set('patientDelDone', true);
          this.set('deletePatientsInProgress', false);
        });
    },

    deleteEditors() {
      this.set('deleteEditorsInProgress', true);
      this._destroyAll(get(this, 'editors'))
        .then(() => {
          this.set('editorDelDone', true);
          this.set('deleteEditorsInProgress', false);
        });
    },

    deleteLibraries() {
      this.set('deleteLibrariesInProgress', true);
      this._destroyAll(get(this, 'libraries'))
        .then(() => {
          this.set('libDelDone', true);
          this.set('deleteLibrariesInProgress', false);
        });
    },

    deleteBooksAndAuthors() {
      this.set('deleteBooksInProgress', true);

      const authors = get(this, 'authors');
      const books = get(this, 'books');

      this._destroyAll(authors)
        .then(() => this._destroyAll(books))
        .then(() => {
          this.set('authDelDone', true);
          this.set('deleteBooksInProgress', false);
        });
    }
  },

  // Private methods

  _saveRandomPatient() {
    return this.store.createRecord('patient').randomize().save();
  },

  _saveRandomEditor() {
    return this.store.createRecord('editor').randomize().save();
  },

  _saveRandomLibrary() {
    return this.store.createRecord('library').randomize().save();
  },

  _saveRandomAuthor() {
    return this.store.createRecord('author').randomize().save();
  },

  _generateSomeBooks(author) {
    const bookCounter = Faker.random.number(10);
    let books = [];

    for (let j = 0; j < bookCounter; j++) {
      const library = this._selectRandomLibrary();
      const bookPromise =
        this.store.createRecord('book')
          .randomize(author, library)
          .save()
          .then(() => author.save())
          .then(() => library && library.save());
      books.push(bookPromise)
    }

    return all(books);
  },

  _selectRandomLibrary() {
    const libraries = get(this, 'libraries');
    const size = libraries.get('length');
    const randomItem = Faker.random.number(size - 1);

    return libraries.objectAt(randomItem);
  },

  _destroyAll(records) {
    const recordsAreDestroying = records.map(item => item.destroyRecord());

    return all(recordsAreDestroying);
  }
});
