<template>
  <div id="app">
    <div id="alert" v-if="alert">{{ alert }}</div>

    <form @submit.prevent="checkAndResetPassword">
      <label>
        Password
        <input type="password" v-model="password" />
      </label>
      <label>
        Re-type password
        <input type="password" v-model="passwordVerify" />
      </label>
      <button type="submit">Reset password</button>
    </form>
  </div>
</template>

<script>
// Initialize Userfront
Userfront.init("demo1234");
import Userfront from "@userfront/core";
export default {
  data() {
    return {
      password: "",
      passwordVerify: "",
      alert: "",
    };
  },
  methods: {
    checkAndResetPassword() {
      this.alert = "";
      // Verify that the passwords match
      if (this.password !== this.passwordVerify) {
        this.alert = "Passwords must match";
        return;
      }
      // Call Userfront.resetPassword()
      Userfront.resetPassword({
        password: this.password,
      }).catch((error) => {
        this.alert = error.message;
      });
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
