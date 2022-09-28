<template>
  <div class="WhyPage">
    <section class="pt-24 bg-white">
      <div class="px-12 mx-auto max-w-7xl">
        <div
          class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center"
        >
          <h1
            class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight"
          >
            <span>Showcase your </span>
            <span
              class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline"
              >service uptime</span
            >
            <span>with Instatus.</span>
          </h1>
          <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            Communicate incidents and maintenances to your users within status
            pages and decent e-mails.
          </p>

          <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
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
            <a
              href="#_"
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
            </a>
          </div>
        </div>
        <div class="w-full mx-auto mt-20 text-center md:w-10/12">
          <div class="relative z-0 w-full mt-8">
            <div class="relative overflow-hidden shadow-2xl">
              <div
                class="flex items-center flex-none px-4 bg-green-400 rounded-b-none h-11 rounded-xl"
              >
                <div class="flex space-x-1.5">
                  <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                  <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                  <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <img
                src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="relative pt-16 md:pb-18 pb-4 lg:overflow-hidden">
      <div
        aria-hidden="true"
        class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-teal-100"
      ></div>

      <div class="relative">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
        >
          <div
            data-aos="fade-right"
            class="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 aos-animate aos-init"
          >
            <div>
              <div>
                <span
                  class="flex items-center justify-center w-12 h-12 rounded-md bg-gradient-to-r from-teal-600 to-teal-600 hover:from-teal-700 hover:to-teal-700"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 fill-transparent text-white floating"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h2
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  WHY GET A STATUS PAGE?
                </h2>

                <ul class="space-y-4 mt-4 text-lg text-gray-600">
                  <li>
                    Keep your customers happy even during downtime. Reduce
                    support tickets. Build customer trust!
                  </li>
                  <li>
                    Here is what Instatus has to offer: Uptime Monitoring, SSL
                    Certificate Monitoring Performance Monitoring.
                  </li>
                  <li>
                    Unlimited public/private status pages with custom domain
                    support
                  </li>
                </ul>
              </div>
            </div>
            <div class="pt-6 mt-8 border-t border-gray-200">
              <blockquote>
                <div>
                  <p class="text-base text-gray-600">
                    “Things can go wrong, things will go wrong. It sucks, but it
                    sucks less when you’re the first person to know when a bad
                    thing happens. Instatus to the rescue.”
                  </p>
                </div>
                <footer class="mt-3">
                  <div class="flex items-center space-x-3">
                    <div class="text-base font-medium text-gray-700">
                      <span class="text-teal-500"> George Eshak , </span>
                      Front-End Developer
                      <!-- <a target="_blank" href="https://masterlybusiness.com/">
                        Masterly Business
                      </a> -->
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div
            data-aos="fade-left"
            class="mt-12 sm:mt-16 lg:mt-0 aos-init aos-animate"
          >
            <div
              class="pl-4 sm:pl-6 lg:-mr-20 lg:px-0 lg:m-0 lg:relative lg:h-full"
            >
              <img
                class="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-batman-ao7gco-1641471249.jpg?crop=1.00xw:0.966xh;0,0.0339xh&resize=480:*"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
        >
          <div
            data-aos="fade-left"
            class="max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2 aos-init"
          >
            <div>
              <div>
                <span
                  class="flex items-center justify-center w-12 h-12 rounded-md bg-gradient-to-r from-teal-600 to-teal-600 hover:from-teal-700 hover:to-teal-700"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="w-6 h-6 fill-current text-white floating"
                  >
                    <path
                      d="M479.07 111.36a16 16 0 0 0-13.15-14.74c-86.5-15.52-122.61-26.74-203.33-63.2a16 16 0 0 0-13.18 0C168.69 69.88 132.58 81.1 46.08 96.62a16 16 0 0 0-13.15 14.74c-3.85 61.11 4.36 118.05 24.43 169.24A349.47 349.47 0 0 0 129 393.11c53.47 56.73 110.24 81.37 121.07 85.73a16 16 0 0 0 12 0c10.83-4.36 67.6-29 121.07-85.73a349.47 349.47 0 0 0 71.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24zm-131 75.11-110.8 128a16 16 0 0 1-11.41 5.53h-.66a16 16 0 0 1-11.2-4.57l-49.2-48.2a16 16 0 1 1 22.4-22.86l37 36.29 99.7-115.13a16 16 0 0 1 24.2 20.94z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h2
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  Public/Private Status Pages.
                </h2>

                <ul class="space-y-4 mt-4 text-lg text-gray-600">
                  <li>
                    <span class="text-teal-600"> Show your uptime</span>
                    Show the full picture of uptime and highlight the stability
                    of your service.
                  </li>
                  <li>
                    <span class="text-teal-600">Positive experience</span>
                    Keep your customers in the loop and provide a good user
                    experience.
                  </li>
                  <li>
                    <span class="text-teal-600"> Control</span>
                    Control which components of your service you show on your
                    page, and tap into external components to display the status
                    of mission-critical tools to your page.
                  </li>
                </ul>

                <div class="mt-6">
                  <a
                    href="#"
                    target="_blank"
                    class="inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-teal-600 to-teal-600 hover:from-teal-700 hover:to-teal-700"
                  >
                    See sample status page
                    <svg
                      class="w-4 h-4 mt-1 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            class="mt-12 sm:mt-8 lg:mt-0 lg:col-start-1 aos-init"
          >
            <div
              class="pr-0 md:pr-4 -ml-0 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
            >
              <img
                class="hidden md:block w-full bg:transparent lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-batman-ao7gco-1641471249.jpg?crop=1.00xw:0.966xh;0,0.0339xh&resize=480:*"
                alt=" - desktop"
              />
              <img
                class="md:hidden w-full bg:transparent h-auto"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-batman-ao7gco-1641471249.jpg?crop=1.00xw:0.966xh;0,0.0339xh&resize=480:*"
                alt=" - mobile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="notificationSection">
      <div class="relative pt-12 pb-8 md:pb-24 lg:overflow-hidden">
        <div
          aria-hidden="true"
          class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-50"
        ></div>
        <div class="relative">
          <div
            class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 items-center"
          >
            <div
              data-aos="fade-right"
              class="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 aos-init aos-animate"
            >
              <div>
                <div>
                  <span
                    class="flex items-center justify-center w-12 h-12 rounded-md bg-gradient-to-r from-teal-600 to-teal-600 hover:from-teal-700 hover:to-teal-700"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-white floating fill-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                      />
                    </svg>
                  </span>
                </div>
                <div class="mt-6">
                  <h2
                    class="text-3xl font-extrabold tracking-tight text-gray-900"
                  >
                    Multi-channel Notifications.
                  </h2>

                  <ul class="space-y-4 mt-4 text-lg text-gray-600">
                    <li>
                      Receive notification wherever you are. Instatus offers
                      integration with Email, Slack, Twilio, Teams, and Webhook
                      to receive instant downtime notifications.
                    </li>

                    <li>
                      We will also be working on few other notification
                      channels.
                    </li>
                  </ul>

                  <div class="mt-6">
                    <button
                      @click="RedirectSignUp()"
                      class="inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-teal-600 to-teal-600 hover:from-teal-700 hover:to-teal-700"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              class="mt-12 sm:mt-16 lg:mt-0 aos-init aos-animate"
            >
              <div
                class="pl-4 sm:pl-6 lg:-mr-20 lg:px-0 lg:m-0 lg:relative lg:h-full"
              >
                <div
                  class="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2 items-center"
                >
                  <div
                    class="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                  >
                    <img
                      class="max-h-12"
                      src="https://statusping.app/images/notifications/email.svg"
                      alt="Email Notification"
                    />
                    <h3 class="text-xl font-semibold px-2 py-4 text-gray-500">
                      Email
                    </h3>
                  </div>
                  <div
                    class="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                  >
                    <img
                      class="max-h-12"
                      src="https://statusping.app/images/notifications/chatting.svg"
                      alt="Chatting"
                    />
                    <h3 class="text-xl font-semibold px-2 py-4 text-gray-500">
                      SMS
                    </h3>
                  </div>
                  <div
                    class="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                  >
                    <svg
                      class="pr-2 max-h-12"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 2381.4 2354.5"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          fill="#5558af"
                          d="M2015.6,899.2c19.5,19.5,42.5,35,67.9,45.8c53,22.2,112.7,22.2,165.8,0c51.2-21.8,92-62.5,113.7-113.7
                c22.2-53,22.2-112.7,0-165.8c-21.8-51.2-62.5-92-113.7-113.7c-53-22.2-112.7-22.2-165.8,0c-51.2,21.8-92,62.5-113.7,113.7
                c-22.2,53-22.2,112.7,0,165.8C1980.6,856.6,1996.2,879.7,2015.6,899.2L2015.6,899.2z M1953.2,1097v642.1h107
                c36.8-0.2,73.4-3.6,109.5-10.4c36.3-6.4,71.3-18.6,103.7-36.2c30.6-16.6,57-40,77.3-68.2c21.3-31.3,32-68.6,30.5-106.5V1097H1953.2
                z M1606.4,827.8c28.4,0.2,56.6-5.5,82.8-16.7c51.2-21.8,91.9-62.5,113.6-113.7c22.2-53,22.2-112.7-0.1-165.8
                c-21.8-51.2-62.5-92-113.7-113.7c-26.2-11.2-54.4-16.9-82.9-16.7c-28.3-0.2-56.3,5.5-82.3,16.7c-19.4,8.3-25.5,19.1-52.2,32.1v329
                c26.8,13.1,32.8,23.8,52.2,32.1C1549.9,822.4,1578,828,1606.4,827.8L1606.4,827.8z M1471.6,1908.9c26.8,5.8,36.4,10.3,55.4,12.9
                c20.8,3,41.8,4.5,62.8,4.6c32.4-0.2,64.8-3.6,96.5-10.4c32.3-6.5,63.3-18.6,91.5-35.7c27.7-17,51-40.2,68.2-67.7
                c19-32.1,28.3-69.1,26.9-106.4v-743h-401.3V1908.9z M0,2113.7l1391.3,240.8V0L0,240.8V2113.7z"
                        ></path>
                      </g>
                      <path
                        fill="#ffffff"
                        d="M1016.7,722.4l-642.1,39.1v148.1l240.8-9.7v686.7l160.5,9.4V893.6l240.8-10.7V722.4z"
                      ></path>
                    </svg>
                    <h3 class="text-xl font-semibold px-2 py-4 text-gray-500">
                      Teams
                    </h3>
                  </div>

                  <div
                    class="col-span-1 flex justify-center py-8 px-8 bg-gray-50 items-center"
                  >
                    <svg
                      class="max-h-12"
                      enable-background="new 0 0 2447.6 2452.5"
                      viewBox="0 0 2447.6 2452.5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-rule="evenodd" fill-rule="evenodd">
                        <path
                          d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
                          fill="#36c5f0"
                        ></path>
                        <path
                          d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
                          fill="#2eb67d"
                        ></path>
                        <path
                          d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
                          fill="#ecb22e"
                        ></path>
                        <path
                          d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
                          fill="#e01e5a"
                        ></path>
                      </g>
                    </svg>

                    <h3 class="text-xl font-semibold px-2 py-4 text-gray-500">
                      Slack
                    </h3>
                  </div>

                  <div
                    class="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                  >
                    <svg
                      class="max-h-12"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill="#f22f46"
                        height="512"
                        rx="15%"
                        width="512"
                      ></rect>
                      <circle cx="256" cy="256" fill="#fff" r="192"></circle>
                      <circle cx="256" cy="256" fill="#f22f46" r="141"></circle>
                      <g fill="#fff">
                        <circle cx="208.75" cy="208.75" r="39.75"></circle>
                        <circle cx="310.75" cy="208.75" r="39.75"></circle>
                        <circle cx="208.75" cy="310.75" r="39.75"></circle>
                        <circle cx="310.75" cy="310.75" r="39.75"></circle>
                      </g>
                    </svg>

                    <h3 class="text-xl font-semibold px-2 py-4 text-gray-500">
                      Twilio
                    </h3>
                  </div>

                  <div
                    class="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                  >
                    <img
                      class="max-h-12"
                      src="https://statusping.app/images/notifications/webhook.svg"
                      alt="Chatting"
                    />
                    <h3 class="text-xl font-semibold px-2 py-4 text-gray-500">
                      Webhook
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div>
      <AppFeedback />
    </div>
    <AppUpdates />
  </div>
</template>

<script>
import AppUpdates from "@/components/AppUpdates.vue";

import AppFeedback from "@/components/AppFeedback.vue";
export default {
  methods: {
    RedirectSignUp() {
      this.$router.push("SignUp");
    },
  },
  components: { AppUpdates, AppFeedback },
};
</script>

<style></style>
