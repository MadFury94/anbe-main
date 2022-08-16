<template>
  <div class="mx-auto w-full max-w-4xl px-2 py-16 sm:px-0">
    <TabGroup>
      <TabList
        class="flex space-x-1 rounded border-t-8 border-t-orange-500 bg-[#f4f4f4] p-1"
      >
        <Tab
          v-for="(item, index) in services"
          as="template"
          :key="index"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full  py-2.5 text-sm font-medium leading-5 text-orange-700',
              ' ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white  shadow'
                : '  text-black hover:bg-white/[0.12] hover:text-orange-400',
            ]"
          >
            {{ item.title }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(item, idx) in services"
          :key="idx"
          :class="[
            'rounded-xl bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
          ]"
        >
          <div>
            <img :src="item.image" />
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const services = ref([
  {
    title: "PIPELINE CONSTRUCTION",
    image: "/images/services/oil-rig.jpg",
  },
  {
    title: "FLARE GAS METERING SYSTEM",
    image: "/images/services/anbe-project.jpg",
  },
  {
    title: "FABRICATION OF SMOKELESS FLARES",
    image: "/images/services/oil-pump.jpg",
  },
]);
</script>
