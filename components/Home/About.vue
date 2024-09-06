<template>
    <UiContainer class="py-16 lg:py-24">
        <p class="text-center font-semibold text-primary">ICHC</p>
        <h2 class="mb-4 mt-3 text-center text-3xl font-semibold lg:mb-5 lg:text-4xl">
            Tentang Kami
        </h2>
        <p class="mx-auto max-w-[760px] text-center text-sm text-muted-foreground lg:text-sm">

            Selamat datang di i Care Health Clinic, tempat di mana kesehatan dan kesejahteraan Anda menjadi prioritas
            utama. Kami bangga menjadi mitra kesehatan terpercaya bagi Anda dan keluarga, menyediakan layanan perawatan
            kesehatan yang berkualitas tinggi dengan kepedulian dan dedikasi.
        </p>

        <template v-for="(f, i) in features" :key="i">
            <section class="mt-12 grid grid-cols-1 items-center gap-10 lg:mt-24 lg:h-[520px] lg:grid-cols-2 lg:gap-20">
                <div :class="[i % 2 == 0 ? 'lg:order-none' : 'lg:order-1']">
                    <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                        <Icon name="heroicons:chat-bubble-left-right" class="h-6 w-6 text-primary" />
                    </div>
                    <h3 class="mb-2 text-2xl font-semibold lg:mb-4 lg:text-3xl" v-html="f.title" />
                    <p class="text-muted-foreground lg:text-lg" v-html="f.description" />

                    <ul class="mt-8 flex flex-col gap-5 text-muted-foreground">
                        <template v-for="(p, k) in f.points" :key="`Point-${k}`">
                            <li class="flex gap-3 lg:text-lg">
                                <Icon name="heroicons:check-circle" class="h-6 w-6 shrink-0 text-primary" />
                                <span v-html="p.text" />
                            </li>
                        </template>
                    </ul>
                </div>
                <!-- eslint-disable-next-line vue/html-self-closing -->
                <img :src="f.imageUrl" :alt="f.title"
                    class="h-[300px] w-full rounded-lg object-cover shadow-sm lg:h-[520px]" />
            </section>
        </template>
    </UiContainer>
</template>

<script lang="ts" setup>
import { COMPANY_NAME } from "../../utils/constants.ts";
const features = [
    {
        title: "Operas Lasik Mata Terbaik",
        icon: "heroicons:eye",
        description: `Di ${COMPANY_NAME} kami menyediakan layanan terbaik, dengan pelayanan terbaik.`,
        imageUrl:
            "https://ichc.co.id/_nuxt/img/1.3842f89.png",
        points: [
            { text: "Konsultasi Spesialis Mata Terbaik" },
            { text: "Cek Kondisi Mata" },
            { text: "Peratan Lasik Mata terbaru" },
        ],
    },
];
</script>
