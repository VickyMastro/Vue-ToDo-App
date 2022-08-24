import Vue from "vue";
import Vuex from "vuex";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  updateEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  signOut,
} from "firebase/auth";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // props que voy a compartir
    searchFilter: "",
    user: null,
  },

  getters: {
    // funciones que devuelven valor/es del estado
    getUser(state) {
      return state.user;
    },
  },

  mutations: {
    // func que modifican el estado
    setUser(state, user) {
      state.user = user;
    },
  },

  actions: {
    // funcion que hace algo antes de hacer una mutación
    getCurrentUser() {
      return new Promise((resolve, reject) => {
        const unsuscribe = auth.onAuthStateChanged(
          (user) => {
            unsuscribe();
            resolve(user);
          },
          () => {
            reject();
          }
        );
      });
    },

    async doLogin(context, { email, password }) {
      await signInWithEmailAndPassword(auth, email, password);
      context.commit("setUser", auth.currentUser);
    },

    async doSignOut(context) {
      await signOut(auth);
      context.commit("setUser", null);
    },

    async doUpdateProfile(context, { name, avatar }) {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: avatar,
      });
      context.commit("setUser", auth.currentUser);
    },

    async doUpdateEmail(context, email) {
      await updateEmail(auth.currentUser, email);
      context.commit("setUser", auth.currentUser);
    },
    
    async doUpdatePassword(context, newPassword){
      await updatePassword(auth.currentUser, newPassword);
      context.commit("setUser", auth.currentUser);
    },

    async reauthenticate(context, {email, password, newEmail, newPassword}){
      const credential = EmailAuthProvider.credential(email, password);
      await reauthenticateWithCredential(auth.currentUser, credential);

      if (newEmail) {
        context.dispatch('doUpdateEmail', newEmail)
      } if (newPassword && newPassword!=='********') {
        context.dispatch('doUpdatePassword', newPassword)
      }
    },

    async doRegister(context, { name, email, password }) {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: "user.png",
      });
      context.commit("setUser", auth.currentUser);
    },

    isLogin(context) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          context.commit("setUser", user);
        } else {
          context.commit("setUser", null);
        }
      });
    },
  },
});

export default store;
store.dispatch("isLogin");
