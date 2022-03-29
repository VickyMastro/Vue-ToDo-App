<template>
  <div class="edit-container">
    <NoteForm :datos="formData" @setValue="setValue">
      <div class="d-flex justify-content-around">
        <button class="btn-grad" type="button" @click="cancel">Cancelar</button>

        <button class="btn-grad" type="button" @click="save">Editar</button>
      </div>
    </NoteForm>
  </div>
</template>

<script>
import NoteForm from "./NoteForm.vue";
import moment from "moment";


export default {
  name: "EditNoteModal",
  props: ["id"],
  mounted(){
      this.formData = this.noteToEdit
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
      this.$store.dispatch("editNote", {
        title: this.formData.title,
        desc: this.formData.desc,
        date: this.formData.date,
        id: this.id,
      });
      this.$modal.hideAll();
    },

    setValue(name, value) {
        console.log("value");
      this.formData[name] = value;
    },
  },

  computed: {
    noteToEdit() {
      return this.$store.getters.getNoteId(this.id);
    },
  },

  components: {
    NoteForm,
  },
};
</script>

<style>
.edit-container {
  height: 100%;
  background: linear-gradient(43deg, #4158d0 0%, #c850c0 50%);
}
</style>