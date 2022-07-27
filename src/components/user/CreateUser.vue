<template>
  <div class="d-flex justify-content-around pt-4">
    <UserForm :userData='userData' :isCreateUser='true' @setValue="setValue">
    <div class="d-flex justify-content-end">
        <button class="btn-grad" type="button" @click='createUser' >Crear</button>
      </div>
    </UserForm>
  </div>
</template>

<script>
import UserForm from "./UserForm.vue";

export default {
  name: "CreateUser",
  data() {
    return {
      userData: {
        titleForm: "Crear Usuario ",
        name: '',
        email: '',
        password: '',
        msj : '¿Tenes usuario? Ingresa'

      },
    };
  },
  methods:{
    setValue(name, value) {
      this.userData[name] = value;
    },

    async createUser(){
      await this.$store.dispatch("doRegister", {
          name: this.userData.name,
          email: this.userData.email,
          password: this.userData.password,
        });
      this.$router.push({name: 'Home'})
    }
  },
  components: {
    UserForm,
  },
};
</script>

<style scoped>
.btn-grad {
  margin: 30px;
  padding: 12px 30px;

  text-align: center;

  background: inherit;
  background-size: 200% auto;

  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>