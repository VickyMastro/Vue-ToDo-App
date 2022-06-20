<template>
  <div>
    <nav class="container-nav navbar navbar-light">
      <div class="container-fluid justify-content-between">
        <router-link class="navbar-brand link-router" :to="{ name: 'Home' }">
          Home
          <img
            src="@/assets/home.png"
            alt="Icono de usuario"
            width="25"
            height="25"
            class="d-inline-block align-text-top"
          />
        </router-link>
        <router-link class="navbar-brand link-router" :to="{ name: 'EditUser' }">
          User
          <img
            src="@/assets/user.png"
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
export default {
  name: "Header",
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