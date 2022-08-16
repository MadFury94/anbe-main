<script setup>
import { ref } from "vue";
import ButtonCommon from "../components/ButtonCommon.vue";
import { companyInformation } from "../store/store";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const isDev = import.meta.env.DEV;

console.log(import.meta.env.DEV);
// const isDev = import.meta.e === "development";
</script>

<template>
  <div>
    <div class="grid lg:grid-cols-2">
      <div class="-mb-10 bg-orange-500 p-4">
        <template v-if="!isDev">
          {{ formData }}
        </template>

        <div class="py-8 lg:py-0 lg:px-20">
          <h1 class="font-bree text-2xl uppercase lg:text-5xl">Contact Us</h1>
          <hr class="mt-4 w-20 border-4 border-black" />
        </div>

        <!-- contact form -->

        <div
          class="grid-cols-1 gap-x-10 gap-y-10 space-y-8 md:grid md:grid-cols-2 md:space-y-0 lg:p-20"
        >
          <div class="w-full">
            <label
              for="fullname"
              class="block text-sm font-medium text-gray-700"
              >Full name:</label
            >
            <div class="mt-1">
              <input
                v-model="formData.name"
                type="text"
                name="name"
                class="block w-full border-gray-300 py-4 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                placeholder="your full name"
              />
            </div>
          </div>
          <div class="w-full">
            <label
              for="fullname"
              class="block text-sm font-medium text-gray-700"
              >Email:</label
            >
            <div class="mt-1">
              <input
                v-model="formData.email"
                type="email"
                name="email"
                class="block w-full border-gray-300 py-4 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div class="col-span-2 w-full">
            <label
              for="fullname"
              class="block text-sm font-medium text-gray-700"
              >Email:</label
            >
            <div class="mt-1">
              <textarea
                v-model="formData.message"
                type="text"
                :rows="10"
                class="block w-full border-gray-300 py-4 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                placeholder="please leave us a message"
              />
              <ButtonCommon title="hh" />
            </div>
          </div>
        </div>

        <!-- contact form -->
      </div>
      <div class="bg-gray-200">
        <div class="bg-gray-800">
          <ul class="flex justify-center gap-x-10 py-10 text-2xl text-white">
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-linkedin"></i></li>
            <li><i class="fa-brands fa-facebook"></i></li>
          </ul>
        </div>
        <div class="p-20">
          <ul class="space-y-10 font-lato text-lg">
            <li class="w-[500px]">
              <i class="fa-solid fa-map-location-dot pr-8"></i>
              <span class="" v-html="companyInformation.addresses.address2">
              </span>
            </li>
            <li>
              <i class="fa-solid fa-phone pr-8"></i
              >{{ companyInformation.contactNumbers.phone1 }}
            </li>
            <li>
              <i class="fa-solid fa-envelope pr-8"></i
              >{{ companyInformation.emails.email1 }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
