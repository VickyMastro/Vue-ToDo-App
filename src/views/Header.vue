<template>
  <div>
    <nav class="container-nav navbar navbar-light">
      <div class="container-fluid justify-content-end">
        <router-link class="navbar-brand" :to="{ name: 'EditUser' }">
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
a {
  color: black;
  text-decoration: none;
}
.container-nav {
  background-color: inherit;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.link:hover {
  color: black;
}
</style>