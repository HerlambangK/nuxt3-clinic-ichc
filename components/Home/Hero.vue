<template>
  <div class="relative overflow-hidden group -z-0 rounded-lg">
    <div ref="slider" class="flex transition-transform ease-in-out duration-700"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0 top-0 left-0 right-0 ">
        <img :src="image.src" :alt="image.alt" class="w-full h-[200px] h:[200px] lg:h-[500px] object-cover " />
      </div>
    </div>

    <!-- Kontrol Tombol -->
    <button @click="prevSlide"
      class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
      <UiFancyIcon circle icon="lucide:chevron-left" class="h-4 w-4" />
    </button>
    <button @click="nextSlide"
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
      <UiFancyIcon circle icon="lucide:chevron-right" class="h-4 w-4" />
    </button>

    <!-- Indikator -->
    <div
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
      <button v-for="(image, index) in images" :key="index" @click="setSlide(index)" :class="{
        'bg-white': currentSlide === index,
        'bg-gray-500': currentSlide !== index,
      }" class="w-3 h-3 rounded-full"></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const images = ref([
  { src: 'https://ichc.co.id/_nuxt/img/1.3842f89.png', alt: 'Slide 1' },
  { src: 'https://ichc.co.id/_nuxt/img/1.3842f89.png', alt: 'Slide 2' },
  { src: 'https://ichc.co.id/_nuxt/img/1.3842f89.png', alt: 'Slide 3' },
]);

const currentSlide = ref(0);
let autoPlayInterval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + images.value.length) % images.value.length;
};

const setSlide = (index) => {
  currentSlide.value = index;
};

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    nextSlide();
  }, 3000);
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  clearInterval(autoPlayInterval);
});
</script>

<style scoped>
/* Additional styles if needed */
</style>
