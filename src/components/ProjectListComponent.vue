<template>
  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
    <div>
      <div class="relative shadow-xl sm:overflow-hidden">
        <div class="absolute inset-0">
          <img
            class="h-full w-full object-cover"
            src="/images/sketch.jpeg"
            alt="People working on laptops"
          />
        </div>
        <div class="relative py-16 sm:px-6 lg:py-32 lg:px-8">
          <div
            class="container mx-auto grid gap-y-10 gap-x-4 bg-white p-4 lg:grid-cols-2 lg:p-10"
          >
            <div v-for="(item, index) in projectList" :key="index">
              <img
                class="rounded-md lg:h-[400px] lg:w-[600px]"
                :src="`/images/projects/${item.image}`"
              />
              <div class="mt-4 space-y-2">
                <h3 class="font-bree text-lg">{{ item.title }}</h3>
                <p class="w-[300] break-words font-lato uppercase">
                  {{ item.subTitle }}
                </p>
                <h3 v-if="item.date">{{ item.date }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

,
<script setup>
const projectList = [
  {
    title: "SPDC/NEWCROSS /EROTON/SEPL AT",
    subTitle: "Design/Fabrication/Installation Of Flare Line/Stacks",
    image: "flare-piping-scaled.jpg",
    date: "2005  TILL DATE",
  },
  {
    title: "NAOC",
    subTitle: "Installation of Flare Gas Metering System",
    image: "10306556362782.jpg",
  },
  {
    title: "SPDC",
    subTitle:
      "Ignition (RFI) and Flare Stack System in SPDC Instrument modification works on gas supply line to Alaoji power plant.",
    image: "flare-system-500x500-1.jpg",
    date: "2011",
  },
  {
    title: "SPDC/NEWCROSS /EROTON/SEPL AT",
    subTitle: "ANBE Locally Made And Installed Ignition Panel",
    image: "b48a17e61478972b1ea71b8aa791c1ae.jpg",
    date: "2005 TILL DATE",
  },
  {
    title: "FLUENTA REP",
    subTitle: "Installation Of Flare Gas Metering System",
    image: "10306556362782.jpg",
  },
  {
    title: "SPDC",
    subTitle:
      "Fabrication of Gaslift Phase 3 Spools & Pipe support(SEA EAGLE) SPDC",
    image: "Gallery-BAE-woodside4__FocusFillWzExMTYsODM4LCJ5IiwwXQ.jpg",
    date: "2015",
  },
];
</script>
