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
import NotesRepository from '@/repositories/NotesRepository'

export default {
  name: "EditNoteModal",
  props: ["id"],
  async mounted(){
    try {
      this.formData = await NotesRepository.getNote(this.id)
      
    } catch (error) {
      this.$toast.error("No se encontro la nota a editar", {
            position: "top-right",
            duration: 3000,
          });
      this.$modal.hideAll();
    }
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

    async save() {
      try {
          await NotesRepository.updateNote(this.id, this.formData);

          this.$toast.success("La nota fue editada con éxito", {
          position: "top-right",
          duration: 3000,
        });
        // vuelvo a obtener notas para actualice la/s que queda/n
          const notesComponent = this.$root.$children[0].$children[1].$refs.noteRef
          notesComponent.actualizar()

        } catch (error) {
          this.$toast.error("No se pudo editar la nota", {
            position: "top-right",
            duration: 3000,
          });
        }        
      this.$modal.hideAll();
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
.edit-container {
  height: 100%;
  background: linear-gradient(43deg, #4158d0 0%, #c850c0 50%);
}
</style>