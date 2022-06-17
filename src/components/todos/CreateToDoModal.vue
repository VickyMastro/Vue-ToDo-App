<template>
  <div class="modal-container">
    <ToDoForm :formData="formData" @setValue="setValue">
      <div class="d-flex justify-content-around">
        <button class="btn-grad" type="button" @click="cancel">Cancelar</button>

        <button class="btn-grad" type="button" @click="save">Guardar</button>
      </div>
    </ToDoForm>
  </div>
</template>

<script>
import ToDoForm from "./ToDoForm.vue";
import ToDosRepository from "@/repositories/ToDosRepository";

export default {
  name: "CreateToDoModal",
  mounted() {
    this.formData.date = new Date();
  },
  data() {
    return {
      formData: {
        desc: "",
        date: "",
        isDone: false,
      },
    };
  },
  methods: {
    cancel() {
      this.$modal.hideAll();
    },
    
    async save() {
      if (!this.formData.desc || !this.formData.date) {
        this.$toast.warning('Completa todos los campos para crear el toDo',{
        position: 'top-right',
        duration: 3000
      })

      } else {
        try {
          await ToDosRepository.createToDo(this.formData)

          this.$toast.success('El toDo fue creado con éxito',{
          position: 'top-right',
          duration: 3000
          })

          const toDosComponent = this.$root.$children[0].$children[1].$refs.toDoRef
          toDosComponent.actualizar()

        } catch (error) {
          this.$toast.error('No se pudo crear el toDo',{
          position: 'top-right',
          duration: 3000
          })
        }
        this.$modal.hideAll();
      }
    },

    setValue(name, value) {
      this.formData[name] = value;
    },
 },
  components: {
    ToDoForm,
  },
};
</script>

<style scoped>
.modal-container{
  height: 100%;
  background: linear-gradient(43deg, #c850c0 20%, #ffcc70 80%);

}
</style>