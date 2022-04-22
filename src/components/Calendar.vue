<template>
  <vc-date-picker
    v-model="date"
    :min-date="new Date()"
    color="purple"
  >
    <template v-slot="{ inputValue, togglePopover }">
      <div
        class="d-inline"
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
  props: ["initialDate"],
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
  height: 40px;

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
  height: 30px;

  font-size: 15px;
  text-align: center;
  vertical-align: middle;

  background: inherit;

  border: none;
}

.input-calendar:focus {
  outline: none;
}
</style>