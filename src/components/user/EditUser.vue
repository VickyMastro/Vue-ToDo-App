<template>
  <div class="user-form-container fs-4">
    <div class="text-center fs-1 mt-5">
      <p>Editar usuario</p>
      <hr class="hr" />
    </div>

    <div class="inputs-container">
      <div class="input-container row">
        <div class="col">
          <label for="userAvatar" class="col-sm-2 col-form-label"
            >Avatar:</label
          >
        </div>
      </div>
      <!-- -------------------------------Name----------------------------------- -->
      <div class="input-container row">
        <label for="inputName" class="col-sm-2 col-form-label">Name:</label>
        <div
          class="col-sm-8 d-flex justify-content-between"
          v-if="!disabled.name"
        >
          <input
            type="text"
            class="form-control-plaintext"
            disabled
            id="inputName"
            v-model="userData.name"
          />
          <EditUserButton identifier="name" @editInfo="editInfo" />
        </div>

        <div class="col-sm-10 d-flex" v-else>
          <input
            type="text"
            class="form-control"
            id="inputName"
            v-model="userData.name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            style="border: none; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px"
            type="button"
            id="button-addon2"
            identifier="name"
            @click="saveEditInfo('name')"
          >
            <img
              src="../../assets/checkbox.png"
              alt="boton de editar información del usuario"
              width="30px"
              height="30px"
            />
          </button>
        </div>
      </div>
      <!-- -----------------------------------Email-------------------------------- -->
      <div class="input-container row">
        <label for="inputEmail" class="col-sm-2 col-form-label">Email:</label>
        <div
          class="col-sm-8 d-flex justify-content-between"
          v-if="!disabled.email"
        >
          <input
            type="text"
            readonly
            disabled
            class="form-control-plaintext probando"
            id="inputEmail"
            v-model="userData.email"
          />
          <EditUserButton identifier="email" @editInfo="editInfo" />
        </div>

        <div class="col-sm-10 d-flex" v-else>
          <input
            type="text"
            class="form-control"
            id="inputEmail"
            v-model="userData.email"
          />
          <button
            class="btn btn-outline-secondary"
            style="border: none; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px"
            type="button"
            id="button-addon2"
            identifier="email"
            @click="saveEditInfo('email')"
          >
            <img
              src="../../assets/checkbox.png"
              alt="boton de editar información del usuario"
              width="30px"
              height="30px"
            />
          </button>
        </div>
      </div>
      <!-- --------------------------------Password--------------------------------- -->
      <div class="input-container row">
        <label for="inputPassword" class="col-sm-3 col-form-label"
          >Password:</label
        >
        <div
          class="col-sm-7 d-flex justify-content-between"
          v-if="!disabled.password"
        >
          <input
            type="password"
            class="form-control-plaintext"
            id="inputPassword"
            v-model="userData.password"
          />
          <EditUserButton identifier="password" @editInfo="editInfo" />
        </div>

        <div class="col-sm-7 d-flex" v-else>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            v-model="userData.password"
            placeholder="Ingrese contraseña nueva"
          />
          <button
            class="btn btn-outline-secondary"
            style="border: none; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px"
            type="button"
            id="button-addon2"
            identifier="password"
            @click="saveEditInfo('password')"
          >
            <img
              src="../../assets/checkbox.png"
              alt="boton de editar información del usuario"
              width="30px"
              height="30px"
            />
          </button>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-end">
      <button class="btn-grad" type="button" @click="signOff">
        Cerrar sesión
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EditUserButton from "../buttons/EditUserButton.vue";
import LoginModal from "./LoginModal.vue";

export default {
  name: "EditUser",
  mounted() {
    return (this.userData = {
      ...this.userData,
      name: this.getUser.displayName,
      email: this.getUser.email,
      avatar: this.getUser.photoURL,
    });
  },
  data() {
    return {
      disabled: {
        avatar: false,
        name: false,
        email: false,
        password: false,
      },
      userData: {
        name: "",
        email: "",
        password: "********",
        avatar: "",
      },
    };
  },
  methods: {
    async signOff() {
      await this.$store.dispatch("doSignOut");
      this.$router.push("Login");
    },

    editInfo(e) {
      if (e === "password") {
        this.userData.password = "";
      }
      this.disabled[e] = true;
    },

    openChangePasswordAndMailModal() {
      this.$modal.show(
        LoginModal,
        {
          newEmail: this.userData.email,
          newPassword: this.userData.password,
        },
        {
          adaptive: true,
          width: "90%",
          maxWidth: 776,
          height: "70%",
        }
      );
    },

    async saveEditInfo(identifier) {
      if (identifier === "avatar" || identifier === "name") {
        await this.$store.dispatch("doUpdateProfile", this.userData);
      } else if (identifier === "email") {
        await this.openChangePasswordAndMailModal();
      } else if (identifier === "password") {
        if (!this.userData.password) {
          this.userData.password = "********";
        } else {
          await this.openChangePasswordAndMailModal();
        }
      }
      this.disabled[identifier] = false;
    },
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  components: {
    EditUserButton,
  },
};
</script>

<style scoped>
.hr {
  width: 80%;
  height: 2px;
  color: #472355;
  margin-left: 10%;
}
.user-form-container {
  margin: auto;
  max-width: 500px;
  height: 250px;
}

.inputs-container {
  margin-top: 35px;
  margin-left: 50px;
}

label {
  text-decoration-line: underline;
}

.input-container {
  margin-top: 25px;
}

input {
  width: 190px;
  /* margin-left: 40px; */
}

.btn-grad {
  margin: 30px 10px;
  padding: 10px 20px;

  text-align: center;

  background: inherit;
  background-size: 200% auto;

  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
