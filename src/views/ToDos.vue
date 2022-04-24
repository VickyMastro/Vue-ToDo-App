<template>
  <div class="container">
    <div class="row ">
      <CardToDo v-for="toDo in getToDos" :key="toDo.id" :toDo="toDo" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardToDo from "../components/todos/CardToDo.vue";

export default {
  name: "ToDos",
  computed: {
    ...mapGetters(["getToDos"]),
  },
  components: {
    CardToDo,
  },
};
</script>
