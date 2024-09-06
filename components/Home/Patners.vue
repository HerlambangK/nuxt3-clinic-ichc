<template>
  <client-only>
    <section id="sponsors" class="max-w-xl md:max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 class="text-lg md:text-xl text-center mb-6 mt-12 font-semibold">Our Partners</h2>
      <div class="mx-auto">
        <Vue3Marquee :pause-on-hover="true" @on-pause="playState = 'paused'" @on-resume="playState = 'playing'">
          <div class="mx-4" v-for="(sponsor, idx) in sponsors" :key="idx">
            <img :src="sponsor.src" :alt="sponsor.name" class="w-24 h-24 object-contain" />
          </div>
        </Vue3Marquee>
      </div>
    </section>
  </client-only>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface SponsorsProps {
  src: string;
  name: string;
}

const sponsors = ref<SponsorsProps[]>([]);

async function loadCarouselImages() {
  const imageModules = import.meta.glob('/public/patner/*.{png,jpg,jpeg,webp}');
  const images: SponsorsProps[] = [];

  for (const path in imageModules) {
    const imageModule = imageModules[path];
    const src = path.replace('/public', '');
    const name = src.split('/').pop()?.split('.')[0] || 'Unknown';
    images.push({ src, name });
  }

  sponsors.value = images;
}

onMounted(() => {
  loadCarouselImages();
});
</script>

<style scoped></style>
