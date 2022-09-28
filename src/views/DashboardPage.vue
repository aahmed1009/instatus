<template>
  <div class="Dashboard">
    <link
      rel="stylesheet"
      href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
    />

    <div class="min-h-screen flex flex-row bg-gray-100">
      <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
        <div class="flex items-center justify-center h-20 shadow-md">
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
        </div>
        <ul class="flex flex-col py-4">
          <li>
            <a
              href="#"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span
                class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"
                ><i class="bx bx-home"></i
              ></span>
              <span class="text-sm font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span
                class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
              <span class="text-sm font-medium">Monotoring</span>
            </a>
          </li>

          <li>
            <button
              @click="RedirectContactUs()"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span
                class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"
                ><i class="bx bx-chat"></i
              ></span>
              <span class="text-sm font-medium"> Contact US</span>
            </button>
          </li>

          <li>
            <a
              href="#"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span
                class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"
                ><i class="bx bx-log-out"></i
              ></span>
              <span class="text-sm font-medium">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
RedirectContactUs
<script>
export default {
  methods: {
    RedirectHome() {
      this.$router.push("/Home");
    },
    RedirectContactUs() {
      this.$router.push("AppContactUs");
    },
  },
};
</script>

<style></style>
