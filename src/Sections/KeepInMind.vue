<template>
  <div class="bg-gray-800 p-10 child">
    <h1 class="font-bold text-white text-3xl">Keep in mind</h1>
  </div>

  <div
    class="bg-gray-800 grid grid-cols-2 md:grid-cols-4 gap-10 py-10 child px-8"
  >
    <div v-for="(item, index) in About">
      <div
        :class="item.background"
        class="py-20 text-white text-center px-10 rounded-md"
      >
        <h1 class="font-bold text-2xl">{{ item.stats }}</h1>
        <p>{{ item.title }}</p>
      </div>
    </div>

    <!--   <div class="bg-blue-500 text-orange-500 text-center">
      165 completed Projects
    </div>
    <div class="bg-green-500 text-orange-500 text-center">
      3 Office Locations
    </div>
    <div class="bg-white-500 text-orange-500 text-center">CLICK HERE</div>
   -->
  </div>
  <section>
    <div class="relative text-center font-bold text-white">
      <div class="w-full brightness-50">
        <img
          class="h-auto lg:h-[800px] w-full object-fill"
          src="../assets/images/industry-factory.jpeg"
          alt="Snow"
        />
      </div>
      <div class="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
        <div class="font-light">
          <div class="flex gap-x-4 px-20 py-10">
            <div class="w-16 h-0 border-2 px-14 border-orange-500"></div>
          </div>
          <div class="py-4">
            <h1 class="text-3xl text-orange-500">Our Latest Projects</h1>
          </div>
          <p class="py-4">
            Do you want to know more? Click the button to see our latest work
          </p>
        </div>

        <button
          @click="displaySection"
          class="border border-orange-500 bg-transparent py-2 px-5 text-orange-500 hover:border-transparent hover:bg-orange-300"
        >
          VIEW OUR WORK
        </button>
      </div>
    </div>
  </section>
  <section>
    <div class="relative text-center font-bold text-white">
      <div class="w-full brightness-50">
        <img
          class="w-full object-fill h-96"
          src="../assets/images/handyman_02.jpeg"
          alt="Snow"
        />
      </div>
      <div class="absolute top-2/4 left-2/4 -translate-y-40 -translate-x-2/4">
        <h1 class="text-2xl">Our Trademarked Process & Workflow.</h1>
        <p class="pb-4 font-light">
          Due to our extensive involvement in oil and gas engineering projects,
          we have acquired high skill proficiency and are therefore capable of
          carrying out multi-skill tasks. We retain the services of these
          professionals and this has enabled us to achieve an unblemished
          reputation of always delivering on time with a high standard quality
        </p>

        <button
          class="border border-orange-500 bg-transparent py-2 px-5 font-bold text-orange-500 hover:border-transparent hover:bg-orange-300"
        >
          Learn More
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const SectionState = ref(false);
function displaySection() {
  console.log("i am walking");
  SectionState.value = true;
}
const About = [
  {
    title: "Happy Clients",
    background: "bg-orange-500",
    stats: 23,
  },
  {
    title: " Completed Projects",
    background: "bg-green-500",
    stats: 65,
  },

  {
    title: " Office Locations",
    background: "bg-blue-500",
    stats: 13,
  },
  {
    title: " Completed Projects",
    background: "bg-gray-500",
    stats: 20,
  },
];
</script>
