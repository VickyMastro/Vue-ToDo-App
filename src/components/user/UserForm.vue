<template>
  <div class="user-form-container d-flex flex-column">
    <div class="text-center fs-1">
      <p>{{userData.titleForm}}</p>
    </div>
    <div class="inputs-container form-floating mb-3" v-if="isCreateUser">
      <input
        type="text"
        class="form-control"
        id="floatingName"
        placeholder="ej.:Vi"
        @input="$emit('setValue', 'name', $event.target.value)"
      />
      <label for="floatingName">Name</label>
    </div>
    <div class="inputs-container form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        @input="$emit('setValue', 'email', $event.target.value)"
      />
      <label for="floatingInput">Email</label>
    </div>
    <div class="inputs-container form-floating">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
        @input="$emit('setValue', 'password', $event.target.value)"
      />
      <label for="floatingPassword">Contraseña</label>
      <a :href="url">{{userData.msj}}</a>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  props: ['userData', 'isCreateUser'],
  computed:{
    url(){
      return this.isCreateUser ? './LoginUser': './CreateUser'
    },
  }
};
</script>

<style scoped>
.user-form-container{
  max-width: 500px;
  height: 300px;
}

.inputs-container{
  width: 400px;
}
</style>