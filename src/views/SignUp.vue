<template>
  <div class="SignUp">
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
          <form>
            <div class="mt-4">
              <label class="block font-medium text-sm text-gray-700" for="name"
                ><span>FirstName</span></label
              >
              <input
                class="border border-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 rounded-md shadow-sm w-full px-3 py-2 mt-1 block"
                id="FirstName"
                name="FirstName"
                type="text"
                required="required"
                autocomplete="name"
                placeholder="Statuss"
                v-model="user.first_name"
                v-validate="'required|alpha'"
              />
              <span v-show="errors.has('FirstName')" class="input-span">
                {{ errors.first("FirstName") }}
              </span>
            </div>
            <div class="mt-4">
              <label class="block font-medium text-sm text-gray-700" for="name"
                ><span>LastName</span></label
              >
              <input
                class="border border-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 rounded-md shadow-sm w-full px-3 py-2 mt-1 block"
                id="LastName"
                name="LastName"
                type="text"
                required="required"
                autocomplete="name"
                placeholder="status"
                v-model="user.last_name"
                v-validate="'required|alpha'"
              />
              <span v-show="errors.has('LastName')" class="input-span">
                {{ errors.first("LastName") }}
              </span>
            </div>
            <div class="mt-4">
              <label class="block font-medium text-sm text-gray-700" for="email"
                ><span>Email</span></label
              >
              <input
                class="border border-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full px-3 py-2"
                id="email"
                name="email"
                type="email"
                required="required"
                placeholder="me@company.com ?"
                v-model="user.email"
                v-validate="'required|email'"
              />
              <span v-show="errors.has('email')" class="input-span">
                {{ errors.first("email") }}
              </span>
            </div>
            <div class="mt-4">
              <label class="block font-medium text-sm text-gray-700" for="email"
                ><span>Username</span></label
              >
              <input
                class="border border-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full px-3 py-2"
                id="username"
                name="username"
                type="text"
                required="required"
                placeholder="@instatus6 "
                v-model="user.username"
                v-validate="'required|alpha_num'"
              />
              <span v-show="errors.has('username')" class="input-span">
                {{ errors.first("username") }}
              </span>
            </div>
            <div class="mt-4">
              <label
                class="block font-medium text-sm text-gray-700"
                for="password"
                ><span>Password</span></label
              >
              <input
                class="border border-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 rounded-md shadow-sm w-full px-3 py-2 mt-1 block"
                id="password"
                name="password"
                type="password"
                required="required"
                autocomplete="new-password"
                placeholder="*******"
                v-model="user.password"
                v-validate="'required'"
                ref="password"
              />
              <span v-show="errors.has('password')" class="input-span">
                {{ errors.first("password") }}
              </span>
            </div>
            <div class="mt-4">
              <label
                class="block font-medium text-sm text-gray-700"
                for="password_confirmation"
                ><span>Confirm Password</span></label
              >
              <input
                class="border border-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full px-3 py-2"
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                required="required"
                autocomplete="new-password"
                placeholder="*******"
                v-model="user.password_confirmation"
                v-validate="'required|confirmed:password'"
              />
              <span
                v-show="errors.has('password_confirmation')"
                class="input-span"
              >
                {{ errors.first("password_confirmation") }}
              </span>
            </div>

            <div class="flex items-center justify-center mt-4">
              <button
                @click="RedirectSignIn()"
                class="underline text-sm text-gray-600 hover:text-gray-900"
              >
                Already have an account?
              </button>
              <button
                @click="signup()"
                type="submit"
                class="inline-flex justify-center items-center px-4 py-2 bg-teal-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:border-teal-900 focus:shadow-outline-gray transition ease-in-out duration-150 ml-4"
              >
                Register
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
  data: function () {
    return {
      Firstname: "",
      Lastname: "",
      email: "",
      username: "",
      password: "",
      password_confirmation: "",
      user: {},
    };
  },
  methods: {
    RedirectHome() {
      this.$router.push("/Home");
    },
    RedirectSignIn() {
      this.$router.push("/sign-in");
    },
    Dashboard() {
      this.$router.push("/Dashboard");
    },
    signup() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          axios
            .post("https://9173-156-209-45-239.eu.ngrok.io/user/", this.user)
            .then((result) => {
              console.log(result);
              this.$router.push({
                name: "Home",
              });
            })
            .catch((error) => {
              console.log(error);
            });
          console.log(11111);
        }
      });
    },
  },
};
</script>

<style></style>
