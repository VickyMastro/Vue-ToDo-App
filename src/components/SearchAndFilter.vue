// filtros: prioridad, fecha, completo o incompleto
<template>
  <div>
    <h2 class="text-center pt-3 fs-1" style="text-decoration: underline;">
      Notas
    </h2>
    <div class="row">
      <div class="col-sm-12 col-md-8 align-center d-flex align-items-center">
        <input
          type="text"
          class="search-input mx-4 "
          v-model="text"
          placeholder="Buscar nota"
        />

        <button class="btn-grad">
          <img src="../assets/filter.png" alt="" width="20px" height="20px" />
        </button>
        <!-- <input type="button" value="+ filtros" class="btn-grad"/> -->
      </div>

      <div class="col-sm-12 col-md-4" v-if="!isMobile">
        <button class="d-flex btn-grad">
          <router-link :to="{name: 'Notes'}" class="create-button">
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
      text: "",
      isMobile: false,
    };
  },
};
</script>

<style scoped>

.search-input {
  width: 200px;
  padding: 12px 30px;

  background: inherit;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  border: none;
  outline: none;
  border-radius: 10px;
}

.search-input::placeholder {
  color: rgba(0, 0, 0, 0.568);
}

.create-button {
  font-size: 15px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.568);
}

.btn-grad {
  margin: 10px;
  padding: 12px 30px;

  text-align: center;
  text-transform: uppercase;

  background: inherit;
  background-size: 200% auto;

  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>