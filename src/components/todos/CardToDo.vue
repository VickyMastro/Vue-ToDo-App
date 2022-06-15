<template>
  <div class="col-sm-12 my-3">
    <div class="card">
      <div class="card-header">
        {{ toDo.date }}
        <button class="delete-button" @click="deleteToDo">
          <img
            src="../../assets/delete.png"
            alt="cruz para eliminar un toDo"
            width="20px"
            height="20px"
          />
        </button>
      </div>
      <div class="card-body">
        <div class="form-check">
          <input
            class="form-check-input input-checkbox"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            v-model="toDo.isDone"
          />
          <label
            class="form-check-label"
            for="flexCheckDefault"
            :class="{'textDecoration': toDo.isDone}"
          >
            {{ toDo.desc | caracteres }}
          </label>
        </div>

        <div class="text-end">
          <a href="#" class="btn" @click="editToDo">Editar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditToDoModal from "./EditToDoModal.vue";
import ToDosRepository from "@/repositories/ToDosRepository";

export default {
  name: "CardToDo",
  props: ["toDo"],
  methods: {
    editToDo() {
      this.$modal.show(
        EditToDoModal,
        {
          id: this.toDo.id,
        },
        {
          adaptive: true,
          width: "90%",
          maxWidth: 776,
          height: "80%",
        }
      );
    },
    async deleteToDo() {
      try {
        await ToDosRepository.deleteToDo(this.toDo.id)

        this.$toast.success('El toDo fue eliminado',{
            position: 'top-right',
            duration: 3000
          })

        const toDosComponent = this.$root.$children[0].$children[1].$refs.toDoRef
        toDosComponent.actualizar()

      } catch (error) {
          this.$toast.error('No se pudo eliminar el toDo',{
            position: 'top-right',
            duration: 3000
          })
      }
    },
  },
  watch: {
    "toDo.isDone"() {
      this.$store.dispatch("editToDo", this.toDo);
    },
  },
  filters: {
    caracteres: function (description) {
      if (description.length > 70) {
        return description.substring(0, 70) + "...";
      } else {
        return description;
      }
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: #c850c0;
}

.card-header {
  background: #c850c0;
  color: white;
  display: flex;
  justify-content: space-between;
}

.input-checkbox{
  border-color: #c850c0;
}

.input-checkbox:checked{
  background-color: #c850c0 ;
  border:#c850c0
}

.input-checkbox:focus{
  box-shadow: none !important;
  border-color: #c850c0;
}

.textDecoration{
  text-decoration: line-through;
  text-decoration-color: #c850c0;
}

.delete-button {
  background: inherit;
  border: none;
}

a {
  color: white;
  background: #c850c0;
  border-color: #c850c0;
}
</style>