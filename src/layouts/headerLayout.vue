<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <header>
      <Popover v-slot="{ open }" class="relative bg-white">
        <div
          class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:justify-start md:space-x-10 lg:px-8"
        >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <div>
              <router-link to="/">
                <img class="w-20" src="/images/anbe-logo.png" alt="anbe logo" />
              </router-link>
            </div>
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <PopoverButton
              class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>

          <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <nav class="font-bree">
              <div class="flex gap-x-6 px-3">
                <div
                  class="flex gap-x-8 px-3"
                  v-for="(item, index) in headerRoutes"
                  :key="index"
                >
                  <RouterLink active-class="active" :to="{ name: item.name }">{{
                    item.title
                  }}</RouterLink>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <transition
          enter-active-class="duration-200 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div v-if="open">
            <PopoverPanel
              v-slot="{ close }"
              focus
              class="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
              static
            >
              <div
                class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
              >
                <div class="px-5 pt-5 pb-6">
                  <div class="flex items-center justify-between">
                    <div>
                      <router-link to="/">
                        <img
                          class="w-20"
                          src="/images/anbe-logo.png"
                          alt="anbe logo"
                        />
                      </router-link>
                    </div>
                    <div class="-mr-2">
                      <PopoverButton
                        class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                      >
                        <span class="sr-only">Close menu</span>
                        <XIcon class="h-6 w-6" aria-hidden="true" />
                      </PopoverButton>
                    </div>
                  </div>
                  <div class="mt-6">
                    <nav class="grid grid-cols-1 gap-7">
                      <div
                        v-for="item in headerRoutes"
                        :key="item.name"
                        class="flex items-center rounded-lg"
                      >
                        <RouterLink
                          @click="closeMenu(close)"
                          active-class="active"
                          class="w-full p-3 font-bold hover:bg-gray-50"
                          :to="{ name: item.name }"
                          >{{ item.title }}</RouterLink
                        >
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </div>
        </transition>
      </Popover>
    </header>

    <main>
      <div>
        <!-- Hero card -->
      </div>

      <!-- More main page content here... -->
    </main>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

const headerRoutes = [
  {
    path: "/",
    name: "home",
    title: "Home",
  },
  {
    path: "/about",
    name: "about",
    title: "About",
  },
  {
    path: "/projects",
    name: "project",
    title: "Projects",
  },
  {
    path: "/services",
    name: "services",
    title: "Services",
  },
  {
    path: "/contact",
    name: "contact",
    title: "Contact",
  },
];
function closeMenu(close) {
  close();
  // this.$refs.popover.close();
}
// const open = ref(false);
</script>

<style lang="scss" scoped>
.active {
  @apply text-orange-400;
}
</style>
