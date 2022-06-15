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

export default {
  name: "ToDos",
  async mounted(){
   await this.actualizar()
  },
  data(){
    return {
      toDos: []
    }
  },
  methods: {
    async actualizar(){
      try {
      this.toDos = await ToDosRepository.getToDos()
    } catch (error) {
      this.$toast.error('No se encontraron toDos',{
        position: 'top-right',
        duration: 3000
      })
    }},
  },
  components: {
    CardToDo,
  },
};
</script>
