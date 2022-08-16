<script setup>
import { companyInformation } from "../store/store";
import ProjectListComponent from "../components/ProjectListComponent.vue";
import MiniJumbotron from "../components/MiniJumbotron.vue";
import ProjectTab from "../components/ProjectTab.vue";
import BladeDivider from "../components/BladeDivider.vue";

const aboutData = {
  title: "Some of our work",
  text: `ANBE NIGERIA LTD has executed various projects in the areas of
                  Design, Fabrication and installation of smokeless flares
                  Onshore/Offshore fabrication works, Procurement and
                  Installation of Remote Ignition System, Repair of corrosion
                  defect by clamping. Leak repair. Flare change out projects
                  Flow line replacement, maintenance and installation, Flow
                  station/facilities upgrade and rehabilitation. Elf Petroleum:
                  Lease of operational vehicles for Port Harcourt, Lagos and
                  Abuja offices. Supply of boats and vehicles to SPDC for
                  National Immunization Programme.`,
  image: "/images/Smoking-Flare.png",
};
const serviceData = {
  title: "About Us",
  text: `We have in our employ experienced and professionally qualified personnel in fabrication and construction field of services. Our fabrication facility is located in Omueke Village Igwuruta Rd Ikwerre L.G.A Rivers State.`,
  image: "/images/Smoking-Flare.png",
};
</script>

<template>
  <div class="relative">
    <img class="absolute z-10 -mt-1 -ml-1" src="/images/svg/blade-curve.svg" />

    <MiniJumbotron
      src="/images/Smoking-Flare.png"
      text-class="text-white lg:w-[800px] leading-8 pt-8"
      :title="aboutData.title"
      title-class="text-5xl text-orange-500 font-bold font-bree"
      :text="aboutData.text"
      padding="sm:py-24 lg:py-32 py-10 "
    />

    <div class="">
      <div class="grid-cols-4 items-center font-bree text-2xl lg:grid">
        <div></div>
        <div class="bg-orange-500 py-10 px-20 text-white">Get A Quote</div>
        <div class="col-span-2 px-20 py-10 text-gray-500">
          CALL US:
          <span class="text-orange-500">{{
            companyInformation.contactNumbers.phone1
          }}</span>
        </div>
      </div>
    </div>
  </div>
  <ProjectListComponent />
  <div>
    <MiniJumbotron
      text-class="text-white w-[800px] leading-8 pt-8"
      title="Related Services"
      title-class="text-5xl text-orange-500 font-bold font-bree"
      :text="serviceData.text"
      padding="py-10"
      image=""
      image-color="bg-white"
      textClass="text-gray-500"
    />
  </div>

  <div>
    <ProjectTab />
    <BladeDivider />
  </div>
</template>
