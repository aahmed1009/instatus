<template>
  <button
    id="logout-button"
    @click.prevent="handleLogout"
    :disabled="isLoggedOut"
    class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
  >
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="w-4 h-4 ml-1"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
    Log out
  </button>
</template>

<script>
// Initialize Userfront
Userfront.init("demo1234");
import Userfront from "@userfront/core";
export default {
  methods: {
    // Log out with Userfront.logout()
    handleLogout() {
      Userfront.logout();
    },
  },
  computed: {
    // User is logged out if they don't have an access token
    isLoggedOut() {
      return !Userfront.accessToken();
    },
  },
};
</script>

<style scoped>
#logout-button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
}

#logout-button[disabled] {
  background-color: lightgray;
  color: gray;
}
</style>
