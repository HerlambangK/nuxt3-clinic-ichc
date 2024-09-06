<template>
  <UiContainer class="py-16 lg:py-24">
    <div class="flex flex-col md:flex-row md:justify-between">
      <div>
        <p class="mb-3 font-semibold text-primary">Artikel</p>
        <h3 class="mb-5 text-3xl font-semibold lg:text-4xl">Artikel Terakhir kami</h3>
        <p class="text-lg text-muted-foreground lg:text-sm">
          Berbagi informasi seputar kesehatan
        </p>
      </div>
      <UiButton class="hidden shrink-0 whitespace-nowrap md:flex">View all posts</UiButton>
    </div>

    <div class="mt-12 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-3">
      <div v-for="(artikel, id) in artikels" :key="id">
        <NuxtLink :to="link">
          <img v-if="image" :src="artikel.img" :alt="alt"
            class="mb-5 h-[240px] w-full rounded-lg object-cover shadow" />
        </NuxtLink>
        <p v-if="artikel.category" class="mb-2 text-sm font-semibold text-primary">{{ artikel.category }}</p>
        <NuxtLink :to="link">
          <p class="mb-2 text-base font-semibold lg:text-2xl">{{ artikel.title }}</p>
        </NuxtLink>
        <p v-if="artikel.content" class="mb-5 line-clamp-2 text-ellipsis text-sm text-nowrap no- text-muted-foreground"
          v-html="artikel.content" />

        <div class="flex items-center">
          <UiAvatar v-if="userImage" :src="userImage" :alt="userName"
            class="mr-3 rounded-full bg-background shadow ring-1 ring-ring/30" />
          <div>
            <p v-if="userName" class="text-sm font-semibold">{{ artikel.creator.name }}</p>
            <p v-if="date" class="text-sm text-muted-foreground">{{ date }}</p>
          </div>
        </div>
      </div>
    </div>
    <UiButton class="mt-10 w-full shrink-0 whitespace-nowrap md:hidden">View all posts</UiButton>
  </UiContainer>
</template>

<script lang="ts" setup>
// https://api.ichc.co.id/articles
// Definisikan state untuk menyimpan artikel

const artikels = ref([]);

const fetchArtikel = async () => {
  try {
    const response = await fetch('https://api.ichc.co.id/articles');
    const { data } = await response.json();
    artikels.value = data.slice(0, 3);

  } catch (error) {
    console.error("Gagal memuat artikel:", error);
  }
}

onMounted(() => {
  fetchArtikel();
});


const headline = "Kesehatan Gigi Untuk Anak";
const title = "Caries gigi pada anak";
const alt = "Caries gigi pada anaks";
const image =
  "https://ichc.co.id/_nuxt/img/1.3842f89.png";
const description =
  "Caries gigi pada anak?";
const date = "30 Jan 2024";
const userImage = "https://api.dicebear.com/7.x/lorelei/svg?flip=false";
const userName = "John Doe";
const link = "#";
</script>
