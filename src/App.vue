<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

// header es ahora mi nav en todas las vistas
<script>
import Header from './views/Header.vue'
export default {
  components: {
    Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.568);
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  height: 100vh;
  overflow-x: hidden;
}
</style>
