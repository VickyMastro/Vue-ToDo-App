export default {
  state: ({
    allNotes: [],
  }),

  getters: {
    getNotes(state, getters, rootState) {
        const filterNotes = state.allNotes.filter((note) => {
          return (
            note.title.includes(rootState.searchFilter) ||
            note.desc.includes(rootState.searchFilter)
          );
        });
        
        if (!rootState.searchFilter) {
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
    setNote(state, note) {
        state.allNotes.push(note);
      },
  
      setNotes(state, notes) {
        state.allNotes = notes;
      },
  },
  actions: {
    // desestructuracion de context. ej:
    // context = {state, commit, rootState}
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

};
