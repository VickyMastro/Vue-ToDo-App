<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      input buscador
    </p>
    <h3>To Do</h3>
    <ul>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 20px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
