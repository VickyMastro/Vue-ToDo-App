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
import NotesRepository from '@/repositories/NotesRepository'
import { mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    cancel() {
      this.$modal.hideAll();
    },

    async save() {
      if (!this.formData.desc || !this.formData.title) {
        this.$toast.warning("Completa todos los campos para crear la nota", {
          position: "top-right",
          duration: 3000,
        });
      } else {
        try {
          await NotesRepository.createNote({...this.formData, date: new Date(), userUID: this.getUser.uid});

          this.$toast.success("La nota fue creada con éxito", {
          position: "top-right",
          duration: 3000,
        });
        // vuelvo a obtener notas para que muestre las nuevas
          const notesComponent = this.$root.$children[0].$children[1].$refs.noteRef
          notesComponent.actualizar()

        } catch (error) {
          this.$toast.error("No se pudo crear la nota", {
            position: "top-right",
            duration: 3000,
          });
        }        
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

<style scoped>
.modal-container {
  height: 100%;
  background: linear-gradient(43deg, #4158d0 0%, #c850c0 50%);
}
</style>