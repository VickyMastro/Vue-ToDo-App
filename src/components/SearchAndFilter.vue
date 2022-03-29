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

        <button class="btn-grad">
          <img src="../assets/filter.png" alt="" width="20px" height="20px" />
        </button>
      </div>
      <!-- v-if="!isMobile" ESTO VA BAJO ESTA CLASE -->
      <div class="col-sm-12 col-md-4 d-flex justify-content-center">
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
    </div>
  </div>
</template>

<script>
import CreateNoteModal from "@/components/notes/CreateNoteModal.vue";
import ModalToDo from "@/components/ModalToDo.vue";

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
  },
  methods: {
    openModalNota() {
      this.$modal.show(CreateNoteModal, null, {
        adaptive: true,
        width:"90%",
        maxWidth: 776,
        height: "80%",
      });
    },
    openModalToDo() {
      this.$modal.show(ModalToDo, null, {
        adaptive: true,
        width: "90%",
        height: "90%",
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
</style>