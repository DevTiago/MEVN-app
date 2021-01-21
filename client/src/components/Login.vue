<template>
  <span>
    <!-- login form -->
    <div v-if="showLoginForm" class="container d-flex justify-content-center">
      <div class="card mt-5 col-xl-6 col-md-8 col-12">
        <h2 class="card-title">Login</h2>

        <form @submit.prevent>
          <div class="formGroup">
            <label>Email</label>
            <div class="formGroupWrapper">
              <b-icon-envelope></b-icon-envelope>
              <input
                type="text"
                v-model="loginForm.email"
                placeholder="Your email"
              />
            </div>
          </div>

          <div class="formGroup">
            <label>Password</label>
            <div class="formGroupWrapper">
              <b-icon-key></b-icon-key>
              <input
                v-model="loginForm.password"
                type="password"
                placeholder="Your password"
              />
            </div>
          </div>
          <button @click="login">Login</button>
          <p class="text-center mt-2 newAccount">
            Or create a new account
            <span @click="toggleForm" class="link">here</span>
          </p>
        </form>
      </div>
    </div>

    <!-- register form -->

    <div v-else class="container d-flex justify-content-center">
      <div class="card mt-5 col-xl-6 col-md-8 col-12">
        <h2 class="card-title">Register a new account</h2>
        <form @submit.prevent>
          <div class="formGroup">
            <label>Name:</label>
            <div class="formGroupWrapper">
              <b-icon-person></b-icon-person>
              <input
                type="text"
                v-model="registerForm.name"
                placeholder="Your name"
                autocomplete="disable"
              />
            </div>
          </div>

          <div class="formGroup">
            <label>Email:</label>
            <div class="formGroupWrapper">
              <b-icon-envelope></b-icon-envelope>
              <input
                type="text"
                v-model="registerForm.email"
                placeholder="Your email"
                autocomplete="disable"
              />
            </div>
          </div>

          <div class="formGroup">
            <label>Password:</label>
            <div class="formGroupWrapper">
              <b-icon-key></b-icon-key>
              <input
                type="password"
                v-model="registerForm.password"
                placeholder="Your password"
                autocomplete="disable"
              />
            </div>
          </div>

          <div class="formGroup">
            <label>Confirm Password:</label>
            <div class="formGroupWrapper">
              <b-icon-key></b-icon-key>
              <input
                type="password"
                v-model="registerForm.confirmationPassword"
                placeholder="Confirm your password"
                autocomplete="disable"
              />
            </div>
          </div>
          <button @click="register">Register</button>
          <p class="text-center mt-2">
            Already have an acount? Login
            <span class="link" @click="toggleForm">here</span>
          </p>
        </form>
      </div>
    </div>
  </span>
</template>

<script>
import axios from "axios";
import { BIconKey, BIconEnvelope, BIconPerson } from "bootstrap-vue";

export default {
  name: "Login",
  components: {
    BIconKey,
    BIconEnvelope,
    BIconPerson,
  },
  data() {
    return {
      loading: false,
      showLoginForm: true,
      errorMsg: null,
      loginForm: {
        email: "",
        password: "",
      },
      registerForm: {
        email: "",
        name: "",
        password: "",
        confirmationPassword: "",
      },
    };
  },

  methods: {
    toggleForm() {
      this.loginForm.email = "";
      this.loginForm.password = "";

      this.registerForm.name = "";
      this.registerForm.email = "";
      this.registerForm.password = "";
      this.registerForm.confirmationPassword = "";

      this.showLoginForm = !this.showLoginForm;
    },

    login() {},

    register() {
      this.loading = true;

      if (
        this.registerForm.password != this.registerForm.confirmationPassword
      ) {
        this.errorMsg = "Passoword does not match!";
        return false;
      }

      axios
        .post("http://localhost:5050/auth/newuser", {
          name: this.registerForm.name,
          email: this.registerForm.email,
          password: this.registerForm.password,
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 50%;
  padding: 2rem;
  border-radius: 0.5rem;
  background: #fff;
  color: #606060;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);
  .card-title {
    font-size: 1.25rem;
    margin-bottom: 1.75rem;
  }
  .formGroup {
    margin-bottom: 1.75rem;
    .label {
      font-size: 0.75rem;
      color: #a7a7a7;
    }
    .formGroupWrapper {
      display: flex;
      align-items: center;
      input {
        padding: 10px 0;
        margin-left: 10px;
        width: 100%;
        height: 50%;
        border: 0;
        border-bottom: 1px solid #c7c7c7;
        color: #606060;
        &::placeholder {
          color: #a7a7a7;
        }
        &:focus {
          border-color: #b44ff6;
          outline: none;
        }
        &:focus + span {
          color: #b44ff6;
        }
      }
      .font-awesome-icon {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        font-size: 20px;
      }
    }
  }
  button {
    width: 100%;
    height: 36px;
    line-height: 36px;

    padding: 0 2rem;
    font-size: 0.875rem;
    border-radius: 18px;
    border: 0;
    background: linear-gradient(45deg, #499be7, #f506ff);
    color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    &:hover {
      outline: none;
    }
    &:focus {
      outline: none;
    }
    &:active {
      transform: scale(0.98);
    }
  }
}

.link {
  color: #499be7;
  cursor: pointer;
}
</style>
