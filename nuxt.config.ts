/**
 * Replace these with the details of your website
 */
import { SITE_NAME, SITE_TITLE } from "./utils/seo";

export default defineNuxtConfig({
  devtools: { enabled: true },
  tailwindcss: { exposeConfig: true, editorSupport: true },
  build: { transpile: ["vue-sonner"] },
  colorMode: { classSuffix: "" },
  css: ["notivue/notifications.css", "notivue/animations.css"],

  notivue: {
    enqueue: true,
    pauseOnHover: true,
    pauseOnTabChange: true,
    position: "top-right",
    teleportTo: "body",
  },

  imports: {
    // Add tv and VariantProps to the set of auto imported modules
    imports: [
      { from: "tailwind-variants", name: "tv" },
      { from: "tailwind-variants", name: "VariantProps", type: true },
      { from: "vue-sonner", name: "toast", as: "useSonner" },
    ],
  },

  app: {
    head: {
      title: SITE_TITLE,
      titleTemplate: `%s | ${SITE_NAME}`,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "facebook-domain-verification",
          content: "8ru77nfefhm6qrcf3ws91y4dv0yy90",
        },
      ],
      link: [
        {
          hid: "icon",
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/pdfmake.min.js",
          defer: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/vfs_fonts.min.js",
          defer: true,
        },
      ],
    },
  },

  modules: [
    "@vee-validate/nuxt",
    "notivue/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@samk-dev/nuxt-vcalendar",
    "@morev/vue-transitions/nuxt",
    // Just in case you need it
    "@pinia/nuxt",
    "v-wave/nuxt",
  ],

  // axios: {
  //   baseURL: process.env.API ? process.env.API : "https://api.ichc.co.id",
  // },

  // moment: {
  //   defaultLocale: "id",
  //   locales: ["id"],
  // },
  // sitemap: {
  //   hostname: 'https://ichc.co.id',
  //   gzip: true,
  //   defaults: {
  //     changefreq: 'daily',
  //     priority: 1,
  //     lastmod: new Date(),
  //   },
  // },

  vWave: { color: "hsl(var(--primary))" },
  compatibilityDate: "2024-07-09",
});
