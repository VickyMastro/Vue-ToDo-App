<template>
  <div class="user-form-container fs-4">
    <div class="text-center fs-1 mt-5 text-decoration-underline">
      <p>Editar usuario</p>
    </div>

    <div class="inputs-container">
      <div class="input-container row">
        <label for="userAvatar" class="col-sm-2 col-form-label">Avatar:</label>
        <div class="col-sm-6">
          <input
            type="text"
            readonly
            class="form-control-plaintext"
            id="userAvatar"
            v-model="userData.avatar"
          />
        </div>
        <EditUserButton />
      </div>

      <div class="input-container row">
        <label for="inputName" class="col-sm-2 col-form-label">Name:</label>
        <div class="col-sm-10 d-flex" v-if="!disabled.name">
          <input
            type="text"
            class="form-control-plaintext"
            disabled
            id="inputName"
            v-model="userData.name"
          />

          <EditUserButton identifier="name" @editInfo="editInfo" />
        </div>

        <div class="input-group" style="width: 300px" v-else>
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

      <div class="input-container row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email:</label>
        <div class="col-sm-6">
          <input
            type="text"
            readonly
            disabled
            class="form-control-plaintext probando"
            id="staticEmail"
            v-model="userData.email"
          />
        </div>
      </div>

      <div class="input-container row">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Password:</label
        >
        <div class="col-sm-6" v-if="!disabled.password">
          <input
            type="password"
            class="form-control-plaintext"
            id="inputPassword"
            v-model="userData.password"
          />
        </div>
        <div class="col-sm-6" v-else>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            v-model="userData.password"
          />
        </div>
        <EditUserButton identifier="password" @editInfo="editInfo" />
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
      this.$router.push('Login') 
    },

    editInfo(e) {
      this.disabled[e] = true;
      console.log("edite de mentirita", e);
    },

    saveEditInfo(algo) {
      this.disabled[algo] = false;
      console.log("probando save", algo);
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
  margin-left: 40px;
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