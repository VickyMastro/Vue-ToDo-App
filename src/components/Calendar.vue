<template>
  <vc-date-picker
    v-model="date"
    :min-date="minDate"
    color="purple"
  >
    <template v-slot="{ inputValue, togglePopover }">
      <div
        class="d-flex align-items-center justify-content-center"
        style="
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          border-radius: 10px;
        "
      >
        <button @click="togglePopover()" class="button-calendar">
          <img
            src="../assets/calendario.png"
            alt="boton del calendario "
            width="20px"
            height="20px"
          />
        </button>
        <input
          :value="inputValue"
          class="input-calendar"
          readonly
          @click="togglePopover()"
        />
      </div>
    </template>
  </vc-date-picker>
</template>

<script>
export default {
  name: "Calendar",
  props: ["initialDate", "minDate"],
  data(){
    return{
      date: ''
    }
  },
  watch:{
    initialDate(){
      this.date = this.initialDate
    },
    date(){
      this.$emit('setDate', this.date)
    }
  }
};
</script>

<style scoped>
.button-calendar {
  width: 45px;
  height: 30px;

  background: inherit;

  border: none;
  vertical-align: text-bottom;
}

img {
  margin: auto;
  display: block;
}

.input-calendar {
  width: 150px;
  height: 25px;

  font-size: 18px;
  text-align: center;
  vertical-align: middle;

  background: inherit;

  border: none;
}

.input-calendar:focus {
  outline: none;
}
</style>