<template>
  <div class="container">
    <div class="row">
      <CardNote v-for="note in notes" :key="note.id" :note="note" />
    </div>
  </div>
</template>

<script>
import CardNote from "../components/notes/CardNote.vue";
import NotesRepository from "../repositories/NotesRepository";
import { mapGetters } from "vuex";
// importar el repositorio entero y ejecutar su metodo

export default {
  name: "Notes",
  async mounted() {
    await this.actualizar();
  },
  data() {
    return {
      notes: [],
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    async actualizar() {
      try {
        this.notes = await NotesRepository.getNotes(this.getUser);
      } catch (error) {
        this.$toast.error("No se encontraron notas", {
          position: "top-right",
          duration: 3000,
        });
      }
    },
  },
  components: {
    CardNote,
  },
};
</script>
