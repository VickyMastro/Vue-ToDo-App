<template>
  <div class="container">
    <div class="row ">
      <CardToDo v-for="toDo in toDos" :key="toDo.id" :toDo="toDo" />
    </div>
  </div>
</template>

<script>
import CardToDo from "../components/todos/CardToDo.vue";
import ToDosRepository from "../repositories/ToDosRepository"
import { mapGetters } from "vuex";

export default {
  name: "ToDos",
  async mounted(){
   await this.actualizar()
  },
  props: ['filters'],
  data(){
    return {
      toDos: []
    }
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    async actualizar(){
      try {
        this.toDos = await ToDosRepository.getToDos(this.getUser, this.filters)
        this.$emit('countToDos', 'toDos', this.toDos.length > 0)
      } catch (error) {
        this.$toast.error('No se encontraron toDos',{
          position: 'top-right',
          duration: 3000,
        });
      }},
  },
  watch: {
    async filters(){
      await this.actualizar()
    }
  },
  components: {
    CardToDo,
  },
};
</script>
