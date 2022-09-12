<template>
  <header class="text-gray-700 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <router-link to="/Home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          ></path></svg
      ></router-link>
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <span class="ml-3 text-xl">Instatus</span>
      </a>
      <nav
        class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
      >
        <router-link to="/Home">Home</router-link> |
        <router-link to="/why">WhyInstatus</router-link> |
        <router-link to="/Company">Company</router-link> |
        <router-link to="/pricing">Pricing</router-link> |
        <router-link to="/SignIn">SignIn</router-link> |
        <router-link to="/SignUp">SignUp</router-link>|
        <router-link to="/Register">Register</router-link>|
      </nav>

      <the-logout />
    </div>
  </header>
</template>
<script>
import TheLogout from "@/views/TheLogout.vue";

export default {
  components: { TheLogout },
};
</script>
