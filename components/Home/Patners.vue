<template>
  <client-only>

    <section id="sponsors" class="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 class="text-lg md:text-xl text-center mb-6 mt-12 font-semibold">Our Partners</h2>
      <div class="mx-auto">
        <Vue3Marquee :pause-on-hover="true" @on-pause="playState = 'paused'" @on-resume="playState = 'playing'">
          <div class="mx-4" v-for="(sponsor, idx) in sponsors" :key="idx">
            <img :src="`/patner/${sponsor.icon}`" :alt="sponsor.name" class="w-24 h-24 object-contain" />
          </div>
        </Vue3Marquee>
      </div>
    </section>
  </client-only>

</template>

<script setup lang="ts">

const patners = []

// Data untuk sponsor
interface SponsorsProps {
  icon: string;
  name: string;
}

const sponsors: SponsorsProps[] = [
  { icon: "logo.png", name: "ICHC" },
  { icon: "logo.png", name: "ICHC" },
  { icon: "AdMedika.webp", name: "ICHC" },
  { icon: "logo.png", name: "ICHC" },
  { icon: "AdMedika.webp", name: "ICHC" },
  { icon: "logo.png", name: "ICHC" },
  { icon: "AdMedika.webp", name: "ICHC" },
  { icon: "logo.png", name: "ICHC" },
  { icon: "AdMedika.webp", name: "ICHC" },];


</script>

<style scoped>
/* Style tambahan jika diperlukan */
</style>
