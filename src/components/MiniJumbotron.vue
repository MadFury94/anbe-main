<template>
  <div>
    <div class="relative">
      <div class="absolute inset-x-0 bottom-0 h-1/2" />
      <div>
        <div class="relative shadow-xl sm:overflow-hidden">
          <div class="absolute inset-0">
            <template v-if="image !== ''">
              <img
                class="h-full w-full object-cover"
                :src="image"
                alt="section image"
              />
            </template>
            <div
              :class="imageColor"
              class="absolute inset-0 mix-blend-multiply"
            />
          </div>
          <div :class="padding" class="relative px-4 sm:px-6 lg:px-8">
            <div :class="padding" class="flex gap-x-4 lg:px-40">
              <div class="h-20 border-4 border-orange-500"></div>
              <div>
                <h1 :class="titleClass">{{ title }}</h1>
                <p
                  v-if="text"
                  :class="textClass"
                  class="font-lato"
                  v-html="text"
                ></p>
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
  image: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "Mini Title",
  },
  titleClass: {
    type: String,
    default: "text-orange-500",
  },
  text: {
    type: String,
    default: "mini subtitle",
  },
  textClass: {
    type: String,
    default: "",
  },
  padding: {
    type: String,
    default: "py-20",
  },
  imageColor: {
    type: String,
    default: "bg-gray-500",
  },
});
</script>
