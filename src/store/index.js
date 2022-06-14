import Vue from "vue";
import Vuex from "vuex";
import toDosModule from "./modules/toDosModule";
import {auth} from '../firebase';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // props que voy a compartir
    searchFilter: "",
    user: null,
  },

  getters: {
    // funciones que devuelven valor/es del estado
    
  },

  mutations: {
    // func que modifican el estado
    setText(state, text) {
      state.searchFilter = text;
    },

    setUser(state, user){
      state.user = user
    }

  },

  actions: {
    // funcion que hace algo antes de hacer una mutación
    addSearchFilter(context, text) {
      context.commit("setText", text);
    },

    getCurrentUser(){
      return new Promise((resolve, reject)=>{
        const unsuscribe = auth.onAuthStateChanged(
          user=> {
            unsuscribe();
            resolve(user);
          },
          () => {
            reject();
          }
        )
      })
    },

    async doLogin(context, {email, password}){
      await signInWithEmailAndPassword(auth, email, password)
      context.commit('setUser', auth.currentUser)
    },

    async doRegister(context, {name, email, password}) {
      await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser, {displayName: name})
      context.commit('setUser', auth.currentUser)
    },

    isLogin(context){
      onAuthStateChanged(auth, user=> {
        if(user){
          context.commit('setUser', user)
        } else{
          context.commit('setUser', null)
        }
      })
    }
  },

  modules: {
    toDosModule
  },
});

export default store;
store.dispatch("isLogin");

store.dispatch("passToDos");
