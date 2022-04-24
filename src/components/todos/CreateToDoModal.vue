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
      },
    };
  },
  methods: {
    cancel() {
      this.$modal.hideAll();
    },
    
    save() {
      if (!this.formData.desc || !this.formData.date) {
        alert("Completa todos los campos");

      } else {
        this.$store.dispatch("addToDo", {
          desc: this.formData.desc,
          date: this.formData.date,
        });
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