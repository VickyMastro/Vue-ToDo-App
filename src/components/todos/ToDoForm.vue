<template>
  <div class="modal-note-container">
    <div class="row" style="padding: 5px 30px">
      <div class="col-12 my-3" style="text-align: end">
        <Calendar :initialDate="formData.date" @setDate="setDate" />
      </div>

      <div class="col-sm-12 col-md-12">
        <!-- DESC -->
        <label for="desc" style="margin-bottom: 12px; margin-left: 12px"
          >Descripcion de Nota</label
        >

        <textarea
          class="form-control"
          style="max-height: 35vh; min-height: 35vh"
          id="desc"
          rows="3"
          placeholder="Ej.: Estudiar Vue 3"
          :value="formData.desc"
          @input="$emit('setValue', 'desc', $event.target.value)"
        ></textarea>
      </div>

      <!-- <div class="row mt-3">
        <p>Prioridad: alta / baja</p>
      </div> -->

      <!-- BOTONES -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Calendar from "../Calendar.vue";

export default {
  name: "ToDoForm",
  props: ["formData"],
  methods: {
    setDate(date){
      this.$emit('setValue', 'date', date)
    }, 
    },
  components: {
    Calendar,
  },
};
</script>

<style scoped>
span {
  padding-top: 10px;
  text-align: center;
  font-size: 35px;
}

textarea {
  height: 35vh;
  padding: 12px 30px;

  background: inherit;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  border: none;
  outline: none;
  border-radius: 10px;
}

textarea::placeholder {
  color: rgba(0, 0, 0, 0.568);
}

textarea:focus {
  background: inherit;
  border: none;
}

.btn-grad {
  margin: 50px 10px;
  padding: 12px 30px;

  text-align: center;

  background: inherit;
  background-size: 200% auto;

  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

p {
  text-align: left;
}
</style>