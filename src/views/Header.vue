<template>
  <div>
    <nav class="container-nav navbar navbar-light">
      <div class="container-fluid justify-content-between">
        <router-link
          class="navbar-brand link-router"
          :to="{ name: 'Home' }"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Ir al inicio"
        >
          Home
          <img
            src="@/assets/home.png"
            alt="Icono de home"
            width="25"
            height="25"
            class="d-inline-block align-text-top"
          />
        </router-link>
        <router-link
          class="navbar-brand link-router"
          :to="{ name: 'EditUser' }"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Editar datos del usuario"
        >
          {{ userName }}
          <img
            :src="url"
            alt="Icono de usuario"
            width="25"
            height="25"
            class="d-inline-block align-text-top"
          />
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      avatar: "user.png",
    };
  },
  computed: {
    ...mapGetters(["getUser"]),

    userName() {
      return !this.getUser ? "" : this.getUser.displayName;
    },

    url() {
      let images = require.context("../assets/");
      return !this.getUser || !this.getUser?.photoURL
        ? images(`./${this.avatar}`)
        : images(`./${this.getUser.photoURL}`);
    },
  },
};
</script>

<style scoped>
.link-router {
  color: rgba(0, 0, 0, 0.568) !important;
  text-decoration: none;
}
.container-nav {
  background-color: inherit;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>