import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // props que voy a compartir
    allNotes: [],
    searchFilter: "",
  },

  getters: {
    // funciones que devuelven valor/es del estado
    getNotes(state) {
      const filterNotes = state.allNotes.filter((note) => {
        return (
          note.title.includes(state.searchFilter) ||
          note.desc.includes(state.searchFilter)
        );
      });

      if (!state.searchFilter) {
        return state.allNotes;  
      } else {
        return filterNotes
      }
    },

    getNoteId: (state) => (id) => {
      return state.allNotes.find((note) => note.id === id);
    },
  },

  mutations: {
    // func que modifican el estado
    setText(state, text) {
      state.searchFilter = text;
    },

    setNote(state, note) {
      state.allNotes.push(note);
    },

    setNotes(state, notes) {
      state.allNotes = notes;
    },
  },

  actions: {
    // funcion que hace algo antes de hacer una mutación
    addSearchFilter(context, text) {
      context.commit("setText", text);
    },

    deleteNote(context, id) {
      const notes = context.state.allNotes;
      const index = notes.findIndex((n) => n.id === id);

      notes.splice(index, 1);

      context.commit("setNotes", notes);

      const newNotes = JSON.stringify(context.state.allNotes);
      window.localStorage.setItem("notes", newNotes);
    },

    editNote(context, note) {
      const notes = context.state.allNotes;
      const index = notes.findIndex((n) => n.id === note.id);

      notes.splice(index, 1, note);

      context.commit("setNotes", notes);

      const newNotes = JSON.stringify(context.state.allNotes);
      window.localStorage.setItem("notes", newNotes);
    },

    addNote(context, note) {
      const notes = context.state.allNotes;
      const lastNote = notes[notes.length - 1];

      note.id = notes.length === 0 ? 1 : lastNote.id + 1;

      context.commit("setNote", note);

      const newNotes = JSON.stringify(context.state.allNotes);
      window.localStorage.setItem("notes", newNotes);
    },

    passNotes(context) {
      let notes = JSON.parse(window.localStorage.getItem("notes"));
      notes = notes ?? [];

      context.commit("setNotes", notes);
    },
  },

  modules: {},
});

export default store;
store.dispatch("passNotes");
