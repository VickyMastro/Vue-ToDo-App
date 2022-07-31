<template>
  <div class="modal-container">
    <UserForm
      :userData="userData"
      :isCreateUser="false"
      :styleModal="'container-inputs-modal'"
      @setValue="setValue"
    >
      <div class="d-flex justify-content-end">
        <button class="btn-grad" type="button" @click="reauthenticateUser">
          Actualizar
        </button>
      </div>
    </UserForm>
  </div>
</template>

<script>
import UserForm from "./UserForm.vue";

export default {
  name: "LoginModal",
  props: ['newEmail', 'newPassword'],
  data() {
    return {
      userData: {
        titleForm: "Ingrese sus credenciales anteriores",
        email: "",
        password: "",
        msj: "",
      },
    };
  },
  methods: {
    setValue(name, value) {
      this.userData[name] = value;
    },

    async reauthenticateUser() {
      try {
        await this.$store.dispatch("reauthenticate", {
          email: this.userData.email,
          password: this.userData.password,
          newEmail: this.newEmail,
          newPassword: this.newPassword,
        });

        this.$modal.hideAll();
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            this.$toast.error(
              "No se encontro un usuario registrado con ese mail",
              {
                position: "top-right",
                duration: 5000,
              }
            );
            break;

          case "auth/wrong-password":
            this.$toast.error("La contraseña es incorrecta", {
              position: "top-right",
              duration: 3000,
            });
            break;

          case "auth/user-mismatch":
            this.$toast.error(
              "El mail ingresado no corresponde a su mail anterior",
              {
                position: "top-right",
                duration: 5000,
              }
            );
            break;

          default:
            this.$toast.error("Algo salio mal", {
              position: "top-right",
              duration: 3000,
            });
            break;
        }
      }
    },
  },
  components: {
    UserForm,
  },
};
</script>

<style scoped>
.modal-container {
  padding-top: 60px;
  max-width: 90vw;
  height: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(43deg, #c850c0 20%, #ffcc70 80%);
}
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
