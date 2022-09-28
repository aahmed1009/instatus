<template>
  <div class="Header">
    <section class="header">
      <div data-v-2974e96a="" class="relative bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-0">
          <div
            class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
          >
            <div class="flex justify-start lg:w-0 lg:flex-1">
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
            <div class="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                aria-expanded="false"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              >
                <span class="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="hidden md:flex md:space-x-6 items-center justify-end">
              <button
                class="text-gray-800 text-sm font-semibold leading-5 hover:text-green-700"
              >
                <router-link to="/Home">Home</router-link>
              </button>
              <button
                class="text-gray-800 text-sm font-semibold leading-5 hover:text-green-700"
              >
                <router-link to="/why">WhyInstatus</router-link>
              </button>
              <button
                class="text-gray-800 text-sm font-semibold leading-5 hover:text-green-700"
              >
                <router-link to="/pricing">Pricing</router-link>
              </button>
              <button
                class="text-gray-800 text-sm font-semibold leading-5 hover:text-green-700"
              >
                <router-link to="/Company">Company</router-link>
              </button>
              <span class="w-px h-5 bg-gray-600 bg-opacity-50"></span>
              <button
                @click="RedirectSignIn()"
                class="text-gray-800 text-sm font-semibold leading-5 hover:text-green-700"
              >
                LogIn
              </button>

              <button
                @click="RedirectSignUp()"
                class="px-3 py-2 text-gray-800 text-sm font-semibold leading-5 border border-gray-400 border-opacity-50 rounded-md transition duration-200 hover:text-gray-900 hover:bg-gray-100 hover:border-opacity-100 focus:text-gray-600 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="header1">
      <header class="text-gray-700 body-font">
        <div
          class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row"
        >
          <router-link to="/Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              ></path></svg
          ></router-link>
          <a
            class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
          >
            <span class="ml-3 text-xl">Instatus</span>
          </a>
          <nav
            class="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto"
          >
            <router-link to="/Home">Home</router-link>|
            <router-link to="/why">WhyInstatus</router-link>|
            <router-link to="/Company">Company</router-link>|
            <router-link to="/pricing">Pricing</router-link>|
            <router-link to="/SignIn">SignIn</router-link>|
            <router-link to="/SignUp">SignUp</router-link>|
            <router-link to="/Register">Register</router-link>
          </nav>

          <the-logout />
        </div>
      </header>
    </section> -->
  </div>
</template>
<script>
// import TheLogout from "@/views/TheLogout.vue";

export default {
  methods: {
    RedirectHome() {
      this.$router.push("/Home");
    },
    RedirectSignUp() {
      this.$router.push("SignUp");
    },
    RedirectSignIn() {
      this.$router.push("sign-in");
    },
  },

  // components: { TheLogout },
};
</script>
