export default {
    state: ({
      allToDos: [],
    }),
  
    getters: {
      getToDos(state, getters, rootState) {
          const filterToDos = state.allToDos.filter((toDo) => {
            return (
              toDo.desc.includes(rootState.searchFilter) ||
              toDo.date.includes(rootState.searchFilter) 
            );
          });
          
          if (!rootState.searchFilter) {
            return state.allToDos;  
          } else {
            return filterToDos
          }
        },
    
        getToDoId: (state) => (id) => {
          return state.allToDos.find((toDo) => toDo.id === id);
        },
    },
  
    mutations: {
        setToDo(state, toDo) {
          state.allToDos.push(toDo);
        },
    
        setToDos(state, toDos) {
          state.allToDos = toDos;
        },
    },
    actions: {
      // desestructuracion de context. ej:
      // context = {state, commit, rootState}
      deleteToDo(context, id) {
          const toDos = context.state.allToDos;
          const index = toDos.findIndex((t) => t.id === id);
    
          toDos.splice(index, 1);
    
          context.commit("setToDos", toDos);
    
          const newToDos = JSON.stringify(context.state.allToDos);
          window.localStorage.setItem("toDos", newToDos);
        },
    
        editToDo(context, toDo) {
          const toDos = context.state.allToDos;
          const index = toDos.findIndex((n) => n.id === toDo.id);
    
          toDos.splice(index, 1, toDo);
    
          context.commit("setToDos", toDos);
    
          const newToDos = JSON.stringify(context.state.allToDos);
          window.localStorage.setItem("toDos", newToDos);
        },

        // context: permite acceder al estado y tiene distintas props/methods 
        //  como state, dispatch o commit entre otros
        addToDo(context, toDo) {
          const toDos = context.state.allToDos;
          const lastToDo = toDos[toDos.length - 1];
    
          toDo.id = toDos.length === 0 ? 1 : lastToDo.id + 1;
          toDo.isDone = false
    
          context.commit("setToDo", toDo);
    
          const newtoDos = JSON.stringify(context.state.allToDos);
          window.localStorage.setItem("toDos", newtoDos);
        },
  
        passToDos(context) {
          let toDos = JSON.parse(window.localStorage.getItem("toDos"));
          toDos = toDos ?? [];
    
          context.commit("setToDos", toDos);
        },
    },
  
  };
  