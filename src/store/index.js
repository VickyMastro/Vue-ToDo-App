import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // props que voy a compartir
    allNotes: []
  },

  getters:{
    // funciones que devuelven valor/es del estado
    doneNotes(state) {
        return state.allNotes;
    },
  },

  mutations: {
    // func que modifican el estado
    setNote(state, note){
      state.allNotes.push(note)
    },

    setNotes(state, notes){
      state.allNotes = notes
    }
  },

  actions: {
    // funcion que hace algo antes de hacer una mutación
    addNote(context, note){
      context.commit('setNote', note)

      const newNotes= JSON.stringify(context.state.allNotes)
      window.localStorage.setItem('notes', newNotes)

    },
    
    passNotes(context){
      const notes= JSON.parse(window.localStorage.getItem('notes'))

      context.commit('setNotes', notes)
    }
  },

  modules: {
  }
})

export default store;
store.dispatch('passNotes')
