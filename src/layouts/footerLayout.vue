<template>
  <footer class="bg-gray-800 py-20 px-4 font-lato text-gray-100">
    <div
      class="container mx-auto grid gap-x-20 gap-y-8 md:grid-cols-2 lg:grid-cols-3"
    >
      <div>
        <div class="uppercase">
          <h1 class="font-bree font-bold text-orange-500">work with anbe</h1>
          <p class="py-2 font-lato">
            ANBE NIGERIA LTD is an indigenous Engineering company, incorporated
            in 1990 to provide prompt and efficient services to the Oil and Gas
            sectors of the economy.
          </p>
          <p class="py-2">opening hours</p>
          <p>mon - friday</p>
          <p>8am - 5pm</p>
        </div>
      </div>
      <div class="uppercase">
        <h1 class="font-bree font-bold text-orange-500">get in touch</h1>
        <p>{{ companyInformation.addresses.address2 }}</p>
        <br />
        <p>
          Phone numbers:
          <br />
          {{ companyInformation.contactNumbers.phone2 }}
          <br />
          {{ companyInformation.contactNumbers.phone1 }}
          <br />

          {{ companyInformation.contactNumbers.phone3 }}
        </p>
        <p>
          E-mail: {{ companyInformation.emails.email1 }},
          {{ companyInformation.emails.email2 }}
        </p>
      </div>

      <div class="uppercase">
        <h1 class="py-2 font-bree font-bold text-orange-500">Quicklinks</h1>
        <ul class="font-lato underline">
          <li>Home</li>
          <li>Projects</li>
          <li>About dddus</li>
          <li>our services</li>
          <li>contact us</li>
        </ul>
      </div>

      <div class="uppercase">
        <a href="https://katalyst.tech/" target="_blank">
          <img
            class="h-12"
            src="https://katalyst.tech/wp-content/uploads/2018/05/logoFull-01.png"
          />
        </a>
        <h1>by katalyst technologies</h1>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { companyInformation } from "../store/store";
</script>

<style scoped>
.box {
  @apply h-40 bg-green-500;
}
</style>
