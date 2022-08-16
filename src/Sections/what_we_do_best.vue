<template>
  <div class="bg-white-500 py-4 text-center">
    <h class="text font-bree font-bold lg:text-4xl">What we do Best</h>
    <div class="grid gap-8 p-14 md:grid-cols-3 lg:grid-cols-3">
      <div v-for="(item, index) in services" :key="index">
        <div class="flex items-center">
          <i class="pr-4 text-4xl" :class="item.icon"></i>
          <p class="text-left font-bold lg:text-2xl">
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    icon: "fa-solid fa-pen-to-square",
    title: "Design and Fabrication of Smokeless Flares",
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: "Pipeline corrosion and leak repair",
  },
  {
    icon: "fa-solid fa-gears",
    title: "Instrumentation Works",
  },
  {
    icon: "fa-regular fa-key",
    title: "Flow station upgrade",
  },
  {
    icon: "fa-regular fa-network-wired",
    title: "	Fabrication works",
  },
  {
    icon: "fa-regular fa-lightbulb",
    title: "Design, fabrication and Installation of Remote Ignition Systems",
  },
];
</script>
