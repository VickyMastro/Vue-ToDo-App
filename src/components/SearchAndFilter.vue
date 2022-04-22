// filtros: prioridad, fecha, completo o incompleto
<template>
  <div>
    <div class="row mt-3">
      <div
        class="
          col-sm-12 col-md-6
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <input
          type="text"
          class="search-input mx-4"
          v-model="text"
          placeholder="Buscar nota"
        />

        <button class="btn-grad" style="cursor: not-allowed !important;">
          <img
            src="../assets/filter.png"
            alt="Boton para filtrar"
            width="20px"
            height="20px"
          />
        </button>
      </div>

      <div
        class="col-sm-12 col-md-4 d-flex justify-content-center"
        v-if="!isMobile"
      >
        <select
          class="form-select d-flex btn-grad"
          v-model="optionSelect"
          aria-label="Default select example"
        >
          <option hidden value="">Nueva/o</option>
          <option value="nota">Nota</option>
          <option value="toDo">ToDo</option>
        </select>
      </div>

      <div v-else>
        <button class="btn-phone" @click="options">
          <img
            src="../assets/mas.png"
            alt="Boton para agregar una nota"
            width="20px"
            height="20px"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CreateNoteModal from "@/components/notes/CreateNoteModal.vue";
import CreateToDoModal from "@/components/todos/CreateToDoModal.vue";
import ModalOptions from "@/components/ModalOptions.vue";

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
      optionSelect: "",
    };
  },
  watch: {
    optionSelect(newValue) {
      if (newValue === "nota") {
        this.openModalNota();
      }
      if (newValue === "toDo") {
        this.openModalToDo();
      }
      this.optionSelect = "";
    },

    text(newValue){
      this.$store.dispatch("addSearchFilter", newValue);
    },
  },
  methods: {
    openModalNota() {
      this.$modal.show(CreateNoteModal, null, {
        adaptive: true,
        width: "90%",
        maxWidth: 776,
        height: "80%",
      });
    },
    openModalToDo() {
      this.$modal.show(CreateToDoModal, null, {
        adaptive: true,
        width: "90%",
        maxWidth: 776,
        height: "80%",
      });
    },
    options() {
      this.$modal.show(ModalOptions, null, {
        adaptive: true,
        width: "250px",
        height: "53px",
        styles: "background: rgba(0, 0, 0, 0.07); border-radius: 8px",
      });
    },
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

.btn-grad {
  margin: 10px;
  padding: 12px 30px;

  text-align: center;

  background: inherit;
  background-size: 200% auto;

  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.btn-phone {
  height: 64px;
  width: 64px;
  margin: 10px;
  background: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);

  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  position: fixed;
  bottom: 24px;
  left: 24px;

  z-index: 1;
}
</style>