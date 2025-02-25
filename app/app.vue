<template>
  <div class="content-grid grid-rows-[auto_1fr_auto]">
    <PrimaryHeader />
    <NuxtPage />
    <PrimaryFooter />
  </div>
</template>

<script setup>
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
