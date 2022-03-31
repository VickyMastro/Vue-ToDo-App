<template>
  <div class="col-sm-12 col-md-4 my-3">
    <div class="card">
      <div class="card-header">
        {{ note.date }}
        <button class="delete-button" @click="deleteNote">
          <img src="../../assets/delete.png" alt="" width="20px" height="20px" />
        </button>
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <b>
            {{ note.title }}
          </b>
        </h5>
        <p class="card-text">{{ note.desc | caracteres}}</p>
        <div class="text-end">
          <a href="#" class="btn" @click="editNote">Editar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditNoteModal from "./EditNoteModal.vue";

export default {
  name: "CardNote",
  props: ["note"],
  methods: {
    editNote() {
      this.$modal.show(
        EditNoteModal,
        {
          id: this.note.id,
        },
        {
          adaptive: true,
          width: "90%",
          maxWidth: 776,
          height: "80%",
        }
      );
    },
    deleteNote(){   
      this.$store.dispatch("deleteNote", this.note.id)
    }
  },
  filters:{
    caracteres : function (description){
      if (description.length > 70) {
        return description.substring(0,70) + '...'
        
      }else{
        return description
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

.delete-button{
  background: inherit;
  border: none;
}

a {
  color: white;
  background: #c850c0;
  border-color: #c850c0;
}
</style>