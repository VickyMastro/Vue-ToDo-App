import Vue from "vue";
import Vuex from "vuex";
import notesModule from "./modules/notesModule";
import toDosModule from "./modules/toDosModule"

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // props que voy a compartir
    searchFilter: "",
  },

  getters: {
    // funciones que devuelven valor/es del estado
    
  },

  mutations: {
    // func que modifican el estado
    setText(state, text) {
      state.searchFilter = text;
    },
  },

  actions: {
    // funcion que hace algo antes de hacer una mutación
    addSearchFilter(context, text) {
      context.commit("setText", text);
    },

  },

  modules: {
    notesModule,
    toDosModule
  },
});

export default store;
store.dispatch("passNotes");
store.dispatch("passToDos");
