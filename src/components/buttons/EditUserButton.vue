<template>
  <button>
    <img
      src="../../assets/edit.png"
      alt="boton de editar"
      width="30px"
      height="30px"
      @click="$emit('editInfo', identifier)"
    />
  </button>
</template>

<script>
export default {
  name: "EditUserButton",
  props:['identifier']
};
</script>

<style scoped>
button{
  width: 70px; 
  background: inherit; 
  border: none;
  padding-bottom: 5px;
}
</style>