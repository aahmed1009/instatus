<template>
  <div>
    <section class="relative text-gray-600 body-font">
      <div class="container flex flex-wrap px-5 py-24 mx-auto sm:flex-nowrap">
        <div
          class="relative flex items-end justify-start p-10 overflow-hidden bg-white-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10"
        >
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_9wjm14ni.json"
            background="transparent"
            speed="1"
            style="width: 100%; height: 100%"
            loop
            autoplay
          ></lottie-player>
          <!-- <div class="relative flex flex-wrap py-6 bg-white rounded shadow-md">
            <div class="px-6 lg:w-1/2">
              <h2
                class="text-lg font-semibold tracking-widest text-gray-900 title-font"
              >
                Instatus is based in Egypt
              </h2>
              <p class="mt-1">
                We have offices in the Egypt, and we build software for
                businesses around the globe.
              </p>
            </div>
            <div class="px-6 mt-4 lg:w-1/2 lg:mt-0">
              <h2
                class="text-sm font-semibold tracking-widest text-gray-900 title-font"
              >
                EMAIL
              </h2>
              <a class="leading-relaxed text-teal-500"
                >instatus6@gmail.com.com</a
              >
              <h2
                class="mt-4 text-sm font-semibold tracking-widest text-gray-900 title-font"
              >
                PHONE
              </h2>
              <p class="leading-relaxed">123-456-7890</p>
            </div>
          </div> -->
        </div>
        <div
          class="flex flex-col w-full mt-8 bg-white lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0"
        >
          <h2 class="mb-1 text-lg font-medium text-gray-900 title-font">
            Contact us
          </h2>
          <p class="mb-5 leading-relaxed text-gray-600">
            You didn't find your answer in something? We are here to help!
          </p>
          <div class="relative mb-4">
            <label for="name" class="text-sm leading-7 text-gray-600"
              >Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              placeholder="Name"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="text-sm leading-7 text-gray-600"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              placeholder="me@company.com ?"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="text-sm leading-7 text-gray-600"
              >Message</label
            >
            <textarea
              id="message"
              name="message"
              class="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              placeholder="How can we help ?"
            ></textarea>
          </div>
          <button
            class="px-6 py-2 text-lg text-white bg-teal-500 border-0 rounded focus:outline-none hover:bg-teal-600"
          >
            Send
          </button>
          <p class="mt-3 text-xs text-gray-500">
            To get in touch with us you can use chat or email. To solve tickets
            faster, please use your account e-mail address.
          </p>
        </div>
      </div>
    </section>
  </div>
  <!-- <div
    class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100"
  >
    <div class="flex flex-col justify-between">
      <div class="space-y-2">
        <h2 class="text-4xl font-bold leading-tight lg:text-5xl">
          Let's talk!
        </h2>
        <div class="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
      </div>

      <img
        src="https://lukaszadam.com/assets/downloads/rocket-silver.png"
        alt=""
        class="p-6 h-52 md:h-64"
      />
    </div>
    <form novalidate="" class="space-y-6 ng-untouched ng-pristine ng-valid">
      <div>
        <label for="name" class="text-sm">Full name</label>
        <input
          id="name"
          type="text"
          placeholder=""
          class="w-full p-3 rounded dark:bg-gray-800"
        />
      </div>
      <div>
        <label for="email" class="text-sm">Email</label>
        <input
          id="email"
          type="email"
          class="w-full p-3 rounded dark:bg-gray-800"
        />
      </div>
      <div>
        <label for="message" class="text-sm">Message</label>
        <textarea
          id="message"
          rows="3"
          class="w-full p-3 rounded dark:bg-gray-800"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900"
      >
        Send Message
      </button>
    </form>
  </div> -->
</template>

<script>
export default {};
</script>

<style></style>
