<template>
  <div class="SignIn">
    <body class="font-sans antialiased">
      <div
        class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"
      >
        <div>
          <div class="flex justify-center lg:w-0 lg:flex-1 mr-8">
            <router-link to="/Home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 p-2 text-white bg-teal-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                ></path></svg
            ></router-link>
            <button
              @click="RedirectHome()"
              class="flex items-center mb-4 font-medium text-gray-800 title-font md:mb-0 cur"
            >
              <span class="ml-3 text-xl">Instatus</span>
            </button>
          </div>
        </div>
        <div
          class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
        >
          <!---->
          <!---->
          <form>
            <div>
              <label class="block font-medium text-sm text-gray-700" for="email"
                ><span>username</span></label
              >
              <input
                class="border border-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 rounded-md shadow-sm block w-full px-3 py-2 mt-1"
                id="username"
                name="username"
                type="text"
                required="required"
                autofocus="autofocus"
                v-model="user.username"
                v-validate="'required|alpha_num'"
              />
            </div>
            <div class="mt-4">
              <label
                class="block font-medium text-sm text-gray-700"
                for="password"
                ><span>Password</span></label
              >
              <input
                class="border border-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 rounded-md shadow-sm mt-1 px-3 py-2 block w-full"
                id="password"
                name="password"
                type="password"
                required="required"
                autocomplete="current-password"
                v-validate="'required'"
                v-model="user.password"
              />
            </div>
            <div class="block mt-4">
              <label class="flex items-center"
                ><input
                  type="checkbox"
                  class="rounded border-gray-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                  value=""
                  name="remember"
                />
                <span class="ml-2 text-sm text-gray-600"
                  >Remember me</span
                ></label
              >
            </div>
            <div class="flex items-center justify-center mt-4">
              <a
                href="#"
                class="underline text-sm text-gray-600 hover:text-gray-900"
              >
                Forgot your password?
              </a>
              <button
                @click="signIn()"
                type="submit"
                class="inline-flex justify-center items-center px-4 py-2 bg-teal-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:border-teal-900 focus:shadow-outline-gray transition ease-in-out duration-150 ml-4"
              >
                Login
              </button>
              <button
                @click="RedirectDashoard()"
                type="submit"
                class="inline-flex justify-center items-center px-4 py-2 bg-teal-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:border-teal-900 focus:shadow-outline-gray transition ease-in-out duration-150 ml-4"
              >
                Dashboard
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    RedirectHome() {
      this.$router.push("/Home");
    },
    RedirectDashoard() {
      this.$router.push("/Dashboard");
    },
    RedirectDashoardTwo() {
      this.$router.push("/DashboardTwo");
    },
    login() {
      console.log(this.user.username);
      const obj = {
        username: this.user.username,
        password: this.user.password,
      };
      axios
        .post("https://9173-156-209-45-239.eu.ngrok.io/token/", obj)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.$router.push("Dashboard");
        });
    },
  },
};
</script>

<style scoped></style>
