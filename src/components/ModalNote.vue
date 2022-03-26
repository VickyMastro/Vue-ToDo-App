<template>
  <div class="modal-note-container">
    <div class="d-flex justify-content-around">
      <span>Crear nota</span>
      <span style="font-size: 20px; padding-top: 23px">{{ date }} </span>
    </div>

      <!-- TITLE -->
    <div class="row" style="padding: 5px 30px">
      <div class="col-sm-12 col-md-6">
        <label for="tituloNota1" class="form-label">Titulo</label>
        <input
          type="text"
          class="form-control title-input"
          id="tituloNota1"
          placeholder="Ej.:Compras"
          v-model="title"
        />
      </div>

      <!-- DESC -->
      <div class="col-sm-12 col-md-12 my-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Descripcion de Nota</label
        >
        <textarea
          class="form-control"
          style="max-height: 35vh; min-height: 35vh"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Ej.:Pan, sal, agua"
          v-model="description"
        ></textarea>
      </div>

      <!-- BOTONES -->
      <div class="d-flex justify-content-around">
        <button class="btn-grad" type="button" @click="cancelModal">
          Cancelar
        </button>

        <button class="btn-grad" type="button" @click="saveModal">
          Guardar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "ModalNote",
  mounted() {
    this.date = moment().format("DD/MM/YYYY");
  },

  data() {
    return {
      title: "",
      description: "",
      date: "",
    };
  },
  
  methods: {
    cancelModal() {
      this.$modal.hideAll();
    },

    saveModal() {
      if (!this.description || !this.title) {
        alert("Completa todos los campos");

      } else {
        this.$store.dispatch("addNote", {
          title: this.title,
          description: this.description,
          date: this.date,
        });
        this.$modal.hideAll();
      }
    },
  },
};
</script>

<style scoped>
.modal-note-container {
  height: 100%;
  background: linear-gradient(43deg, #4158d0 0%, #c850c0 50%);
  /* color: white; */
}

span {
  padding-top: 10px;
  text-align: center;
  font-size: 35px;
}

textarea {
  height: 35vh;
}

.title-input,
textarea {
  padding: 12px 30px;

  background: inherit;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  border: none;
  outline: none;
  border-radius: 10px;
}

.title-input::placeholder {
  color: rgba(0, 0, 0, 0.568);
}

/* EL FOCUS ES PROBLEMA DE LA CLASE FORM-CONTROL DE BOOTSTRAP */
.title-input:focus {
  background: inherit;
  border: none;
  outline: none;
}

textarea::placeholder {
  color: rgba(0, 0, 0, 0.568);
}

textarea:focus {
  background: inherit;
  border: none;
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