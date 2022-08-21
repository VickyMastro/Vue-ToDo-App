// filtros: prioridad, fecha, completo o incompleto
<template>
  <div class="row mt-3">
    <div
      class="col-sm-12 col-md-6 d-flex align-items-center justify-content-center"
    >
      <!-- ---------------------- input buscador ----------------------->
      <input
        type="text"
        class="search-input mx-4"
        
        v-model="search"
        placeholder="Buscar..."
      />
      <!-- ---------------------- boton filtros ----------------------->
      <button
        class="btn-grad"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <img
          src="../assets/filter.png"
          alt="Boton para filtrar"
          width="20px"
          height="20px"
        />
      </button>
    </div>
    <!-- ---------------------- boton nueva nota/todo ----------------------->
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
    <!-- ---------------------- desplegable con botones ----------------------->
    <div class="collapse col-md-12 mt-2" id="collapseExample">
      <div class="row d-flex justify-content-center">
        <div class="col-8 col-md-3 col-lg-2 pt-2 mt-1">
          <Calendar :initialDate="date" @setDate="setDate" />
        </div>
        <!-- --------------------------------------------->
        <div class="col-8 col-md-3 col-lg-2 pt-2">
          <select
            class="form-select filter-input"
            @change="applyFilters"
            v-model="listOption"
            aria-label="Default select example"
          >
            <option hidden value="">Filtro por notas o toDos</option>
            <option value="all">Notas y ToDos</option>
            <option value="nota">Notas</option>
            <option value="toDo">ToDos</option>
          </select>
        </div>
        <!-- --------------------------------------------->
        <div class="col-8 col-md-3 col-lg-2 pt-2">
          <select
            class="form-select filter-input"
            @change="applyFilters"
            v-model="isComplete"
            aria-label="Default select example"
            v-show="listOption==='toDo'"
          >
            <option hidden value="">ToDo completo o incompleto</option>
            <option :value="true">Completos</option>
            <option :value="false">Incompletos</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateNoteModal from "@/components/notes/CreateNoteModal.vue";
import CreateToDoModal from "@/components/todos/CreateToDoModal.vue";
import PhoneModalOptions from "@/components/PhoneModalOptions.vue";
import Calendar from "../components/Calendar.vue";
import moment from "moment";

export default {
  name: "SearchAndFilter",
  mounted() {
    if (document.documentElement.clientWidth < 401) {
      this.isMobile = true;
    }
  },
  data() {
    return {
      isMobile: false,
      optionSelect: "",

      listOption: "",
      date: "",
      isComplete: "",
      search: "",
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
    search(){
      this.applyFilters()
    }
  },
  methods: {
    setDate(date) {
      this.date = date;
      this.applyFilters()
    },

    applyFilters() {
      let formatDate = "";
      if (this.date) {
        formatDate = moment(this.date).format("YYYY-MM-DD");
      } 
      this.$emit("filters", {
        search: this.search,
        listOption: this.listOption,
        date: formatDate,
        isComplete: this.isComplete,
      });
    },
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
      this.$modal.show(PhoneModalOptions, null, {
        adaptive: true,
        width: "250px",
        height: "53px",
        styles: "background: rgba(0, 0, 0, 0.07); border-radius: 8px",
      });
    },
  },
  components: {
    Calendar,
  },
};
</script>

<style scoped>
.filter-input {
  background-color: inherit;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
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
