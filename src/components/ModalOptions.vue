<template>
  <div>
    <button class="btn-grad" @click="openModalNota">
      Nota
      <img
        src="../assets/escritura.png"
        alt="Boton para crear nota"
        width="20px"
        height="20px"
      />
    </button>
    <button class="btn-grad" @click="openModalToDo">
      ToDo
      <img
        src="../assets/checkbox.png"
        alt="Boton para crear todo"
        width="20px"
        height="20px"
      />
    </button>
  </div>
</template>

<script>
import CreateNoteModal from "../components/notes/CreateNoteModal.vue";
import ModalToDo from "../components/todos/ModalToDo.vue";

export default {
  name: "ModalOptions",
  methods: {
    openModalNota() {
      this.$modal.hideAll();
      this.$modal.show(CreateNoteModal, null, {
        adaptive: true,
        width: "90%",
        maxWidth: 776,
        height: "80%",
        styles: "background: inherit;",

      });
    },
    openModalToDo() {
      this.$modal.hideAll();
      this.$modal.show(ModalToDo, null, {
        adaptive: true,
        width: "90%",
        maxWidth: 776,
        height: "80%",
        styles: "background: inherit;",
      });
    },
  },
};
</script>

<style scoped>
.btn-grad {
  margin: 0 2px;
  padding: 12px 30px;

  text-align: center;

  background:linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );;;

  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>