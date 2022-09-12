<template>
  <div id="app">
    <div id="alert" v-if="alert">{{ alert }}</div>

    <form @submit.prevent="signupWithPassword">
      <label>
        Email address
        <input type="email" v-model="email" />
      </label>
      <label>
        Account name (custom field)
        <input type="text" v-model="accountName" />
      </label>
      <label>
        Password
        <input type="password" v-model="password" />
      </label>
      <label>
        Verify password
        <input type="password" v-model="passwordVerify" />
      </label>
      <button
        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        type="submit"
      >
        Sign up
      </button>
    </form>

    <!-- <p>or</p>

    <button
      class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      @click.prevent="signupWithSSO"
    >
      Sign up with Google
    </button> -->
  </div>
</template>

<script>
// Initialize Userfront
Userfront.init("demo1234");
import Userfront from "@userfront/core";
export default {
  data() {
    return {
      email: "",
      accountName: "",
      password: "",
      passwordVerify: "",
      alert: "",
    };
  },
  methods: {
    // Sign up with the form's email and password
    signupWithPassword() {
      // Reset the alert to empty
      this.alert = "";
      // Verify that the passwords match
      if (this.password !== this.passwordVerify) {
        this.alert = "Passwords must match";
        return;
      }
      // Call Userfront.signup()
      Userfront.signup({
        method: "password",
        email: this.email,
        password: this.password,
        data: {
          accountName: this.accountName,
        },
      }).catch((error) => {
        this.alert = error.message;
      });
    },
    // Sign up with SSO (google)
    signupWithSSO() {
      Userfront.signup({ method: "google" });
    },
  },
};
</script>
<style scoped>
button,
input {
  display: block;
  margin-bottom: 10px;
}

#alert {
  color: red;
  margin-bottom: 10px;
}
</style>
