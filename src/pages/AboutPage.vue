<!-- <script setup> -->
<!-- import Background_writeup from "../Sections/background_writeup.vue"; -->
<!-- import Backgroundimage_button from "../Sections/backgroundimage_button.vue"; -->
<!-- import Localcontent from "../Sections/localcontent.vue"; -->
<!-- import Ourleader from "../Sections/ourleader.vue"; -->
<!-- </script> -->
<!-- 
<template>
  <main class="relative">
    <img class="absolute z-10 -mt-1 -ml-1" src="/images/svg/blade-curve.svg" />

    <Background_writeup />

    <Backgroundimage_button></Backgroundimage_button>
    <Ourleader></Ourleader>
    <Localcontent></Localcontent>
  </main>
</template> -->
<script setup>
import { companyInformation } from "../store/store";
import MiniJumbotron from "../components/MiniJumbotron.vue";
import Ourleader from "../Sections/ourleader.vue";
import Localcontent from "../Sections/localcontent.vue";
import ContactArea from "../layouts/ContactArea.vue";

const aboutData = {
  title: "About Us",
  text: `ANBE NIGERIA LTDhas a team of highly qualified
            and experienced personnel with background in various engineering
            fields, specializing in combustion technology and equipment
            maintenance, such as generators and earth moving equipment. ANBE has a well equipped ultra modern
            Fabrication and Maintenance facility with state of the art equipment
            to undertake projects in her area of competence. We also have a corporate administrative Office, well equipped for
            timely delivery of projects. ANBE has a large pool of working
            capital and enjoys adequate financial backing from first class banks
            in the country`,
  image: "/images/handyman_02.jpeg",
};
const serviceData = {
  title: "About Us",
  text: `We have in our employ experienced and professionally qualified personnel in fabrication and construction field of services. Our fabrication facility is located in Omueke Village Igwuruta Rd Ikwerre L.G.A Rivers State.`,
  image: "/images/handyman_02.jpeg",
};
</script>

<template>
  <div class="relative">
    <img class="absolute z-10 -mt-1 -ml-1" src="/images/svg/blade-curve.svg" />

    <MiniJumbotron
      src="/images/handyman_02.jpeg"
      text-class="text-white lg:w-[800px] leading-8 pt-8"
      :title="aboutData.title"
      title-class="text-5xl text-white font-bold font-bree"
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
  <Ourleader />
  <Localcontent />
  <ContactArea />
</template>
