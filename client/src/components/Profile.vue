<template>
  <div>
    <h2>Profile</h2>
    <b-form @submit.prevent="onSubmit">
      <b-form-group id="input-group-name" label="Name:" label-for="input-name">
        <b-form-input
          id="input-name"
          v-model="form.name"
          type="text"
          placeholder="Enter Name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-email"
        label="Email:"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          placeholder="Enter Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-password"
        label="Password:"
        label-for="input-1"
      >
        <b-form-input
          id="input-passoword"
          v-model="form.password"
          type="password"
          placeholder="Enter Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-confirm-password"
        label="Confirm Password:"
        label-for="input-1"
      >
        <b-form-input
          id="input-confirm-password"
          v-model="form.confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Profile",

  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },

  methods: {
    onSubmit() {
      console.log(this.form);
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  width: 100%;
  padding: 5px 0;
  border-bottom: 2px solid #2c3e50;
}
</style>