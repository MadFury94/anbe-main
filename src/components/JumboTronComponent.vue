<template>
  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="mx-auto">
      <div class="relative shadow-xl sm:overflow-hidden">
        <div class="absolute inset-0">
          <img
            class="h-full w-full object-cover"
            :src="image"
            alt="People working on laptops"
          />
          <div class="absolute inset-0 bg-gray-600 mix-blend-multiply" />
        </div>
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <template v-if="hasTitle">
            <div class="flex justify-center">
              <hr class="w-20 border-4 border-orange-500" />
            </div>

            <h1
              :class="titleClass"
              class="pt-20 text-center font-bree text-5xl"
            >
              {{ title }}
            </h1>
          </template>

          <template v-if="hasSubTitle">
            <h2
              class="pt-20 text-center font-lato text-3xl font-black text-white"
            >
              {{ subTitle }}
            </h2>
          </template>

          <p
            :class="textClass"
            class="mx-auto mt-6 max-w-lg py-8 text-center font-lato text-white sm:max-w-3xl"
          >
            {{ text }}
          </p>
          <div
            v-if="hasButton"
            class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center"
          >
            <div class="flex justify-center">
              <div>
                <router-link
                  :to="{ name: pageLink }"
                  class="border-4 border-orange-500 bg-transparent py-4 px-10 font-bree tracking-widest text-orange-500 transition delay-75 ease-in-out ease-in hover:border-transparent hover:bg-orange-500 hover:px-14 hover:text-white"
                >
                  {{ linkTitle }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "i have no title yet",
  },
  titleClass: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  linkTitle: {
    type: String,
    default: "",
  },
  pageLink: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  hasTitle: {
    type: Boolean,
    default: true,
  },
  hasSubTitle: {
    type: Boolean,
    default: false,
  },
  textClass: {
    type: String,
    default: "text-2xl",
  },

  hasButton: {
    type: Boolean,
    default: true,
  },
});
</script>
