// filtros: prioridad, fecha, completo o incompleto
<template>
  <div>
    <h2 class="text-center pt-3">Notas</h2>
    <div class="row">
      <div class="col-sm-12 col-md-8 align-center d-flex align-items-center">
        <input
          type="text"
          class="search-input mx-4"
          v-model="texto"
          placeholder="Buscar nota"
        />
        <input type="button" value="+ filtros" />
      </div>

      <div class="col-sm-12 col-md-4" v-if="!isMobile">
        <button class="d-flex align-items-center rounded-pill  ">
          <router-link to="/notes" class="create-button ">
            Nota Nueva 
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchAndFilter",
  mounted() {
    if (document.documentElement.clientWidth < 401) {
      this.isMobile = true;
    }
  },
  data() {
    return {
      texto: "",
      isMobile: false,
    };
  },
};
</script>

<style scoped>
.search-input {
  width: 200px;
}
.create-button {
  color: black;
  font-size: 20px;
  text-decoration: none;
}
</style>