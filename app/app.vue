<template>
  <div class="content-grid grid-rows-[auto_1fr_auto]">
    <!-- Google Tag Manager (noscript) -->
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-MR68TRLL"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <PrimaryHeader />
    <NuxtPage />
    <PrimaryFooter />
  </div>
</template>

<script setup>
import { useHead } from "#imports";
import "@/assets/css/theme.css";
import "@/assets/css/main.css";

import PrimaryHeader from "./components/base/PrimaryHeader.vue";
import PrimaryFooter from "./components/base/PrimaryFooter.vue";

const { client } = usePrismic();
// Fetch a single document by its type
const { data: seoData } = await useAsyncData("seoData", () =>
  client.getSingle("main_seo"),
);

useSeoMeta({
  title: seoData.value?.data.main_title || "Default Title",
  ogTitle: seoData.value?.data.main_title || "Default Title",
  description: seoData.value?.data.meta_description || "Default Description",
  ogDescription: seoData.value?.data.meta_description || "Default Description",
  ogImage: seoData.value?.data.og_image?.url || "",
});

// Inject Google Tag Manager and Google Analytics scripts into the head
useHead({
  script: [
    {
      children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MR68TRLL');`,
      type: "text/javascript",
    },
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-55KZZYRTSF",
      async: true,
    },
    {
      children: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-55KZZYRTSF');`,
      type: "text/javascript",
    },
  ],
});
</script>

<style>
html,
body,
#__nuxt {
  scroll-behavior: smooth;
}
body {
  background-color: var(--color-gray-100);
}
</style>
