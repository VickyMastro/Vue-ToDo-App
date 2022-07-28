<template>
  <div>
    <div class="d-flex justify-content-around pt-4">
      <UserForm :userData="userData" :isCreateUser='false' @setValue="setValue">
        <div class="d-flex justify-content-end">
          <button class="btn-grad" type="button" @click="loginUser">
            Ingresar
          </button>
        </div>
      </UserForm>
    </div>
  </div>
</template>

<script>
import UserForm from "./UserForm.vue";

export default {
  name: "LoginUser",
  data() {
    return {
      userData: {
        titleForm: "Ingresar a tu cuenta ",
        email: '',
        password: '',
        msj : '¿No tenes usuario? Registrate'
      },
    };
  },
  methods:{
    setValue(name, value) {
      this.userData[name] = value;
    },

    async loginUser(){
      try {
        await this.$store.dispatch("doLogin", {
          email: this.userData.email,
          password: this.userData.password,
        });

        this.$router.push({name: 'Home'})
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            this.$toast.error("No se encontro un usuario registrado con ese mail", {
            position: "top-right",
            duration: 5000,
          });
            break;

          case 'auth/wrong-password':
            this.$toast.error("La contraseña es incorrecta", {
            position: "top-right",
            duration: 3000,
          });
            break;
        
          default:
            this.$toast.error("Algo salio mal", {
            position: "top-right",
            duration: 3000,
          });
            break;
        }
      }
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