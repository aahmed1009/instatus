<template>
  <footer class="text-gray-600 body-font">
    <div
      class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
    >
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <button
          @click="RedirectHome()"
          class="flex title-font font-medium items-center md:justify-start justify-center text-gray-800"
        >
          <router-link to="/Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-teal-500 rounded-full"
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
        </button>
        <br />
        <p class="mt-2 text-sm text-gray-500">
          Beautifully simple and reliable uptime monitoring and status page
          service.
        </p>
      </div>
      <div
        class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
      >
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <router-link to="/Why">
            <h2
              class="title-font font-medium text-gray-900 hover:text-green-700 tracking-widest text-sm mb-3"
            >
              Instatus
            </h2></router-link
          >
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <router-link to="/Company">
            <h2
              class="title-font font-medium text-gray-900 hover:text-green-700 tracking-widest text-sm mb-3"
            >
              Company
            </h2></router-link
          >
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <router-link to="/Pricing">
            <h2
              class="title-font font-medium text-gray-900 hover:text-green-700 tracking-widest text-sm mb-3"
            >
              Pricing
            </h2></router-link
          >
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <router-link to="/SignUp">
            <h2
              class="title-font font-medium text-gray-900 hover:text-green-700 tracking-widest text-sm mb-3"
            >
              Start Free
            </h2></router-link
          >
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <router-link to="/AppContactUS">
            <h2
              class="title-font font-medium text-gray-900 hover:text-green-700 tracking-widest text-sm mb-3"
            >
              Contact Us
            </h2></router-link
          >
        </div>
        <div
          class="text-center pt-10 sm:pt-12 font-light flex items-center justify-center"
        >
          <!-- <span class="ml-3 text-xl">Get More Updates</span> -->
          <form
            class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center"
          >
            <div class="relative">
              <input
                type="text"
                id='"form-subscribe-Subscribe'
                class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                placeholder="Email"
              />
            </div>

            <button
              class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-teal-600 shadow-md hover:bg-teal-500 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-teal-200"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="bg-gray-100">
      <div
        class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
      >
        <p class="text-gray-500 text-sm text-center sm:text-left">
          © 2022 Instatus —
          <a
            href="https://twitter.com/Instatus6"
            rel="noopener noreferrer"
            class="text-gray-600 ml-1"
            target="_blank"
            >@Instatus6</a
          >
        </p>
        <span
          class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
        >
          <a class="text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import why from "../views/WhyPage.vue";
import Company from "../views/CompanyPage.vue";
import pricing from "../views/PricingPage.vue";
import signup from "@/views/SignUp.vue";
export default {
  name: "component",
  methods: {
    RedirectHome() {
      this.$router.push("/Home");
    },
  },
  data() {
    return { signup, why, Company, pricing };
  },
};
</script>

<style></style>
