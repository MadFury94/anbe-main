<template>
  <div class="relative font-bold text-white">
    <div class="w-full brightness-50">
      <img
        class="h-screen w-full object-fill"
        src="/images/handyman_02.jpeg"
        alt="Snow"
      />
    </div>
    <div
      class="absolute top-2/4 left-2/4 w-full -translate-y-2/4 -translate-x-2/4 px-11"
    >
      <div class="w-full px-20">
        <div class="flex gap-x-4">
          <div class="h-20 border-4 border-orange-500"></div>

          <h1 class="font-bree text-3xl lg:text-5xl">ABOUT US</h1>
        </div>
      </div>
      <section class="f grid gap-8 p-20 md:grid-cols-2">
        <aside>
          <p class="font-light">
            <span class="font-bold">ANBE NIGERIA</span> LTD is an indigenous
            Engineering company, incorporated in 1990 to provide prompt and
            efficient services to the Oil and Gas sectors of the economy.
          </p>
          <div>
            <h1 class="py-4 font-semibold">
              The major areas of Competence are:
            </h1>
          </div>
          <ul class="list-disc font-light">
            <li>Design and fabrication of Smokeless Flares</li>
            <li>Pipeline installation, repair and maintenance</li>
            <li>Pipeline corrosion and leak repair</li>
            <li>Remote Ignition systems</li>
            <li>Instrumentation</li>
            <li>Leasing and Maintenance of operation vehicles</li>
            <li>Manpower supplies</li>
          </ul>
        </aside>
        <aside class="space-y-4 pb-7 font-lato text-5xl">
          <p>
            <span class="font-bold">ANBE</span> has a team of highly qualified
            and experienced personnel with background in various engineering
            fields, specializing in combustion technology and equipment
            maintenance, such as generators and earth moving equipment.
          </p>
          <p>
            <span class="font-bold">ANBE</span> has a well equipped ultra modern
            Fabrication and Maintenance facility with state of the art equipment
            to undertake projects in her area of competence.
          </p>
          <p>
            We also have a corporate administrative Office, well equipped for
            timely delivery of projects. ANBE has a large pool of working
            capital and enjoys adequate financial backing from first class banks
            in the country
          </p>
        </aside>
      </section>
    </div>
  </div>
  <img
    class="absolute z-10 -mt-24 ml-4 rotate-180"
    src="/images/svg/blade-curve.svg"
  />

  <section class="grid grid-cols-1 py-4 py-10 md:grid-cols-3">
    <div class="flex flex-col items-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class=".h-5 .w-5 h-20 w-20 fill-current text-orange-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        />
      </svg>
      <p class="font-bold">Engineering Design</p>
    </div>

    <div class="flex flex-col items-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class=".h-5 .w-5 h-20 w-20 fill-current text-orange-500"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
      <p class="font-bold">Procurement</p>
    </div>

    <div class="flex flex-col items-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class=".h-5 .w-5 h-20 w-20 fill-current text-orange-500"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        />
      </svg>
      <p class="font-bold">Construction</p>
    </div>
  </section>
</template>
<script setup></script>
