<template>
  <div class="modal-container">
    <NoteForm :datos="formData" @setValue="setValue">
      <div class="d-flex justify-content-around">
        <button class="btn-grad" type="button" @click="cancel">Cancelar</button>

        <button class="btn-grad" type="button" @click="save">Guardar</button>
      </div>
    </NoteForm>
  </div>
</template>

<script>
import NoteForm from "./NoteForm.vue";
import moment from "moment";

export default {
  name: "CreateNoteModal",
  mounted() {
    this.formData.date = moment().format("DD/MM/YYYY");
  },
  data() {
    return {
      formData: {
        title: "",
        desc: "",
        date: "",
      },
    };
  },
  methods: {
    cancel() {
      this.$modal.hideAll();
    },
    
    save() {
      if (!this.formData.desc || !this.formData.title) {
        alert("Completa todos los campos");

      } else {
        this.$store.dispatch("addNote", {
          title: this.formData.title,
          desc: this.formData.desc,
          date: this.formData.date,
        });
        this.$modal.hideAll();
      }
    },

    setValue(name, value) {
      this.formData[name] = value;
    },
  },
  components: {
    NoteForm,
  },
};
</script>

<style>
.modal-container{
  height: 100%;
  background: linear-gradient(43deg, #4158d0 0%, #c850c0 50%);

}
</style>