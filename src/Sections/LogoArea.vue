<template>
  <div class="px-1- container mx-auto py-20 px-4 lg:px-20">
    <div
      class="grid grid-cols-2 items-center gap-x-10 gap-y-10 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div v-for="(item, index) in logos" :key="index">
        <img class="h-28" :alt="item.alt" :src="`/images/logos/${item.src}`" />
      </div>
    </div>
  </div>
  <img class="" src="/images/svg/blade.svg" />
  <div
    class="flex flex-col items-center justify-between py-20 lg:flex-row lg:px-28"
  >
    <h1 class="px-8 font-bree font-bold lg:text-2xl">
      WANT TO HIRE RESOURCES OR VEHICLES?
    </h1>
    <div class="p-5">
      <ButtonCommon title="CLICK HERE" />
    </div>
  </div>
</template>

<script setup>
import ButtonCommon from "../components/ButtonCommon.vue";

const logos = [
  {
    src: "Eroton-E-P-Limited.png",
    alt: "Eroton",
  },
  {
    src: "Seplat-Petroleum-Development-Company-Plc.jpg",
    alt: "Eroton",
  },
  {
    src: "ExxonMobil.jpg",
    alt: "Exxon",
  },
  {
    src: "Total-e1546490476141.jpg",
    alt: "Total",
  },
  {
    src: "Saipem-1.png",
    alt: "Saipem",
  },
  {
    src: "Agip.jpg",
    alt: "Agip",
  },
  {
    src: "shell.jpg",
    alt: "Eroton",
  },
  {
    src: "newcross-600x600-1.png",
    alt: "Newcross",
  },
];
</script>
