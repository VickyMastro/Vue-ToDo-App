<template>
  <div class="edit-container">
    <ToDoForm :formData="formData" @setValue="setValue">
      <div class="d-flex justify-content-around">
        <button class="btn-grad" type="button" @click="cancel">Cancelar</button>

        <button class="btn-grad" type="button" @click="save">Editar</button>
      </div>
    </ToDoForm>
  </div>
</template>

<script>
import ToDoForm from "./ToDoForm.vue";

export default {
  name: "EditToDoModal",
  props: ["id"],
  mounted(){
    this.formData = this.toDoToEdit
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
      this.$store.dispatch("editToDo", {
        desc: this.formData.desc,
        date: this.formData.date,
        id: this.id,
      });
      this.$modal.hideAll();
    },

    setValue(name, value) {
      this.formData[name] = value;
    },
  },

  computed: {
    toDoToEdit() {
      return this.$store.getters.getToDoId(this.id);
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