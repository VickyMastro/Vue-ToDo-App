<template>
  <div class="container">
    <div class="row ">
      <CardNote v-for="note in getNotes" :key="note.id" :note="note" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardNote from "../components/notes/CardNote.vue";

export default {
  name: "Notes",
  computed: {
    ...mapGetters(["getNotes"]),
  },
  components: {
    CardNote,
  },
};
</script>
