<template>
  <button
    class="border-4 border-orange-500 bg-transparent py-4 px-10 font-bree tracking-widest text-orange-500 transition delay-75 ease-in-out hover:border-transparent hover:bg-orange-500 hover:px-14 hover:text-black"
  >
    {{ title }}
  </button>
</template>
<script setup>
defineProps({
  title: String,
});
</script>
