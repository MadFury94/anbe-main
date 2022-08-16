<script setup>
import What_we_do_best from "../Sections/what_we_do_best.vue";
import JumboTronComponent from "../components/JumboTronComponent.vue";
</script>
<template>
  <main>
    <JumboTronComponent
      :hasTitle="true"
      title=" OUR SERVICES"
      titleClass="text-white"
      subTitle=" We’ve Been Building For Over 20 years"
      text="Among the non technical staff are Clerks, Administrative Officers, Accountant, Office Managers and Marketing officers."
      link-title="VIEW OUR WORK"
      image="/images/gas-flare.jpeg"
      page-link="project"
    />
    <img class="-mt-2" src="/images/svg/blade.svg" />

    <What_we_do_best />

    <div class="grid items-center lg:grid-cols-2">
      <div class="mt-40 bg-gray-200 p-10 lg:p-40">
        <h1 class="font-bree text-2xl font-bold lg:text-5xl">
          Work with a Team of Talented workers
        </h1>
        <p class="py-8 lg:text-lg">
          Our core local professional Engineers with adequate academic and
          professional training, project experiences acquired from, execution of
          projects locally, have designed and implemented complex engineering
          projects for many years. Due to our extensive involvement in oil and
          gas engineering projects, we have acquired high ski l l proficiency
          and are therefore capable of carrying out multi-skill tasks.
        </p>
      </div>
      <div>
        <img class="object-fill lg:h-[836px]" src="images/bakken-flaring.jpg" />
      </div>
    </div>
  </main>
</template>
