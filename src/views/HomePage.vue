<template>
  <div class="Home" id="app">
    <section class="dark:bg-gray-800 dark:text-gray-100">
      <div
        class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
      >
        <div
          class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <h1
            class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight sm:text-6xl"
          >
            <span>Showcase your </span>
            <span
              class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline"
              >service uptime</span
            >
            <span>with Instatus .</span>
          </h1>
          <p class="mt-6 mb-8 text-lg sm:mb-12 text-gray-600">
            Get a beautiful status page in 10 seconds
            <br class="hidden md:inline lg:hidden" />
            , without paying thousands of dollars!
          </p>
          <div
            class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
          >
            <button
              @click="RedirectSignUp()"
              class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-gradient-to-r from-teal-600 to-teal-600 hover:from-teal-700 hover:to-teal-700 rounded-2xl sm:w-auto sm:mb-0"
            >
              Get Started
              <svg
                class="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              @click="RedirectWhyInstatus()"
              class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0"
            >
              Learn More
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        >
          <img
            src="https://uptimerobot.com/assets/images/status-page.svg"
            alt=""
            class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
    <div><AppTeams /></div>
    <section>
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="py-12 md:py-20 dark:border-t dark:border-gray-800">
          <div class="max-w-4xl mx-auto text-center pb-12 md:pb-16">
            <h1
              class="text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-8"
            >
              Monitor all your Pages, in one solution
            </h1>
          </div>
          <div class="grid gap-20 sm:gap-40">
            <div class="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div
                data-aos="fade-up"
                class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              >
                <img
                  src="../assets/images/Screenshot from 2022-09-21 15-40-11.png"
                  width="540"
                  height="405"
                  alt="Features 01"
                  class="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div
                data-aos="fade-right"
                class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              >
                <div class="md:pr-4 lg:pr-12 xl:pr-16">
                  <div
                    class="text-3xl font-bold my-5 bg-clip-text bg-gradient-to-br text-transparent from-fuchsia-500 to-purple-600"
                  >
                    Setup in 2 minutes
                  </div>
                  <h3 class="text-xl font-semibold mb-3">Uptime Monitoring</h3>
                  <p class="text-xl text-gray-500 dark:text-gray-400 mb-4">
                    Monitor your website and get notified instantly when your
                    website goes down.
                    <span data-v-2974e96a="" class="bg-green-100 font-semibold"
                      >Everything can be done in two minutes.</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div
                data-aos="fade-up"
                class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl"
              >
                <img
                  src="../assets/images/Screenshot from 2022-09-21 15-58-17.png"
                  width="540"
                  height="405"
                  alt="Features 02"
                  class="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div
                data-aos="fade-left"
                class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              >
                <div class="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3
                    class="text-3xl font-bold my-5 bg-clip-text bg-gradient-to-br text-transparent from-orange-400 to-pink-600"
                  >
                    1‑minute checks
                  </h3>
                  <h3 class="text-xl font-semibold mb-3">
                    Sleep well thanks to our reliable
                    <span data-v-2974e96a="" class="bg-green-100 font-semibold">
                      1‑minute checks
                    </span>
                  </h3>
                  <p class="text-xl text-gray-500 dark:text-gray-400 mb-4">
                    Your website will be checked every minute so you can get an
                    instant notification in case things go wrong.
                    <span data-v-2974e96a="" class="bg-green-100 font-semibold">
                      1‑minute checks
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div
                data-aos="fade-up"
                class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              >
                <img
                  src="../assets/images/Screenshot from 2022-09-21 16-08-31.png"
                  width="540"
                  height="405"
                  alt="Features 03"
                  class="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div
                data-aos="fade-right"
                class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              >
                <div class="md:pr-4 lg:pr-12 xl:pr-16">
                  <div
                    class="text-3xl font-bold my-5 bg-clip-text bg-gradient-to-br text-transparent from-green-400 to-cyan-500"
                  >
                    Monitor status of each part of your website
                  </div>
                  <h3 class="text-xl font-semibold mb-3">
                    Not only expiration monitoring
                  </h3>
                  <p class="text-xl text-gray-500 dark:text-gray-400 mb-4">
                    Control which components of your service you show on your
                    page.
                  </p>
                </div>
              </div>
            </div>
            <div class="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div
                data-aos="fade-up"
                class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl"
              >
                <img
                  src="../assets/images/Screenshot from 2022-09-21 16-14-28.png"
                  width="540"
                  alt="Features 04"
                  class="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div
                data-aos="fade-left"
                class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              >
                <div class="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3
                    class="text-3xl font-bold my-5 bg-clip-text bg-gradient-to-br text-transparent from-yellow-400 to-orange-500"
                  >
                    Choose your preferred type of notifications.
                  </h3>
                  <h3 class="text-xl font-semibold mb-3">
                    Choose when to get notified
                  </h3>
                  <p class="text-xl text-gray-500 dark:text-gray-400 mb-4">
                    Get instant alerts via email, SMS, voice call or through one
                    of many integrations (such as Slack, Twilio,etc.)
                  </p>
                </div>
              </div>
            </div>
            <div class="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div
                data-aos="fade-up"
                class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              >
                <img
                  src="../assets/images/Screenshot from 2022-09-21 16-17-52.png"
                  width="540"
                  alt="Features 05"
                  class="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div
                data-aos="fade-right"
                class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              >
                <div class="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3
                    class="text-3xl font-bold my-5 bg-clip-text bg-gradient-to-br text-transparent from-purple-500 to-green-500"
                  >
                    Get alerts about SSL certificate erorrs.
                  </h3>
                  <h3 class="text-xl font-semibold mb-3">
                    Choose when to get notified
                  </h3>
                  <p class="text-xl text-gray-500 dark:text-gray-400 mb-4">
                    Set up an SSL monitoring within the main HTTPS monitoring of
                    your website and receive notifications regarding any SSL
                    certificate errors automatically.
                  </p>
                </div>
              </div>
            </div>
            <div class="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div
                data-aos="fade-up"
                class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl"
              >
                <img
                  src="../assets/images/Screenshot from 2022-09-21 16-26-08.png"
                  width="540"
                  alt="Features 04"
                  class="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div
                data-aos="fade-left"
                class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              >
                <div class="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3
                    class="text-3xl font-bold my-5 bg-clip-text bg-gradient-to-br text-transparent from-cyan-400 to-blue-500"
                  >
                    Reliable and simple Cron job monitoring.
                  </h3>
                  <h3 class="text-xl font-semibold mb-3">
                    Monitor cron job completions.
                  </h3>
                  <p class="text-xl text-gray-500 dark:text-gray-400 mb-4">
                    The cron job monitoring (also known as heartbeat monitoring)
                    will help you monitor all your important cron jobs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div><AppFeatures /></div>
    <div><pricing /></div>
    <div>
      <AppFeedback />
    </div>
    <div><AppQuestions /></div>
    <div><AppUpdates /></div>
  </div>
</template>

<script>
import AppUpdates from "@/components/AppUpdates.vue";
import AppFeedback from "@/components/AppFeedback.vue";
import AppQuestions from "@/components/AppQuestions.vue";
import AppTeams from "../components/AppTeams.vue";
import AppFeatures from "@/components/AppFeatures.vue";
export default {
  methods: {
    RedirectSignUp() {
      this.$router.push("SignUp");
    },
    RedirectWhyInstatus() {
      this.$router.push("why");
    },
  },
  components: { AppUpdates, AppFeedback, AppQuestions, AppTeams, AppFeatures },
};
</script>

<style></style>
