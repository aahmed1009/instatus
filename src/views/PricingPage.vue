<template>
  <div class="PricingPage">
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div
        class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <div>
          <p
            class="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-teal-500 uppercase rounded-full bg-teal-accent-400 animate__animated animate__backInDown"
          >
            Instatus Pricing
          </p>
        </div>
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
        >
          <span class="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect
                fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                width="52"
                height="24"
              ></rect>
            </svg>

            <span class="relative"> THE</span>
          </span>
          PRICING THAT
          <span class="line-through decoration-teal-700 font-bold antialiased"
            >GROWS</span
          >
          WITH YOU
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          Cancel anytime, no questions asked!
        </p>
      </div>
      <div
        class="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto"
      >
        <div
          class="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow hover:scale-105 ease-in-out"
        >
          <div class="text-center">
            <div class="text-lg font-semibold uppercase tracking-widest">
              Starter
            </div>
            <div class="flex items-center justify-center mt-2">
              <div class="mr-1 text-5xl font-bold uppercase tracking-widest">
                Free
              </div>
            </div>
            <div class="mt-2 space-y-3">
              <div class="text-gray-700">
                <li class="flex items-start">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-gray-700"> Unlimited team </span>
                </li>
              </div>
              <div class="text-gray-700">
                <li class="flex items-start">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-gray-700"> Unlimited Subs </span>
                </li>
              </div>
            </div>
          </div>
          <div>
            <button
              class="w-full mb-4 btn btn-warning btn-lg uppercase tracking-wider"
            >
              Start free
            </button>
            <p
              class="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto"
            >
              All the basics for businesses that are just getting started.
            </p>
          </div>
        </div>
        <div
          class="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400 hover:scale-105 ease-in-out"
        >
          <div class="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div
              class="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-deep-purple-accent-400"
            >
              Most Popular
            </div>
          </div>
          <div class="text-center">
            <div class="text-lg font-semibold uppercase tracking-widest">
              Pro
            </div>

            <div class="flex items-center justify-center mt-2">
              <div class="mr-1 text-5xl font-bold uppercase tracking-widest">
                $38
              </div>
              <div class="text-gray-700">/ mo</div>
            </div>
            <div class="mt-2 space-y-3">
              <div class="text-gray-700">
                <li class="flex items-start">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="flex-none w-4 h-4 mt-1 mr-2 text-purple-700"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-gray-700"> Unlimited team </span>
                </li>
              </div>
              <div class="text-gray-700">
                <li class="flex items-start">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="flex-none w-4 h-4 mt-1 mr-2 text-purple-700"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-gray-700"> Unlimited Subs </span>
                </li>
              </div>

              <div class="text-gray-700">
                <li class="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-purple-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>

                  <span
                    class="text-gray-700 border-b-2 cursor-pointer"
                    x-data="tooltip()"
                    x-spread="tooltip"
                    x-position="top"
                    title="What’s your  personal domain?"
                    uk-tooltip="Hello World"
                  >
                    Use Your Domain
                  </span>
                </li>
              </div>
            </div>
          </div>
          <div>
            <button class="w-full mt-6 btn btn-primary btn-lg">
              Unlock Pro
            </button>

            <p
              class="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto"
            >
              Need something special? No problem, we can handle a custom number
              of monitors and status page subscribers!
            </p>
          </div>
        </div>
        <div
          class="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400 hover:scale-105 ease-in-out"
        >
          <div class="absolute inset-x-0 top-0 flex justify-center -mt-3"></div>
          <div class="text-center">
            <div class="text-lg font-semibold uppercase tracking-widest">
              BUSINESS
            </div>

            <div class="flex items-center justify-center mt-2">
              <div class="mr-1 text-5xl font-bold uppercase tracking-widest">
                $78
              </div>
              <div class="text-gray-700">/ mo</div>
            </div>
            <div class="mt-2 space-y-3">
              <div class="text-gray-700">
                <li class="flex items-start">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="flex-none w-4 h-4 mt-1 mr-2 text-pink-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-gray-700"> Unlimited team & Subs </span>
                </li>
              </div>
              <div class="text-gray-700">
                <li class="flex items-start">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="flex-none w-4 h-4 mt-1 mr-2 text-pink-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-gray-700"> Use your domain </span>
                </li>
              </div>

              <div class="text-gray-700">
                <li class="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-pink-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>

                  <span
                    class="text-gray-700 border-b-2 cursor-pointer"
                    x-data="tooltip()"
                    x-spread="tooltip"
                    x-position="top"
                    title="How’s 3 Pages Monitoring"
                  >
                    Includes 3 Pages
                  </span>
                </li>
              </div>
            </div>
          </div>
          <div>
            <button
              class="bg-pink-600 hover:bg-pink-700 w-full mt-6 btn btn-primary btn-lg"
            >
              Unlock Business
            </button>

            <p
              class="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto"
            >
              Need custom number of monitors or a specific check interval?
              Contact us for a special offer.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <AppTeams /> -->
    <section class="BackedBY">
      <section class="logo-cloud">
        <div class="py-16 bg-white">
          <div class="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
            <div class="m-auto text-center lg:w-7/12">
              <h2 class="text-2xl text-black-700 font-bold md:text-4xl pb-3.5">
                We are backed by
              </h2>
              <p class="pb-3.5 text-base text-gray-700 md:text-lg">
                Thousands of teams already add more focus to their work with
                Instatus.
              </p>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              <div class="p-4">
                <img
                  src="https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg"
                  class=""
                  alt=""
                />
              </div>
              <div class="p-4">
                <img
                  src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png"
                  class="w-32"
                  alt=""
                />
              </div>
              <div class="p-4">
                <img
                  src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png"
                  class="w-32"
                  alt=""
                />
              </div>
              <div class="p-4">
                <img
                  src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png"
                  class="w-32"
                  alt=""
                />
              </div>
              <div class="p-4">
                <img
                  src="https://tailus.io/sources/blocks/company-site/preview/images/clients/tailus.svg"
                  class="w-32"
                  alt=""
                />
              </div>
              <div class="p-4">
                <img
                  src="https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg"
                  class="w-32"
                  alt=""
                />
              </div>
              <div class="p-4">
                <img
                  src="https://tailus.io/sources/blocks/company-site/preview/images/clients/coty.svg"
                  class="w-20"
                  alt=""
                />
              </div>
              <div class="p-4">
                <img
                  src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png"
                  class="w-24"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <AppFeatures />
    <section class="Questions">
      <div
        class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div
            class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
          >
            <div>
              <!-- bg-teal-accent-400 -->
              <p
                class="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-teal-500 uppercase rounded-full bg-teal-accent-400"
              >
                Instatus
              </p>
            </div>
            <h2
              class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            >
              <span class="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="70326c9b-4a0f-429b-9c76-792941e326d5"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                    width="52"
                    height="24"
                  ></rect>
                </svg>
                <span class="relative">The</span>
              </span>
              Pricing questions
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
              Developers are asking...
            </p>
          </div>
        </div>
        <div class="max-w-screen-xl sm:mx-auto">
          <div class="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
            <div class="space-y-8">
              <div>
                <p class="mb-4 text-xl font-medium">Do you offer discounts?</p>
                <p class="text-gray-700">
                  Yes. when you pay for a year up front, you'll get three months
                  free. Also if you are a non-profit organization or an
                  open-source project, you can email us to get a free Pro
                  account.<br />
                </p>
              </div>

              <div>
                <p class="mb-4 text-xl font-medium">
                  Do we pay extra for more people? ?
                </p>
                <p class="text-gray-700">
                  No. Five team members or 50, the price is the same. This adds
                  up to significant savings as your company grows.<br />
                </p>
              </div>
              <div>
                <p class="mb-4 text-xl font-medium">
                  Do we pay extra for more alert subscribers?
                </p>
                <p class="text-gray-700">
                  No. We send your email alerts to unlimited subscribers at no
                  extra charge. To enable SMS, you'll need to add an SMS service
                  account. You can choose Twilio, Esendex, Vonage or SNS so that
                  you pay only for SMS you use.<br />
                </p>
              </div>
            </div>
            <div class="space-y-8">
              <div>
                <p class="mb-4 text-xl font-medium">
                  Can we migrate from our existing service?
                </p>
                <p class="text-gray-700">
                  Yes, if you're a Pro customer. Just email us and we'll migrate
                  your existing status page at no extra cost.<br />
                </p>
              </div>
              <div>
                <p class="mb-4 text-xl font-medium">
                  Can we cancel at any time?
                </p>
                <p class="text-gray-700">
                  Yes, you can cancel at any time. If you paid for a yearly
                  plan, we’ll refund any unused months.<br />
                </p>
              </div>
              <div>
                <p class="mb-4 text-xl font-medium">
                  How is Instatus protecting my data?
                </p>
                <p class="text-gray-700">
                  We have taken great precautions to ensure that your data is
                  visible only to the people who should see it. Our data is
                  hosted by Amazon Web Services, a secure cloud services
                  platform. Each Instatus user gets access only to the data that
                  is relevant to them.<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AppFeedback />
    <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
          <h3
            class="flex justify-center text-black-600 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight"
          >
            Have More Questions <span class="animate-waving-hand"> 🤔 </span>
          </h3>

          <a
            @click="Redirect()"
            href="#"
            title=""
            class="inline-flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-teal-600 border border-transparent rounded-md lg:mt-12 hover:bg-teal-700 focus:bg-teal-700"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 mr-2 -ml-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              />
            </svg>

            Chat With Us
          </a>
          <p class="max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-10">
            We are happy to help!
          </p>
        </div>
      </div>
    </section>

    <AppUpdates />
  </div>
</template>

<script>
import AppUpdates from "../components//AppUpdates.vue";
import AppFeatures from "@/components/AppFeatures.vue";
import AppFeedback from "@/components/AppFeedback.vue";

// import AppTeams from "../components/AppTeams.vue";

export default {
  methods: {
    Redirect() {
      this.$router.push("AppContactUs");
    },
  },
  components: { AppUpdates, AppFeatures, AppFeedback },
};
</script>
<style scoped>
.ContactUS {
  position: absolute;
  height: 50px;
  padding: 10px;
  margin: 70px;
  margin-bottom: 70px;
}
</style>
