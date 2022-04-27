<template>
  <div>
    <nav class="container-nav navbar navbar-expand-lg navbar-light">
      <div class="container-fluid justify-content-end">
        <button
          class="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav d-flex">
            <div class="router-links">
              <router-link to="/">Home</router-link>
            </div>
            <div class="router-links">
              <router-link :to="{ name: 'Notes' }">Notes</router-link>
            </div>
            <div class="router-links">
              <router-link :to="{ name: 'ToDos' }">ToDos</router-link>
            </div>
            <div class="router-links justify-content-end">
              <router-link :to="{ name: 'User' }">User</router-link>
            </div>
          </div>
        </div>
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
.router-links {
  width: auto;
  text-align: center;
  padding-bottom: 10px;
  padding-right: 50px;
}
</style>