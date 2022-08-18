<template>
  <div class="edit-container">
    <ToDoForm :formData="formData" :minDate="minDate" @setValue="setValue">
      <div class="d-flex justify-content-around">
        <button class="btn-grad" type="button" @click="cancel">Cancelar</button>

        <button class="btn-grad" type="button" @click="save">Editar</button>
      </div>
    </ToDoForm>
  </div>
</template>

<script>
import ToDoForm from "./ToDoForm.vue";
import ToDosRepository from "@/repositories/ToDosRepository";

export default {
  name: "EditToDoModal",
  props: ["id"],
  async mounted(){
    try {
      this.formData = await ToDosRepository.getToDo(this.id)
      this.minDate = this.formData.date
      
    } catch (error) {
      this.$toast.error("No se encontro el toDo a editar", {
            position: "top-right",
            duration: 3000,
          });
      this.$modal.hideAll();
    }
  },
  data() {
    return {
      minDate: "",
      formData: {
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
        await ToDosRepository.updateToDo(this.id, this.formData)

        this.$toast.success("El toDo fue editado con éxito", {
          position: "top-right",
          duration: 3000,
        });

        const toDosComponent = this.$root.$children[0].$children[1].$refs.toDoRef
        toDosComponent.actualizar()

      } catch (error) {
        this.$toast.error('No se pudo editar el toDo',{
          position: 'top-right',
          duration: 3000
          })
      }
      this.$modal.hideAll();
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

<style>
.edit-container {
  height: 100%;
  background: linear-gradient(43deg, #4158d0 0%, #c850c0 50%);
}
</style>